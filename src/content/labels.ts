import { LIFTS } from "@/constants";

export const label = {
  goal: "GOAL",
  breakdown: "(Amt)",
  prompt: "Start by entering your current PRs",
  calculate: "Calculate",
  heading: "Olympic Lifting Calculator",
  showCalc: "Show Inputs",
  hideCalc: "Hide Inputs",
  amounts: "Exertion per Lift",
  tableHeader: "Table Header",
  tableBody: "Table Body",
  formHeader: "Enter your current PRs for...",
  currentHeader: "My Current PRs",
  back: "Back to Home",
};

export const tableHeaders = [label.breakdown, ...LIFTS.map(item => item)];
