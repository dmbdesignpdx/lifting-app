"use client";

// Theirs
import {
  useActionState,
  useState,
  useEffect,
} from "react";

// Ours
import { Form } from "@/components/Form";
import { Table } from "@/components/Table";
import { CurrentState } from "@/components/CurrentState";
import { useLiftState } from "@/hooks/useLiftState";
import { Button } from "@/components/Button";
import { Label } from "@/constants";


export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [getLiftState, setLiftState] = useLiftState();
  const [state, formAction, isPending] = useActionState(setLiftState, getLiftState());
  const [showCalc, setShowCalc] = useState(true);
  const buttonLabel = showCalc ? Label.HIDE_CALC : Label.SHOW_CALC;

  function handleClick() {
    setShowCalc(prev => !prev);
  }

  useEffect(() => void setIsClient(true), []);

  if (!isClient) return <p>Loading...</p>;

  return (
    <>
      <Button
        label={buttonLabel}
        onClick={handleClick}
        type="button"
        variant="text"
        disabled={isPending}
      />
      {showCalc && <Form action={formAction} />}
      <CurrentState state={state} />
      <Table state={state} />
    </>
  );
}
