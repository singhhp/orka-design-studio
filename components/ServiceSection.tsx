import Image from "next/image";
import { services } from "@/lib/constants";

export default function ServiceSection() {
    return (
        <section
            className="py-24 px-6 md:px-12 lg:px-24 bg-background-light dark:bg-background-dark"
            id="services"
        >
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-4">
                            Our Expertise
                        </h2>
                        <h3 className="font-serif text-4xl md:text-5xl text-secondary-text leading-tight">
                            Holistic Design{" "}
                            <span className="italic text-text-muted">
                                Disciplines
                            </span>
                        </h3>
                    </div>
                    <p className="max-w-md text-text-muted text-base leading-relaxed">
                        We integrate four core disciplines to deliver seamless, turnkey
                        environments that inspire and endure.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`group relative aspect-[3/4] overflow-hidden rounded-lg ${index % 2 === 1 ? "mt-0 lg:mt-12" : ""
                                }`}
                        >
                            <Image
                                alt={service.description}
                                src={service.image}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                                <div className="size-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-4 text-primary">
                                    <span className="material-symbols-outlined">
                                        {service.icon}
                                    </span>
                                </div>
                                <h4 className="text-2xl font-serif text-white mb-2">
                                    {service.title}
                                </h4>
                                <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
