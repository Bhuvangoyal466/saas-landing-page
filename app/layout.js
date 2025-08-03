import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata = {
    title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
    description:
        "Revolutionize your marketing strategy with ADmyBRAND AI Suite. Generate high-converting content, predict campaign performance, and scale your brand with AI-powered tools.",
    keywords:
        "AI marketing, marketing automation, content generation, predictive analytics, brand intelligence, marketing AI, campaign optimization",
    authors: [{ name: "ADmyBRAND AI" }],
    creator: "ADmyBRAND AI",
    publisher: "ADmyBRAND AI",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://admybrand.ai",
        title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
        description:
            "Revolutionize your marketing strategy with ADmyBRAND AI Suite. Generate high-converting content, predict campaign performance, and scale your brand with AI-powered tools.",
        siteName: "ADmyBRAND AI",
        images: [
            {
                url: "/assets/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "ADmyBRAND AI Suite",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
        description:
            "Revolutionize your marketing strategy with ADmyBRAND AI Suite. Generate high-converting content, predict campaign performance, and scale your brand with AI-powered tools.",
        images: ["/assets/twitter-image.jpg"],
        creator: "@admybrandai",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://api.fontshare.com/v2/css?f[]=satoshi@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body
                className={`${inter.variable} font-sans bg-neutral-950 text-neutral-100 antialiased`}
            >
                <Navbar />
                <main className="relative">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
