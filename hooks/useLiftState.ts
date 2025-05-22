"use client";


import type { LiftState } from "@/constants";
import {
  Lift,
  INITIAL_DATA,
  LOCAL_KEY,
} from "@/constants";


type LiftStateFunctions = [typeof getter, typeof setter];


function setter(_: LiftState, formData: FormData): LiftState {
  const data = ({
    [Lift.SNATCH]: Number(formData.get(Lift.SNATCH)) || 0,
    [Lift.CLEAN]: Number(formData.get(Lift.CLEAN)) || 0,
    [Lift.BACK]: Number(formData.get(Lift.BACK)) || 0,
    [Lift.FRONT]: Number(formData.get(Lift.FRONT)) || 0,
  });

  if (typeof window !== "undefined") {
    window.localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
  }

  return data;
}

function getter(): LiftState {
  if (typeof window !== "undefined") {
    const a = window.localStorage.getItem(LOCAL_KEY);

    if (a) return JSON.parse(a);

    return INITIAL_DATA;
  }

  return INITIAL_DATA;
}


export function useLiftState(): LiftStateFunctions {
  return [getter, setter];
}
