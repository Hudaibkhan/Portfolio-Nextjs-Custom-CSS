"use client";
import { useState } from "react";
import Link from "next/link";
import "../styles/header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id="main-box">
      <div className="logo"><a href="/">Portfolio</a></div>
      <button id="menu-button" onClick={toggle}>
        ☰
      </button>
      <nav className={`nav-menu ${isMenuOpen? 'open' : ''}`}>
        <ul>
            <li>
            <Link href="/">Home</Link>
            </li>
            <li>
            <Link href="/about">About</Link>
            </li>
            <li>
            <Link href="/project">Project</Link>
            </li>
            <li>
            <Link href="/contact">Contact</Link>
            </li>
        </ul>
      </nav>
    </header>
  );
}
