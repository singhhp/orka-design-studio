import Image from "next/image";
import { Project } from "@/types";

interface ProjectCardProps {
    project: Project;
    layout?: "default" | "reverse";
}

export default function ProjectCard({ project, layout = "default" }: ProjectCardProps) {
    return (
        <div className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div
                className={`lg:col-span-7 relative overflow-hidden rounded-xl aspect-video cursor-pointer ${layout === "reverse" ? "order-1 lg:order-2" : ""
                    }`}
            >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <Image
                    alt={project.description}
                    src={project.image}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-6 right-6 z-20 size-12 bg-primary rounded-full flex items-center justify-center transform translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="material-symbols-outlined text-background-dark">
                        arrow_outward
                    </span>
                </div>
            </div>

            <div
                className={`lg:col-span-5 flex flex-col justify-center ${layout === "reverse" ? "lg:pr-8 order-2 lg:order-1" : "lg:pl-8"
                    }`}
            >
                <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2">
                    {project.category} {project.year && `• ${project.year}`}
                </span>
                <h4 className="font-serif text-3xl md:text-4xl text-secondary-text mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                </h4>
                <p className="text-text-muted leading-relaxed mb-6">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 rounded-full border border-secondary-text/10 text-xs text-secondary-text/60"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
