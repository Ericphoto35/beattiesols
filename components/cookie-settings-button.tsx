"use client";

import { useConsent } from "@/components/consent-context";

export function CookieSettingsButton() {
  const { openSettings } = useConsent();
  return (
    <button type="button" onClick={openSettings}>
      Gérer les cookies
    </button>
  );
}
