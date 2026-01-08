import type { Metadata } from "next";
import { Spline_Sans, Playfair_Display, Noto_Sans } from "next/font/google";
import "./globals.css";

const splineSans = Spline_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-spline-sans",
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    style: ["normal", "italic"],
    variable: "--font-playfair",
    display: "swap",
});

const notoSans = Noto_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
    variable: "--font-noto-sans",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Orka Design Studio - Architecture & Interiors",
    description: "Architecture, interiors, and landscapes crafted for eternity. We blend nature with structure to create timeless environments.",
    icons: {
        icon: "/assets/favico.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body
                className={`${splineSans.variable} ${playfair.variable} ${notoSans.variable} bg-background-dark text-secondary-text font-display overflow-x-hidden transition-colors duration-300 antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
