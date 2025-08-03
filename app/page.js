"use client";

import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
    return (
        <>
            <Hero />
            <Features />
            <Pricing />
            <Testimonials />
            <FAQ />
            <Contact />
        </>
    );
}
