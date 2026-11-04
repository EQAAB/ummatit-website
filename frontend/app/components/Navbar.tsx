"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

const islamicHref = "https://qurancoaching.com/";

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand${light ? " brand-light" : ""}`} href="/" aria-label="Ummat IT House home">
      <span className="brand-mark">
        <span>U</span>
      </span>
      <span className="brand-copy">
        <strong>UMMAT</strong>
        <small>IT HOUSE</small>
      </span>
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  const onHome = pathname === "/";
  const onCourses = pathname.startsWith("/courses");
  const onAbout = pathname === "/about";
  const onContact = pathname === "/contact";
  const onShop = pathname.startsWith("/islamic-shop");

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Brand />
        <button
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
        <nav className={`nav-links${open ? " nav-open" : ""}`} aria-label="Main navigation">
          <a
            className={onHome ? "nav-active" : undefined}
            aria-current={onHome ? "page" : undefined}
            href="/"
            onClick={close}
          >
            Home
          </a>
          <a href={islamicHref} target="_blank" rel="noopener noreferrer" onClick={close}>
            Islamic Studies <span className="external">↗</span>
          </a>
          <a
            className={onCourses ? "nav-active" : undefined}
            aria-current={onCourses ? "page" : undefined}
            href="/courses"
            onClick={close}
          >
            IT Courses
          </a>
          <a
            className={onShop ? "nav-active" : undefined}
            aria-current={onShop ? "page" : undefined}
            href="/islamic-shop"
            onClick={close}
          >
            Islamic Shop
          </a>
          <a
            className={onAbout ? "nav-active" : undefined}
            aria-current={onAbout ? "page" : undefined}
            href="/about"
            onClick={close}
          >
            About Us
          </a>
          <a
            className={onContact ? "nav-active" : undefined}
            aria-current={onContact ? "page" : undefined}
            href="/contact"
            onClick={close}
          >
            Contact Us
          </a>
          <a className="nav-cta" href="/courses" onClick={close}>
            Start learning <span>↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
