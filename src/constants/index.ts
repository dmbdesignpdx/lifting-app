export const PERCENTAGES = Array.from({ length: 11 }, (_, i) => 100 - i * 5);
export const LOCAL_KEY = "_lifting-app-data_";

export type LiftType = (typeof LIFTS)[number];

export type LiftState = {
  [key in LiftType]: number;
};

export const LIFT = {
  snatch: "Snatch",
  clean: "Clean & Jerk",
  back: "Back Squat",
  front: "Front Squat",
} as const;

export const LIFTS = Object.values(LIFT);

export const INITIAL_DATA = LIFTS.reduce((state, current) => {
  return Object.assign(state, { [current]: 0 });
}, {} as LiftState);

export const PATH = {
  dev: new URL("http://localhost:3000"),
  site: new URL("https://olympic-lift.netlify.app"),
  author: new URL("https://danielblake.dev"),
} as const;
