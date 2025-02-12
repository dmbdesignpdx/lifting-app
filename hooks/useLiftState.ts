"use client";


import type { Lift } from "@/types/main";
import {
  Name,
  INITIAL_DATA,
  LOCAL_KEY,
} from "@/constants";


type LiftStateFuncs = [typeof getter, typeof setter];


function setter(_: Lift, formData: FormData): Lift {
  const data = ({
    [Name.SNATCH]: Number(formData.get(Name.SNATCH)) || 0,
    [Name.CLEAN_JERK]: Number(formData.get(Name.CLEAN_JERK)) || 0,
    [Name.BACK_SQUAT]: Number(formData.get(Name.BACK_SQUAT)) || 0,
  });

  if (typeof window !== "undefined") {
    window.localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
  }

  return data;
}

function getter(): Lift {
  if (typeof window !== "undefined") {
    const a = window.localStorage.getItem(LOCAL_KEY);

    if (a) return JSON.parse(a);

    return INITIAL_DATA;
  }

  return INITIAL_DATA;
}


export function useLiftState(): LiftStateFuncs {
  return [getter, setter];
}
