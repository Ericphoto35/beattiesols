import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function LegalPage({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="legal">
        <p className="kicker">Informations</p>
        <h1>{title}</h1>
        <p className="legal-intro">{intro}</p>
        {children}
        <p className="legal-updated">Dernière mise à jour : 29 septembre 2026.</p>
      </main>
      <SiteFooter />
    </>
  );
}
