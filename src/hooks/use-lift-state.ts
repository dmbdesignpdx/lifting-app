import { useSyncExternalStore } from "react";

import { LOCAL_KEY } from "@/constants";

const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => void listeners.delete(cb);
}

function setStorage(data: string) {
  localStorage.setItem(LOCAL_KEY, data);
  listeners.forEach(cb => void cb());
}

export function useLocalStorage(): [string, (data: string) => void] {
  const value = useSyncExternalStore(
    subscribe,
    () => localStorage.getItem(LOCAL_KEY),
    () => null,
  );

  return [value || "{}", setStorage];
}
