import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookie-settings-button";

export function SiteFooter() {
  return (
    <footer>
      <img src="/logo.png" alt="Beattie Sols" />
      <p>3 route de Melesse · 35520 La Mézière</p>
      <nav className="legal-nav" aria-label="Informations légales">
        <Link href="/mentions-legales">Mentions légales</Link>
        <Link href="/confidentialite">Confidentialité</Link>
        <Link href="/cookies">Cookies</Link>
        <Link href="/cgv">CGV</Link>
        <CookieSettingsButton />
      </nav>
      <p>© 2026 Beattie Sols</p>
    </footer>
  );
}
