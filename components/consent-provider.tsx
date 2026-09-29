"use client";

import { useCallback, useEffect, useMemo, useState, useSyncExternalStore, type ReactNode } from "react";
import { CookieBanner } from "@/components/cookie-banner";
import { ConsentContext } from "@/components/consent-context";
import { company } from "@/lib/company";
import {
  clearAnalyticsCookies,
  getServerConsent,
  readConsent,
  subscribeConsent,
  writeConsent,
  type ConsentChoice,
} from "@/lib/consent";

function loadAnalytics() {
  if (document.getElementById("ga-loader")) return;
  const win = window as Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
  win.dataLayer = win.dataLayer ?? [];
  win.gtag = (...args: unknown[]) => {
    win.dataLayer?.push(args);
  };
  win.gtag("js", new Date());
  win.gtag("config", company.analyticsId);
  const script = document.createElement("script");
  script.id = "ga-loader";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${company.analyticsId}`;
  document.head.appendChild(script);
}

function unloadAnalytics() {
  document.getElementById("ga-loader")?.remove();
  clearAnalyticsCookies();
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const consent = useSyncExternalStore(subscribeConsent, readConsent, getServerConsent);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    if (consent?.analytics) loadAnalytics();
    else unloadAnalytics();
  }, [consent]);

  const save = useCallback((choice: ConsentChoice) => {
    writeConsent(choice);
    setSettingsOpen(false);
  }, []);

  const openSettings = useCallback(() => {
    setSettingsOpen(true);
  }, []);

  const closeSettings = useCallback(() => {
    setSettingsOpen(false);
  }, []);

  const value = useMemo(
    () => ({ consent, openSettings, closeSettings, save }),
    [consent, openSettings, closeSettings, save],
  );

  const showBanner = settingsOpen || consent === null;

  return (
    <ConsentContext.Provider value={value}>
      {children}
      {showBanner ? <CookieBanner key={settingsOpen ? "settings" : "banner"} mode={settingsOpen ? "settings" : "banner"} /> : null}
    </ConsentContext.Provider>
  );
}
