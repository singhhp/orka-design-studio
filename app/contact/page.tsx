"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: "",
        newsletter: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Client-side only - just log to console
        console.log("Form submitted:", formData);
        alert("Thank you for your message! We will get back to you soon.");
        // Reset form
        setFormData({
            name: "",
            email: "",
            subject: "General Inquiry",
            message: "",
            newsletter: false,
        });
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value, type } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]:
                type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
        }));
    };

    return (
        <>
            <Header />
            <div className="relative flex min-h-screen w-full flex-col">
                <main className="flex-grow pt-32 pb-10 px-4 sm:px-8 md:px-16 lg:px-24">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                        <div className="flex flex-col justify-center space-y-12">
                            <div className="space-y-6">
                                <span className="inline-block px-3 py-1 rounded-full border border-[#254632] bg-surface-dark/50 text-primary text-xs font-bold uppercase tracking-wider">
                                    Get in touch
                                </span>
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                                    Let&apos;s build something{" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-text-muted">
                                        timeless.
                                    </span>
                                </h1>
                                <p className="text-text-muted text-lg max-w-md leading-relaxed">
                                    Whether you&apos;re looking to transform a landscape, design a
                                    bespoke interior, or start a turnkey project, we are here to
                                    listen.
                                </p>
                            </div>
                            <div className="space-y-8">
                                <div>
                                    <p className="text-text-muted text-sm font-medium mb-2">
                                        Primary Contact
                                    </p>
                                    <a
                                        href="mailto:info@orkadesignstudio.in"
                                        className="group inline-flex items-center gap-3 text-2xl md:text-3xl font-medium text-secondary-text hover:text-primary transition-colors"
                                    >
                                        info@orkadesignstudio.in
                                        <span className="material-symbols-outlined text-2xl transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300">
                                            arrow_outward
                                        </span>
                                    </a>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 border-t border-[#254632] pt-8">
                                    <div>
                                        <p className="text-text-muted text-sm font-medium mb-1">
                                            Studio
                                        </p>
                                        <p className="text-secondary-text text-base">
                                            Maya Enclave
                                            <br />
                                            Hari Nagar, New Delhi 110064
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-text-muted text-sm font-medium mb-1">
                                            Phone
                                        </p>
                                        <p className="text-white text-base">+91 9354831237</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-48 w-full overflow-hidden rounded-2xl mt-8 group">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent mix-blend-overlay z-10" />
                                <Image
                                    alt="Minimalist architectural detail with shadows"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA46KfRkEaeNn068wxYDp4rCXLnSuAdzY3mqfNQ3ylW4WUKpqXJISFg4sisyDNvJ8pwXh5TAAE8_SpYKZ2MgQ_B5S0rAEcLRlDqFLZ_tkbIUH3KzND_NZOEihnU9CdjDqHQeXUpn7xLpchUtT-W7Li82mq7wuLdmB6yb0Ax9V0z9kRPv97Tc4pMSQAWSayRQMqEunhleUrbeYV4hpI69p9eAF1d8WvMaPe-ZQoKU8rkxEj58C0oh-OKyKpVIvc9H7GGBPW7RbFfAG8"
                                    fill
                                    className="object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                                />
                            </div>
                        </div>

                        <div className="bg-surface-dark border border-[#254632] rounded-[2rem] p-6 md:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                            <h3 className="text-2xl font-bold text-secondary-text mb-8 relative z-10">
                                Send us a message
                            </h3>
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-6 relative z-10"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <label className="flex flex-col gap-2">
                                        <span className="text-sm font-medium text-text-muted ml-1">
                                            Name *
                                        </span>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-background-light border border-[#af9f83] rounded-xl px-4 py-3 text-secondary-text placeholder-text-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                            placeholder="John Doe"
                                        />
                                    </label>
                                    <label className="flex flex-col gap-2">
                                        <span className="text-sm font-medium text-text-muted ml-1">
                                            Email *
                                        </span>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-background-light border border-[#af9f83] rounded-xl px-4 py-3 text-secondary-text placeholder-text-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </label>
                                </div>
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-medium text-text-muted ml-1">
                                        Subject
                                    </span>
                                    <div className="relative">
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full bg-background-light border border-[#af9f83] rounded-xl px-4 py-3 text-secondary-text focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none transition-all"
                                        >
                                            <option>General Inquiry</option>
                                            <option>New Project Proposal</option>
                                        </select>
                                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">
                                            expand_more
                                        </span>
                                    </div>
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-medium text-text-muted ml-1">
                                        Message *
                                    </span>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full bg-background-light border border-[#af9f83] rounded-xl px-4 py-3 text-secondary-text placeholder-text-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none transition-all"
                                        placeholder="Tell us about your project..."
                                    />
                                </label>
                                <div className="flex items-center gap-2 mt-2">
                                    <input
                                        type="checkbox"
                                        name="newsletter"
                                        id="newsletter"
                                        checked={formData.newsletter}
                                        onChange={handleChange}
                                        className="rounded border-[#366348] bg-background-dark text-primary focus:ring-primary/50"
                                    />
                                    <label htmlFor="newsletter" className="text-sm text-text-muted">
                                        Subscribe to our newsletter for design updates.
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="mt-4 w-full bg-primary hover:bg-[#9e8f76] text-background-dark font-bold text-lg rounded-xl py-4 transition-all hover:shadow-[0_0_20px_rgba(175,159,131,0.4)] active:scale-[0.98]"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </main>

                {/* Map Section */}
                <section className="relative w-full h-96 md:h-[500px] border-y border-[#254632]">
                    <Image
                        alt="Dark mode stylized map of city streets"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXmrlISpU6rol262VjH6O-0r8SuudOOC9DxUSsuTxzZraQkU5web1nKGpSKBwXMasbo4RZpTFpAuFm8bJ4kZvnWfxKMVigCu8E7gaiA1wGuulf-gAMtG84gMT_mY0qsLuhSQovLWvj_huHNy-YAPo5uaoFTJol8ZfZQtRpDP1XRDlsjrmCK9-qldrkF7HdZxpnpAEZXzyd5bzk6qr-RHLjIUSOf5g291k2nFKtojPfdDm6cxDLzOEumZbfGQHFUAhZxx1H0LEbipA"
                        fill
                        className="object-cover grayscale opacity-40 mix-blend-luminosity"
                    />
                    <div className="absolute inset-0 bg-background-dark/60 pointer-events-none" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer">
                        <div className="relative">
                            <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute opacity-75" />
                            <div className="w-4 h-4 bg-primary rounded-full relative z-10 shadow-[0_0_15px_rgba(175,159,131,0.8)]" />
                        </div>
                        <div className="mt-4 bg-surface-dark border border-[#254632] px-4 py-2 rounded-xl shadow-xl transform transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                            <p className="text-white text-xs font-bold whitespace-nowrap">
                                Orka Design Studio HQ
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
