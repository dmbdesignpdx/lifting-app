"use client";


import type { LiftState } from "@/types/main";
import {
  Lift,
  INITIAL_DATA,
  LOCAL_KEY,
} from "@/constants";


type LiftStateFunctions = [typeof getter, typeof setter];


function setter(_: LiftState, formData: FormData): LiftState {
  const data = ({
    [Lift.Snatch.NAME]: Number(formData.get(Lift.Snatch.NAME)) || 0,
    [Lift.Clean.NAME]: Number(formData.get(Lift.Clean.NAME)) || 0,
    [Lift.Back.NAME]: Number(formData.get(Lift.Back.NAME)) || 0,
    [Lift.Front.NAME]: Number(formData.get(Lift.Front.NAME)) || 0,
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
