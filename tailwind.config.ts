import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#6b5d4f",
                "primary-dark": "#5a4d3f",
                "brand-beige": "#af9f83",
                "background-light": "#f6f4f0",
                "background-dark": "#af9f83",
                "surface-dark": "#c4b5a0",
                "background-card": "#d4c8b8",
                "secondary-text": "#3d3428",
                "text-muted": "#6b5d4f",
            },
            fontFamily: {
                display: ["var(--font-spline-sans)", "sans-serif"],
                serif: ["var(--font-playfair)", "serif"],
                body: ["var(--font-noto-sans)", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "1rem",
                lg: "2rem",
                xl: "3rem",
                full: "9999px",
            },
        },
    },
    plugins: [],
};

export default config;
