"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const shopCategories = [
  { name: "Ghee & Oils", slug: "/products/ghee-oils" },
  { name: "Honey", slug: "/products/honey" },
  { name: "Birista", slug: "/products/birista" },
  { name: "Masale", slug: "/products/masale" },
  { name: "Pickles", slug: "/products/pickles" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShopOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <header className="site-header premium-header">
      <div className="container header-inner">
        {/* Brand */}
        <Link href="/" className="brand">
          <span className="brand-logo">🌿</span>
          <span className="brand-text">
            <span className="brand-name">PureOrigins</span>
            <span className="brand-tagline">
              From village kitchens to your city home
            </span>
          </span>
        </Link>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Nav */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <Link href="/" className="nav-link">Home</Link>

          <div className="nav-dropdown" ref={dropdownRef}>
            <button
              className="nav-link dropdown-btn"
              onClick={() => setShopOpen(!shopOpen)}
            >
              Shop ▾
            </button>

            <div className={`dropdown-menu ${shopOpen ? "show" : ""}`}>
              {shopCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={cat.slug}
                  className="dropdown-item"
                  onClick={() => {
                    setMenuOpen(false);
                    setShopOpen(false);
                  }}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/about" className="nav-link">About</Link>
          <Link href="/contact" className="nav-link">Contact</Link>

          <Link
            href="/products"
            className="btn-primary nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Shop Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
