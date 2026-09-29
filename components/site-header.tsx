import { ArrowRight, Menu } from "lucide-react";
import Link from "next/link";

export function SiteHeader({ home = false }: { home?: boolean }) {
  return (
    <header>
      <Link className="logo" href={home ? "#accueil" : "/"}>
        <img src="/logo.png" alt="Beattie Sols" />
      </Link>
      <nav>
        <Link href="/#expertises">Expertises</Link>
        <Link href="/#realisations">Réalisations</Link>
        <Link href="/#entreprise">L’entreprise</Link>
      </nav>
      <Link className="nav-cta" href="/devis">
        Demander un devis <ArrowRight size={16} />
      </Link>
      <button className="menu" type="button" aria-label="Menu">
        <Menu />
      </button>
    </header>
  );
}
