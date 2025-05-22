// Theirs
import { test, expect, describe } from "bun:test";
import { render, screen } from "@testing-library/react";

// Ours
import { Table } from "./Table";
import {
  INITIAL_DATA,
  Label,
  TABLE_HEADERS,
  PERCENTAGES,
} from "@/constants";

// Frequently used methods
const { getByRole, getAllByRole } = screen;

const totalCells = PERCENTAGES.length * TABLE_HEADERS.length;

describe("Table Component", () => {
  test("Renders its content correctly", async () => {
    render(<Table state={INITIAL_DATA} />);

    const heading = getByRole("caption", { name: Label.AMOUNTS });
    const table = getByRole("table", { name: "Table" });
    const tableHeader = getByRole("rowgroup", { name: Label.TABLE_HEADER });
    const tableBody = getByRole("rowgroup", { name: Label.TABLE_HEADER });
    const columns = getAllByRole("columnheader");
    const columnCells = getAllByRole("cell");

    expect(heading).toBeInTheDocument();
    expect(table).toBeInTheDocument();
    expect(table).toHaveAttribute("aria-live", "assertive");
    expect(tableHeader).toBeInTheDocument();
    expect(tableBody).toBeInTheDocument();
    expect(columns).toHaveLength(TABLE_HEADERS.length);

    for (const column of columns) {
      expect(column).toBeInTheDocument();
      expect(TABLE_HEADERS).toContain(column.textContent);
    }

    expect(columnCells).toHaveLength(totalCells);
  });
});
