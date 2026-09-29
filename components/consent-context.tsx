"use client";

import { createContext, useContext } from "react";
import type { ConsentChoice, ConsentState } from "@/lib/consent";

export type ConsentContextValue = {
  consent: ConsentState | null;
  openSettings: () => void;
  closeSettings: () => void;
  save: (choice: ConsentChoice) => void;
};

export const ConsentContext = createContext<ConsentContextValue | null>(null);

export function useConsent() {
  const value = useContext(ConsentContext);
  if (!value) {
    throw new Error("Le bandeau cookies doit être utilisé dans le site.");
  }
  return value;
}
