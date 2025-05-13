import { INITIAL_DATA } from "@/constants";


export type Lift = typeof INITIAL_DATA;

export interface LiftGroup {
  label: string;
  lift: Lift;
}

export type LiftData = LiftGroup[];
