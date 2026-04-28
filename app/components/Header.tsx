"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { href: "/la-loge", label: "La Loge (4-6p)" },
  { href: "/le-cepage", label: "Le Cépage (9p)" },
  { href: "/la-grande-pauverdiere", label: "L'ensemble (15p)" }
];

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [phoneOpen, setPhoneOpen] = useState(false);
  const phoneWrapperRef = useRef<HTMLDivElement>(null);
  const logoSrc = isHomePage ? "/assets/logo/logo-white.svg" : "/assets/logo/logo-black-2.svg";

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (!phoneWrapperRef.current) {
        return;
      }

      if (!phoneWrapperRef.current.contains(event.target as Node)) {
        setPhoneOpen(false);
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <header className={`site-header ${isHomePage ? "site-header--home" : "site-header--white"}`}>
      <div className="header-inner">
        <div className="header-left">
          <button
            className="mobile-menu-toggle"
            type="button"
            aria-label="Ouvrir le menu"
            onClick={() => setMenuOpen(true)}
          >
            <span className="mobile-menu-icon"></span>
          </button>
          <div className="desktop">
            <Link href="/" aria-label="Retour a l'accueil">
              <img className="site-logo" src={logoSrc} alt="La Pauverdiere des Vignes" />
            </Link>
          </div>
        </div>

        <div className="header-center">
          <div className="tablette">
            <Link href="/" aria-label="Retour a l'accueil">
              <img className="site-logo" src={logoSrc} alt="La Pauverdiere des Vignes" />
            </Link>
          </div>
        </div>

        <div className="header-right">
          <div className="header-nav desktop-menu">
            <nav className="primary-navigation" aria-label="Navigation principale">
              <ul className="primary-menu">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="header-right-content">
            <div className="header-phone-wrapper" ref={phoneWrapperRef}>
              <button
                className={`header-phone-button${phoneOpen ? " active" : ""}`}
                type="button"
                aria-label="Afficher le contact"
                onClick={() => setPhoneOpen((value) => !value)}
              >
                <img src="/assets/Phone.svg" alt="Telephone" />
              </button>
              <div className={`phone-contact-overlay${phoneOpen ? " open" : ""}`} aria-hidden={!phoneOpen}>
                <div className="phone-contact-card">
                  <div className="phone-contact-title">Une question ?</div>
                  <div className="phone-contact-subtitle">Contactez-nous</div>
                  <div className="phone-contact-row">
                    <div className="phone-contact-icon-wrapper">
                      <img className="phone-contact-icon" src="/assets/Phone.svg" alt="Telephone" />
                    </div>
                    <a href="tel:+33000000000" style={{ letterSpacing: 0, textDecoration: "underline" }}>
                      +33 0 00 00 00 00
                    </a>
                  </div>
                  <div className="phone-contact-row">
                    <div className="phone-contact-icon-wrapper">
                      <img className="phone-contact-icon" src="/assets/mail-3.svg" alt="Email" />
                    </div>
                    <span style={{ letterSpacing: 0, textDecoration: "underline" }}>contact@domaine.com</span>
                  </div>
                </div>
              </div>
            </div>
            <Link className="header-reserve-button classic-button" href="/les-gites">
              Réserver
            </Link>
          </div>
        </div>
      </div>

      <div className={`mobile-menu-overlay${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
        <button
          className="mobile-menu-close"
          type="button"
          aria-label="Fermer le menu"
          onClick={() => setMenuOpen(false)}
        >
          &times;
        </button>
        <div className="mobile-menu-inner">
          <nav className="mobile-menu-nav" aria-label="Menu mobile">
            <ul className="mobile-primary-menu">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link className="header-reserve-button-mobile" href="/les-gites" onClick={() => setMenuOpen(false)}>
            Reserver
          </Link>
        </div>
      </div>
    </header>
  );
}
