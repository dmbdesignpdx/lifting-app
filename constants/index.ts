export const PERCENTAGES =
  Array.from({ length: 11 }, (_, i) => 100 - i * 5);
export const LOCAL_KEY = "_lifting-data_";

export const Name = {
  SNATCH: "Snatch",
  CLEAN_JERK: "Clean & Jerk",
  BACK_SQUAT: "Back Squat",
} as const;

export const Label = {
  GOAL: "GOAL",
  BREAKDOWN: "Breakdown",
  PROMPT: "Start by entering your current PRs",
  CALCULATE: "Calculate",
  HEADING: "Olympic Lifting Calculator",
} as const;

export const INITIAL_DATA = {
  [Name.SNATCH]: 0,
  [Name.CLEAN_JERK]: 0,
  [Name.BACK_SQUAT]: 0,
};
