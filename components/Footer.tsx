import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-surface-dark border-t border-white/5 pt-20 pb-10 px-6" id="contact">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-2">
                        <div className="mb-6">
                            <div className="relative w-40 h-16 md:w-52 md:h-20">
                                <Image
                                    src="/assets/g4.png"
                                    alt="Orka Studio"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </div>
                        <p className="text-text-muted max-w-sm mb-8">
                            Redefining the landscape of modern living through thoughtful
                            architecture and impeccable design.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-colors"
                        >
                            Start Your Project
                        </Link>
                    </div>

                    <div>
                        <h4 className="text-secondary-text font-bold mb-6">Studio</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-text-muted hover:text-primary transition-colors"
                                >
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-secondary-text font-bold mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-xl mt-0.5">
                                    location_on
                                </span>
                                <span className="text-text-muted">
                                    Maya Enclave
                                    <br />
                                    Hari Nagar, New Delhi 110064
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-xl">
                                    mail
                                </span>
                                <a
                                    href="mailto:hello@orkastudio.com"
                                    className="text-text-muted hover:text-secondary-text transition-colors"
                                >
                                    info@orkadesignstudio.in
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-xl">
                                    call
                                </span>
                                <span className="text-text-muted">+91 9354831237</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-text-muted text-sm">
                        © 2024 Orka Design Studio. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link
                            href="#"
                            className="text-text-muted hover:text-secondary-text transition-colors text-sm"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="#"
                            className="text-text-muted hover:text-secondary-text transition-colors text-sm"
                        >
                            Terms of Service
                        </Link>
                    </div>
                    <div className="flex gap-4">
                        <a
                            href="https://www.instagram.com/orkadesignstudio?igsh=MWZ5MGM4YjI2emViNQ=="
                            className="text-text-muted hover:text-primary transition-colors"
                            aria-label="Instagram"
                        >
                            <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="text-text-muted hover:text-primary transition-colors"
                            aria-label="LinkedIn"
                        >
                            <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
