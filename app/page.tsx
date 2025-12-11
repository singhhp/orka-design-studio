import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { featuredProjects } from "@/lib/constants";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <ServiceSection />

                {/* Featured Projects Section */}
                <section className="py-24 px-6 md:px-12 bg-surface-dark border-y border-white/5" id="projects">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="flex items-center justify-between mb-12">
                            <div>
                                <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">
                                    Selected Works
                                </h2>
                                <h3 className="font-serif text-4xl text-secondary-text">
                                    Curated Portfolio
                                </h3>
                            </div>
                            <Link
                                href="/projects"
                                className="hidden md:flex items-center gap-2 text-secondary-text hover:text-primary transition-colors"
                            >
                                <span className="text-sm font-bold uppercase tracking-wider">
                                    View All Projects
                                </span>
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                        </div>

                        <div className="flex flex-col gap-16">
                            {featuredProjects.map((project, index) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    layout={index === 1 ? "reverse" : "default"}
                                />
                            ))}
                        </div>

                        <div className="md:hidden mt-12 flex justify-center">
                            <Link
                                href="/projects"
                                className="flex items-center gap-2 text-secondary-text hover:text-primary transition-colors px-6 py-3 border border-secondary-text/20 rounded-full"
                            >
                                <span className="text-sm font-bold uppercase tracking-wider">
                                    View All Projects
                                </span>
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-20 px-6 bg-background-light dark:bg-background-dark relative overflow-hidden">
                    <div
                        className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
                        style={{
                            backgroundImage:
                                "radial-gradient(#af9f83 1px, transparent 1px)",
                            backgroundSize: "40px 40px",
                        }}
                    />
                    <div className="max-w-[1200px] mx-auto text-center relative z-10">
                        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-secondary-text leading-tight mb-8">
                            &quot;We don&apos;t just build spaces;
                            <br />
                            we curate{" "}
                            <span className="text-primary italic">experiences</span>.&quot;
                        </h2>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-20 mt-12">
                            <div className="flex flex-col items-center">
                                <span className="text-4xl md:text-5xl font-bold text-primary mb-2">
                                    50+
                                </span>
                                <span className="text-sm text-text-muted uppercase tracking-widest">
                                    Projects Completed
                                </span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-4xl md:text-5xl font-bold text-primary mb-2">
                                    12
                                </span>
                                <span className="text-sm text-slate-500 uppercase tracking-widest">
                                    Design Awards
                                </span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-4xl md:text-5xl font-bold text-primary mb-2">
                                    100%
                                </span>
                                <span className="text-sm text-slate-500 uppercase tracking-widest">
                                    Client Satisfaction
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
