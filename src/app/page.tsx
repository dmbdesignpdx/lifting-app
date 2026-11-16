"use client";

import { useState } from "react";

import { Button } from "@/components/button";
import { Data } from "@/components/data";
import { Form } from "@/components/form";
import { Table } from "@/components/table";
import { LIFT, type LiftState } from "@/constants";
import { label } from "@/content";
import { useLocalStorage } from "@/hooks/use-lift-state";

export default function Home() {
  const [storageState, setStorageState] = useLocalStorage();
  const liftState = JSON.parse(storageState) as LiftState;
  const [showCalc, setShowCalc] = useState(false);
  const buttonLabel = showCalc ? label.hideCalc : label.showCalc;

  function handleClick() {
    setShowCalc(prev => !prev);
  }

  function updateData(formData: FormData) {
    const data = {
      [LIFT.snatch]: Number(formData.get(LIFT.snatch)) || 0,
      [LIFT.clean]: Number(formData.get(LIFT.clean)) || 0,
      [LIFT.back]: Number(formData.get(LIFT.back)) || 0,
      [LIFT.front]: Number(formData.get(LIFT.front)) || 0,
    };

    setStorageState(JSON.stringify(data));
  }

  return (
    <>
      <Button
        label={buttonLabel}
        onClick={handleClick}
        type="button"
        variant="text"
      />
      {showCalc && (
        <Form
          action={updateData}
          state={liftState}
        />
      )}
      <Data state={liftState} />
      <Table state={liftState} />
    </>
  );
}
