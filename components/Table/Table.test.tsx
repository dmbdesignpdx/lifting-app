// Theirs
import { test, expect, describe } from "bun:test";
import { render, screen } from "@testing-library/react";

// Ours
import { Table } from "./Table";
import {
  INITIAL_DATA,
  Label,
  Name,
  PERCENTAGES,
} from "@/constants";

// Frequently used methods
const { getByRole, getAllByRole } = screen;

const columnHeaders = [
  Label.BREAKDOWN,
  Name.SNATCH,
  Name.CLEAN_JERK,
  Name.BACK_SQUAT,
];
const totalCells = PERCENTAGES.length * columnHeaders.length;

describe("Table Component", () => {
  test("Renders its content correctly", async () => {
    render(<Table state={INITIAL_DATA} />);

    const root = getByRole("article", { name: Label.AMOUNTS });
    const heading = getByRole("heading", { name: Label.AMOUNTS });
    const table = getByRole("table", { name: "Table" });
    const tableHeader = getByRole("rowgroup", { name: Label.TABLE_HEADER });
    const tableBody = getByRole("rowgroup", { name: Label.TABLE_HEADER });
    const columns = getAllByRole("columnheader");
    const columnCells = getAllByRole("cell");

    expect(root).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(table).toBeInTheDocument();
    expect(table).toHaveAttribute("aria-live", "assertive");
    expect(tableHeader).toBeInTheDocument();
    expect(tableBody).toBeInTheDocument();
    expect(columns).toHaveLength(columnHeaders.length);

    for (const column of columns) {
      expect(column).toBeInTheDocument();
      expect(columnHeaders).toContain(column.textContent);
    }

    expect(columnCells).toHaveLength(totalCells);
  });
});
