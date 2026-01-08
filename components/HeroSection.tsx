import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
    return (
        <header className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background-dark/30 via-background-dark/20 to-background-dark z-10" />
                <Image
                    alt="Modern concrete villa with infinity pool at dusk"
                    src="/assets/hero-image.jpg"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
            </div>

            <div className="relative z-20 max-w-[1200px] mx-auto px-6 text-center flex flex-col items-center gap-8 -mt-16">
                <span className="inline-block py-1 px-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-primary text-xs uppercase tracking-[0.2em] font-medium">
                    Established 2024
                </span>
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-[1.1] tracking-tight">
                    Reshaping <br className="hidden md:block" />
                    <span className="italic font-light text-white/90">Horizons</span>
                </h1>
                <p className="max-w-xl text-lg text-white/70 font-light leading-relaxed">
                    Architecture, interiors, and landscapes crafted for eternity. We blend
                    nature with structure to create timeless environments.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <Link
                        href="/projects"
                        className="flex items-center justify-center h-12 px-8 bg-primary hover:bg-primary-dark text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                        View Selected Works
                    </Link>
                    <Link
                        href="/#services"
                        className="flex items-center justify-center h-12 px-8 bg-transparent border border-white/30 hover:border-white hover:bg-white/5 text-white font-medium rounded-full transition-all duration-300"
                    >
                        Explore Services
                    </Link>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                <span className="material-symbols-outlined text-white/50 text-3xl">
                    keyboard_arrow_down
                </span>
            </div>
        </header>
    );
}
