"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { allProjects } from "@/lib/constants";
import { useState } from "react";

const categories = ["All Works", "Architecture", "Landscaping", "Interiors", "Turnkey"];

export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState("All Works");

    const filteredProjects =
        activeFilter === "All Works"
            ? allProjects
            : allProjects.filter((project) => project.category === activeFilter);

    return (
        <>
            <Header />
            <main className="flex-grow w-full px-6 md:px-12 lg:px-20 pt-32 pb-12 md:pt-48 md:pb-20 max-w-[1600px] mx-auto min-h-screen">
                <div className="mb-16 md:mb-24 max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-semibold leading-tight tracking-tight mb-6 text-secondary-text">
                        Curated Spaces
                    </h1>
                    <p className="text-lg md:text-xl text-secondary-text/60 font-light max-w-2xl leading-relaxed">
                        Exploring the intersection of nature, structure, and living. Our
                        portfolio represents a dedication to sustainable luxury and timeless
                        aesthetics.
                    </p>
                </div>

                <div className="sticky top-20 z-40 pb-8 bg-gradient-to-b from-background-dark via-background-dark to-transparent pt-2 -mx-4 px-4 md:mx-0 md:px-0">
                    <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`shrink-0 h-10 px-6 rounded-full text-sm font-bold transition-transform hover:scale-105 ${activeFilter === category
                                    ? "bg-primary text-background-dark"
                                    : "border border-secondary-text/20 bg-transparent text-secondary-text hover:bg-secondary-text/10 hover:border-secondary-text/40"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="break-inside-avoid group project-card relative overflow-hidden rounded-xl bg-surface-dark"
                        >
                            <div className="relative w-full overflow-hidden aspect-[3/4]">
                                <Image
                                    alt={project.description}
                                    src={project.image}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                                    <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2">
                                        {project.category}
                                    </span>
                                    <h3 className="text-white text-2xl font-medium mb-1">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center gap-1 text-white/60 text-sm">
                                        <span className="material-symbols-outlined text-[16px]">
                                            location_on
                                        </span>
                                        <span>{project.location}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 flex justify-center">
                    <button className="flex items-center gap-2 text-secondary-text hover:text-primary transition-colors font-medium text-sm">
                        <span>Load More Projects</span>
                        <span className="material-symbols-outlined">arrow_downward</span>
                    </button>
                </div>
            </main>
            <Footer />
        </>
    );
}
