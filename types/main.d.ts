import { INITIAL_DATA } from "@/constants";


export type LiftState = typeof INITIAL_DATA;

export interface LiftGroup {
  label: string;
  lift: LiftState;
}

export type LiftData = LiftGroup[];
