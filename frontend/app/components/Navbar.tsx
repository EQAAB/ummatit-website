"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const islamicHref = "https://qurancoaching.com/";

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link className={`brand${light ? " brand-light" : ""}`} href="/" aria-label="Ummat IT House home">
      <span className="brand-mark">
        <span>U</span>
      </span>
      <span className="brand-copy">
        <strong>UMMAT</strong>
        <small>IT HOUSE</small>
      </span>
    </Link>
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
          <Link
            className={onHome ? "nav-active" : undefined}
            aria-current={onHome ? "page" : undefined}
            href="/"
            onClick={close}
          >
            Home
          </Link>
          <a href={islamicHref} target="_blank" rel="noopener noreferrer" onClick={close}>
            Islamic Studies <span className="external">↗</span>
          </a>
          <Link
            className={onCourses ? "nav-active" : undefined}
            aria-current={onCourses ? "page" : undefined}
            href="/courses"
            onClick={close}
          >
            IT Courses
          </Link>
          <Link
            className={onShop ? "nav-active" : undefined}
            aria-current={onShop ? "page" : undefined}
            href="/islamic-shop"
            onClick={close}
          >
            Islamic Shop
          </Link>
          <Link
            className={onAbout ? "nav-active" : undefined}
            aria-current={onAbout ? "page" : undefined}
            href="/about"
            onClick={close}
          >
            About Us
          </Link>
          <Link
            className={onContact ? "nav-active" : undefined}
            aria-current={onContact ? "page" : undefined}
            href="/contact"
            onClick={close}
          >
            Contact Us
          </Link>
          <Link className="nav-cta" href="/courses" onClick={close}>
            Start learning <span>↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
