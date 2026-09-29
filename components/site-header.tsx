"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";

const links = [
  { href: "/#expertises", label: "Expertises" },
  { href: "/#realisations", label: "Réalisations" },
  { href: "/#entreprise", label: "L’entreprise" },
];

export function SiteHeader({ home = false }: { home?: boolean }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function close() {
    setOpen(false);
  }

  return (
    <header className={open ? "menu-open" : undefined}>
      <Link className="logo" href={home ? "#accueil" : "/"} onClick={close}>
        <img src="/logo.png" alt="Beattie Sols" />
      </Link>
      <nav id="site-nav">
        {links.map((link) => (
          <Link href={link.href} key={link.href} onClick={close}>
            {link.label}
          </Link>
        ))}
      </nav>
      <Link className="nav-cta" href="/devis" onClick={close}>
        Demander un devis <ArrowRight size={16} />
      </Link>
      <button
        className="menu"
        type="button"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>
    </header>
  );
}
