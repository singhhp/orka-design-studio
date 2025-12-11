"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { navLinks } from "@/lib/constants";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300">
                <div className="max-w-[1400px] mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-8 group">
                        <div className="relative size-20 md:size-28 transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src="/assets/odslg.png"
                                alt="Orka Studio Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div
                            className={`relative h-12 w-48 md:h-16 md:w-64 hidden md:block transition-all duration-500 ease-in-out origin-left ${scrolled
                                ? "opacity-0 -translate-y-8 pointer-events-none w-0 scale-90"
                                : "opacity-100 translate-y-0 w-48 md:w-64 scale-100"
                                }`}
                        >
                            <Image
                                src="/assets/name.png"
                                alt="Orka Studio"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                    </Link>

                    <div className="hidden md:flex items-center gap-8 bg-surface-dark/80 backdrop-blur-md px-8 py-3 rounded-full border border-white/5 shadow-lg">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-secondary-text/80 hover:text-primary transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            className="md:hidden text-secondary-text"
                            onClick={() => setMobileMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                        <Link
                            href="/contact"
                            className="hidden md:flex items-center justify-center h-10 px-6 bg-primary hover:bg-primary-dark text-white text-sm font-bold rounded-full transition-colors duration-300"
                        >
                            Inquire
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-[100] md:hidden">
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setMobileMenuOpen(false)}
                    />
                    <div className="absolute right-0 top-0 bottom-0 w-[280px] bg-surface-dark border-l border-white/10 shadow-2xl">
                        <div className="flex flex-col h-full">
                            <div className="flex items-center justify-between p-6 border-b border-white/10">
                                <h3 className="text-lg font-serif font-bold text-secondary-text">
                                    Menu
                                </h3>
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-secondary-text/80 hover:text-secondary-text"
                                    aria-label="Close menu"
                                >
                                    <span className="material-symbols-outlined">close</span>
                                </button>
                            </div>
                            <nav className="flex flex-col p-6 gap-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-base font-medium text-secondary-text/80 hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-black/5"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <Link
                                    href="/contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="mt-4 flex items-center justify-center h-12 px-6 bg-primary hover:bg-primary-dark text-white text-sm font-bold rounded-full transition-colors"
                                >
                                    Inquire
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
