"use client";

import { Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <nav className="navbar">
                <Link className="brand" href="/" onClick={closeMenu}>
                    <span className="brand-mark">JA</span>
                    <b>Jenul Abedeen</b>
                </Link>
                <button
                    className="mobile-toggle"
                    aria-label="Toggle menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X /> : <Menu />}
                </button>
                <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
                    {[
                        "Home",
                        "About",
                        "Skills",
                        "Projects",
                        "Experience",
                        "Contact",
                    ].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={closeMenu}
                        >
                            {item}
                        </Link>
                    ))}
                    <Link
                        className="nav-resume"
                        href="/Jenul_resume.pdf"
                        download
                    >
                        <Download size={14} /> Download Resume
                    </Link>
                </div>
            </nav>
        </>
    );
}
