import Link from "next/link";

const navItems = [
  { href: "/la-loge", label: "La Loge (4-6p)" },
  { href: "/le-cepage", label: "Le Cépage (9p)" },
  { href: "/la-grande-pauverdiere", label: "L'ensemble (15p)" }
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div style={{ width: 150, textAlign: "center", margin: "50px auto" }}>
        <Link href="/" title="La Pauverdiere des Vignes">
          <img src="/assets/logo/logo-brown.svg" alt="Logo" />
        </Link>
      </div>

      <div className="footer-tier footer-tier-1">
        <div className="footer-container">
          <div className="footer-logo">
            <Link href="/">La Pauverdiere des Vignes</Link>
          </div>
          <nav className="footer-nav footer-nav--primary" aria-label="Navigation footer principale">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="footer-tier footer-tier-2">
        <div className="footer-container footer-container--tier2">
          <nav className="footer-nav footer-nav--secondary" aria-label="Navigation secondaire">
            <a href="#contact">Contactez-nous</a>
            <a href="#cgv">CGV</a>
          </nav>
          <div className="footer-tier-2-spacer"></div>
        </div>
      </div>

      <div className="footer-tier footer-tier-3">
        <div className="footer-container footer-container--tier3">
          <nav className="footer-legal" aria-label="Liens legaux">
            <a href="#mentions-legales">Mentions legales</a>
            <a href="#rgpd">RGPD</a>
          </nav>
          <div className="footer-copyright">&copy; {year} La Pauverdiere des Vignes. Tous droits reserves.</div>
          <div className="footer-tier-3-spacer"></div>
        </div>
      </div>
    </footer>
  );
}
