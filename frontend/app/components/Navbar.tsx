"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "./CartProvider";

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
  const { items } = useCart();
  const cartCount = items.reduce((count, item) => count + item.quantity, 0);
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
          <Link className="nav-cart" href="/shopping-cart" onClick={close} aria-label={`Shopping cart, ${cartCount} items`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 1.9-1.5L22 8H6" />
              <circle cx="10" cy="20" r="1" /><circle cx="18" cy="20" r="1" />
            </svg>
            <span className="nav-cart-count">{cartCount}</span>
          </Link>
          <Link className="nav-cta" href="/courses" onClick={close}>
            Start learning <span>↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
