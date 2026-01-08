import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/lib/constants";

export default function AboutPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative h-screen min-h-[700px] w-full flex flex-col items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/30 via-transparent to-background-dark" />
                        <div className="absolute inset-0 bg-black/40" />
                        <Image
                            alt="Modern concrete architectural structure with vines and sunlight"
                            src="/assets/studioHero.jpg"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl -mt-12">
                        <span className="inline-block py-1 px-3 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                            Est. 2014
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-brand-beige-light leading-[1.1] tracking-tight mb-8">
                            Designing Spaces, <br />
                            <span className="italic text-primary font-serif font-light">
                                Crafting Legacies.
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                            We believe in a holistic approach where architecture, nature, and
                            interiors converge to create timeless living experiences that
                            breathe.
                        </p>
                    </div>
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
                        <span className="material-symbols-outlined text-4xl">
                            keyboard_arrow_down
                        </span>
                    </div>
                </section>

                {/* Philosophy Section */}
                <section className="py-24 md:py-32 bg-background-dark relative overflow-hidden">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
                            <div className="w-full md:w-1/2 space-y-8">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="h-[1px] w-12 bg-primary" />
                                    <span className="text-primary text-sm font-bold tracking-widest uppercase">
                                        The Philosophy
                                    </span>
                                </div>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-secondary-text leading-tight">
                                    The Orka <br /> Holistic Approach
                                </h2>
                                <p className="text-secondary-text text-lg leading-relaxed">
                                    Our philosophy is rooted in the seamless integration of the
                                    built environment with the natural world. Unlike traditional
                                    firms that treat disciplines as silos, we view a project as a
                                    single, living organism.
                                </p>
                                <p className="text-primary text-base leading-relaxed">
                                    From the structural spine to the softest interior texture,
                                    every detail is considered in unison. We don&apos;t just build
                                    walls; we choreograph light, air, and movement to elevate the
                                    human experience.
                                </p>
                                <div className="pt-6 grid grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2 p-4 border border-[#333333] rounded-2xl bg-background-card/50">
                                        <span className="material-symbols-outlined text-primary text-3xl">
                                            spa
                                        </span>
                                        <span className="text-secondary-text font-bold text-lg">
                                            Biophilic Design
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-2 p-4 border border-[#333333] rounded-2xl bg-background-card/50">
                                        <span className="material-symbols-outlined text-primary text-3xl">
                                            all_inclusive
                                        </span>
                                        <span className="text-secondary-text font-bold text-lg">
                                            Sustainable Loop
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 relative">
                                <div className="relative z-10 grid grid-cols-2 gap-4">
                                    <div className="space-y-4 mt-12">
                                        <div
                                            className="w-full aspect-[3/4] rounded-full overflow-hidden border border-[#333333]"
                                            style={{ borderRadius: "1000px 1000px 0 0" }}
                                        >
                                            <Image
                                                alt="Minimalist interior hallway with sunlight"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSKVJ4jBNGersoiq3RoTTFRHK2WiRhKttJn12DaBqdrem-73r--q2-W1Zeq7KWhITS4jzA63DTtvTXiMCHWUkjhTmFJ3xiIl22Xp0749QksK_PBzH-1-QNw5FHCelxXLTBK3cYGQeAcgXn0twL5mFmQPFiJY9F2vRT9WGFYYizsUfzBbyt9Kc1iWqmeFedVVdx6gv70BnA-ST7GR2Vv43BS_KLh2Z3K7-wyu0EvxTL0NASDLG8qxzGxUTt1RxDFtUiiPnEMeJs7mg"
                                                width={300}
                                                height={400}
                                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="w-full aspect-square rounded-full overflow-hidden border border-[#333333]">
                                            <Image
                                                alt="Abstract close up of concrete texture"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKzyVHMwQZNqnWPGsK-E_QoddU_UoxML81D5oVpxt8YI-Z1Ru8mlQjptsw0ex0wW_Ul7wLGbR9H2xDxOYEF3XaDq-CS8jkKwWo6gWJ1yS8UOPk2CmvTjRnXr9Yl5nfHNvToLyA1gUFnaML5YRAGTLkPmNwHJOhnISICW8zSbyCF0C4kVaSVs1fWRzlnGtx2yCGtU65pnJvvMjqDldVO4SOd-juGi539lU8rFmVYh2Y4hchK5hcZb98Cqyf2MIAsAI6Ui2h5FmmSpM"
                                                width={300}
                                                height={300}
                                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="w-full aspect-square rounded-full overflow-hidden border border-[#333333]">
                                            <Image
                                                alt="Lush green fern leaf texture"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5rt_fBtCGNzfzoLSotbNssLCLFl8nZaKqjESk2SXXvtAC4m2GfI45dT4QPYs_yZc6MsBJ7VtEwZq_cGYfCcikoW_wgYLobVU5A941W15_tPnpSh3Ew-ge8O7W9_m9UZ3fMcZed2gITRbvJYLOUZWATpa98WDpIxEg-XTJrzB1wJa_2USRRfC50V4DqtXStFkOJvGIu1HPWwzoL8-v9pYtO1p9eszwkkvqO3k0l7f_jdOdSb3tj_HYGk0AJT4yiLzhGNqZqVsRhhU"
                                                width={300}
                                                height={300}
                                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                        <div
                                            className="w-full aspect-[3/4] rounded-full overflow-hidden border border-[#333333]"
                                            style={{ borderRadius: "0 0 1000px 1000px" }}
                                        >
                                            <Image
                                                alt="Modern geometric architectural facade"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwBNTllQG9HrYwBxRfO49hr2LhfwDGe0Qh30oghpgHJOiO2LaGUXDQ41KHiWsQiq91RjtC85GQAbQmnZPRREp2QPRvz7YKsMLG7Tc17RWaxrRX2VU3EiLgUZcdapSBau9jVY1WCV3zjAMjWQTlac9fuljt5UW1rvNAvRcriteuKWROaXXkrIO0Z6X2JkfvWMRNzGnsgYevBsIuSaz7SAWiHmRURry4NgU2imq9jkwUzaqqsq9V0YriQtaliGuUXelKTWvdczfFizY"
                                                width={300}
                                                height={400}
                                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Disciplines Section */}
                <section className="py-20 bg-[#121212]">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-beige mb-6">
                                Blending Disciplines
                            </h2>
                            <p className="text-brand-beige text-lg">
                                From concept to completion, our expertise spans across four
                                distinct pillars designed to work in harmony.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    icon: "apartment",
                                    title: "Architecture",
                                    description:
                                        "Clean lines, sustainable structures, and thoughtful spatial planning that define the skeleton of our work.",
                                },
                                {
                                    icon: "park",
                                    title: "Landscaping",
                                    description:
                                        "Native flora and organic flow that softens the edges and connects the indoors with the outdoors.",
                                },
                                {
                                    icon: "chair",
                                    title: "Interiors",
                                    description:
                                        "Bespoke furniture, curated art, and lighting design creating intimate spaces that reflect personality.",
                                },
                                {
                                    icon: "key",
                                    title: "Turnkey",
                                    description:
                                        "Complete project management from the first sketch to the final handover of keys, stress-free.",
                                },
                            ].map((discipline) => (
                                <div
                                    key={discipline.title}
                                    className="group relative bg-background-card rounded-[2rem] p-8 border border-[#333333] hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                                >
                                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors" />
                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="w-14 h-14 rounded-full bg-background-dark border border-[#4d4d4d] flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                                            <span className="material-symbols-outlined text-2xl">
                                                {discipline.icon}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-serif font-bold text-secondary-text mb-3">
                                            {discipline.title}
                                        </h3>
                                        <p className="text-secondary-text text-sm mb-6 flex-grow">
                                            {discipline.description}
                                        </p>
                                        <Link
                                            href="#"
                                            className="inline-flex items-center text-primary text-sm font-bold uppercase tracking-wide group-hover:underline"
                                        >
                                            Explore{" "}
                                            <span className="material-symbols-outlined text-base ml-1">
                                                arrow_forward
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-24 bg-background-dark overflow-hidden" id="team">
                    <div className="container mx-auto px-6 max-w-7xl mb-12">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="h-[1px] w-12 bg-primary" />
                            <span className="text-primary text-sm font-bold tracking-widest uppercase">
                                The Collective
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary-text">
                            Visionaries at Work
                        </h2>
                    </div>
                    <div className="w-full overflow-x-auto no-scrollbar pb-10 px-6">
                        <div className="flex gap-8 w-max mx-auto md:mx-0 md:pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))]">
                            {teamMembers.map((member) => (
                                <div
                                    key={member.id}
                                    className="group relative w-[280px] flex-shrink-0 cursor-pointer"
                                >
                                    <div className="w-full aspect-[4/5] rounded-[3rem] overflow-hidden mb-6 relative">
                                        <Image
                                            alt={`Portrait of ${member.name}`}
                                            src={member.image}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                            <p className="text-white text-sm font-light">
                                                &quot;{member.quote}&quot;
                                            </p>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-secondary-text">{member.name}</h3>
                                    <p className="text-primary text-sm font-medium uppercase tracking-wide">
                                        {member.role}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Awards Section */}
                <section className="py-16 border-t border-b border-[#333333] bg-[#121212]">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-widest mb-10">
                            Recognized Excellence
                        </p>
                        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            <h3 className="text-2xl font-serif font-bold text-brand-beige">
                                ArchDaily
                            </h3>
                            <h3 className="text-2xl font-serif font-bold text-brand-beige">
                                Dezeen
                            </h3>
                            <h3 className="text-2xl font-serif font-bold text-brand-beige">
                                AD100
                            </h3>
                            <h3 className="text-2xl font-serif font-bold text-brand-beige">
                                Elle Decor
                            </h3>
                            <h3 className="text-2xl font-serif font-bold text-brand-beige">
                                A+Awards
                            </h3>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
