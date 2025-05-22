import { type LiftState } from "@/constants";


export interface LiftGroup {
  label: string;
  lift: LiftState;
}

export type LiftData = LiftGroup[];
