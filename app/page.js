"use client";

import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import DemoVideo from "@/components/sections/DemoVideo";
import Pricing from "@/components/sections/Pricing";
import PricingCalculator from "@/components/sections/PricingCalculator";
import Testimonials from "@/components/sections/Testimonials";
import BlogResources from "@/components/sections/BlogResources";
import FAQ from "@/components/sections/FAQ";
import AdvancedAnimations from "@/components/sections/AdvancedAnimations";
import Contact from "@/components/sections/Contact";

export default function Home() {
    return (
        <>
            <Hero />
            <Features />
            <DemoVideo />
            <Pricing />
            <PricingCalculator />
            <Testimonials />
            <BlogResources />
            <FAQ />
            <AdvancedAnimations />
            <Contact />
        </>
    );
}
