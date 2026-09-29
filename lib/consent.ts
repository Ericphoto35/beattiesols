export type ConsentChoice = {
  analytics: boolean;
  maps: boolean;
  video: boolean;
};

export type ConsentState = ConsentChoice & {
  updatedAt: number;
};

const STORAGE_KEY = "beattie-consent";
const COOKIE_NAME = "beattie_consent";
const CHANGE_EVENT = "beattie-consent-change";
const MAX_AGE_MS = 183 * 24 * 60 * 60 * 1000;
const MAX_AGE_SECONDS = 183 * 24 * 60 * 60;

let snapshot: ConsentState | null = null;
let loaded = false;

function isChoice(value: unknown): value is ConsentState {
  if (!value || typeof value !== "object") return false;
  const choice = value as Partial<ConsentState>;
  return (
    typeof choice.analytics === "boolean" &&
    typeof choice.maps === "boolean" &&
    typeof choice.video === "boolean" &&
    typeof choice.updatedAt === "number"
  );
}

function parseStored(): ConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (!isChoice(parsed)) return null;
    if (Date.now() - parsed.updatedAt > MAX_AGE_MS) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function readConsent(): ConsentState | null {
  if (!loaded) {
    snapshot = parseStored();
    loaded = true;
  }
  return snapshot;
}

export function getServerConsent(): null {
  return null;
}

export function subscribeConsent(onStoreChange: () => void) {
  const onStorage = () => {
    loaded = false;
    onStoreChange();
  };
  window.addEventListener(CHANGE_EVENT, onStoreChange);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onStoreChange);
    window.removeEventListener("storage", onStorage);
  };
}

export function writeConsent(choice: ConsentChoice): ConsentState {
  const stored: ConsentState = { ...choice, updatedAt: Date.now() };
  snapshot = stored;
  loaded = true;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  const value = `a${choice.analytics ? 1 : 0}.m${choice.maps ? 1 : 0}.v${choice.video ? 1 : 0}`;
  document.cookie = `${COOKIE_NAME}=${value}; path=/; max-age=${MAX_AGE_SECONDS}; SameSite=Lax`;
  window.dispatchEvent(new Event(CHANGE_EVENT));
  return stored;
}

export function clearAnalyticsCookies() {
  const names = document.cookie.split(";").map((part) => part.split("=")[0]?.trim() ?? "");
  for (const name of names) {
    if (name === "_ga" || name === "_gid" || name.startsWith("_ga_") || name.startsWith("_gat")) {
      document.cookie = `${name}=; path=/; max-age=0; SameSite=Lax`;
    }
  }
}
