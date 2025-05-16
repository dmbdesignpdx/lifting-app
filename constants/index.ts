export const PERCENTAGES =
  Array.from({ length: 11 }, (_, i) => 100 - i * 5);
export const LOCAL_KEY = "_lifting-data_";

export const Lift = {
  Snatch: {
    NAME: "Snatch",
    ICON: "🍕",
  },
  Clean: {
    NAME: "Clean & Jerk",
    ICON: "🌮",
  },
  Back: {
    NAME: "Back Squat",
    ICON: "🥪",
  },
  Front: {
    NAME: "Front Squat",
    ICON: "🌭",
  },
} as const;

export const Label = {
  GOAL: "GOAL",
  BREAKDOWN: "Breakdown",
  PROMPT: "Start by entering your current PRs",
  CALCULATE: "Calculate",
  HEADING: "Olympic Lifting Calculator",
  SHOW_CALC: "Show Calculator",
  HIDE_CALC: "Hide Calculator",
  AMOUNTS: "Amounts",
  TABLE_HEADER: "Table Header",
  TABLE_BODY: "Table Body",
} as const;

export const INITIAL_DATA = {
  [Lift.Snatch.NAME]: 0,
  [Lift.Clean.NAME]: 0,
  [Lift.Back.NAME]: 0,
  [Lift.Front.NAME]: 0,
};
