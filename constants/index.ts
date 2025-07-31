export const PERCENTAGES =
  Array.from({ length: 11 }, (_, i) => 100 - i * 5);
export const LOCAL_KEY = "_lifting-data_";

export const Lift = {
  SNATCH: "Snatch",
  CLEAN: "Clean & Jerk",
  BACK: "Back Squat",
  FRONT: "Front Squat",
} as const;

export const LIFTS = Object.values(Lift);

export type LiftType = typeof LIFTS[number];

export type LiftState = {
  [key in LiftType]: number;
};

export const Meta = {
  NAME: "Olympic Lifting Calculator",
  SHORT_NAME: "Lifting Calculator",
  DESCRIPTION: "A simple PR and percentage calculator for Olympic lifting.",
  BASE: "/",
  THEME_COLOR: "#a855f7",
  BKG_COLOR: "#FAFAFA",
  AUTHOR: "Daniel Blake",
} as const;

export const Label = {
  GOAL: "GOAL",
  BREAKDOWN: "(Step)",
  PROMPT: "Start by entering your current PRs",
  CALCULATE: "Calculate",
  HEADING: "Olympic Lifting Calculator",
  SHOW_CALC: "Show Inputs",
  HIDE_CALC: "Hide Inputs",
  AMOUNTS: "Breakdown of Amounts",
  TABLE_HEADER: "Table Header",
  TABLE_BODY: "Table Body",
  FORM_HEADER: "Enter your current PRs for...",
  CURRENT_HEADER: "Your Current PRs",
} as const;

export const INITIAL_DATA = LIFTS.reduce((state, current) => {
  return {
    ...state,
    [current]: 0,
  };
}, {} as LiftState);

export const Url = {
  BASE: new URL("https://lifting-app.vercel.app"),
  AUTHOR: new URL("https://danielblake.dev"),
} as const;


export const TABLE_HEADERS = [
  Label.BREAKDOWN,
  ...LIFTS.map(item => item),
] as const;
