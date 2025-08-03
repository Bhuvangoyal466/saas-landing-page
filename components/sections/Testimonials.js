"use client";

import { motion } from "framer-motion";
import { Star, Quote, Sparkles } from "lucide-react";
import Carousel from "../ui/Carousel";
import Card from "../ui/Card";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Chen",
            role: "Marketing Director",
            company: "TechFlow Inc.",
            content:
                "ADmyBRAND AI has completely transformed our marketing strategy. We have seen a 300% increase in engagement and our content creation time has been cut by 80%. The AI understands our brand voice perfectly.",
            rating: 5,
            image: "/assets/testimonials/sarah.jpg", // Placeholder
            results: [
                "300% engagement increase",
                "80% time savings",
                "10x ROI improvement",
            ],
        },
        {
            name: "Marcus Rodriguez",
            role: "CEO & Founder",
            company: "GrowthLab",
            content:
                "The predictive analytics feature is a game-changer. We can now forecast campaign performance with 95% accuracy, allowing us to allocate budget more effectively and maximize our ROI.",
            rating: 5,
            image: "/assets/testimonials/marcus.jpg", // Placeholder
            results: [
                "95% prediction accuracy",
                "40% better budget allocation",
                "250% ROI increase",
            ],
        },
        {
            name: "Emily Watson",
            role: "Head of Digital Marketing",
            company: "EcoVenture",
            content:
                "What impresses me most is how the AI maintains our brand consistency across all channels while generating fresh, engaging content. Our team can now focus on strategy instead of execution.",
            rating: 5,
            image: "/assets/testimonials/emily.jpg", // Placeholder
            results: [
                "100% brand consistency",
                "5x content output",
                "60% team efficiency gain",
            ],
        },
        {
            name: "David Kim",
            role: "Marketing Manager",
            company: "NextGen Solutions",
            content:
                "The automation workflows have revolutionized our campaign management. We are running 10x more campaigns with the same team size, and performance keeps improving with the AI learning.",
            rating: 5,
            image: "/assets/testimonials/david.jpg", // Placeholder
            results: [
                "10x campaign volume",
                "Same team size",
                "Continuous improvement",
            ],
        },
        {
            name: "Jessica Thompson",
            role: "Brand Manager",
            company: "Stellar Brands",
            content:
                "ADmyBRAND AI does not just generate content—it understands our audience deeply. The personalization level we achieve now was impossible before. Our conversion rates have skyrocketed.",
            rating: 5,
            image: "/assets/testimonials/jessica.jpg", // Placeholder
            results: [
                "Deep audience insights",
                "Advanced personalization",
                "400% conversion increase",
            ],
        },
    ];

    const stats = [
        { number: "98%", label: "Customer Satisfaction" },
        { number: "500K+", label: "Campaigns Generated" },
        { number: "10x", label: "Average ROI Increase" },
        { number: "24/7", label: "AI-Powered Support" },
    ];

    const TestimonialCard = ({ testimonial }) => (
        <Card className="h-full p-8 relative overflow-hidden">
            {/* Quote icon */}
            <div className="absolute top-6 right-6 text-primary-500/20">
                <Quote size={48} />
            </div>

            {/* Rating */}
            <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                    />
                ))}
            </div>

            {/* Content */}
            <blockquote className="text-neutral-300 text-lg leading-relaxed mb-8 relative z-10">
                &quot;{testimonial.content}&quot;
            </blockquote>

            {/* Results */}
            <div className="mb-8">
                <h4 className="text-white font-semibold mb-3">Key Results:</h4>
                <div className="grid grid-cols-1 gap-2">
                    {testimonial.results.map((result, index) => (
                        <div key={index} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                            <span className="text-neutral-400">{result}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Author */}
            <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                        {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                    </span>
                </div>
                <div>
                    <div className="font-semibold text-white">
                        {testimonial.name}
                    </div>
                    <div className="text-sm text-neutral-400">
                        {testimonial.role} at {testimonial.company}
                    </div>
                </div>
            </div>
        </Card>
    );

    return (
        <section id="testimonials" className="section-padding relative">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary-950/10 to-transparent"></div>

            <div className="relative container-custom">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6 border border-white/20">
                        <Sparkles className="w-4 h-4 text-secondary-400" />
                        <span className="text-sm font-medium text-neutral-200">
                            Success Stories
                        </span>
                    </div>

                    <h2 className="heading-lg mb-6">
                        Loved by{" "}
                        <span className="gradient-text">Marketing Teams</span>{" "}
                        Worldwide
                    </h2>

                    <p className="text-large text-neutral-300 max-w-3xl mx-auto">
                        Don&apos;t just take our word for it. See how businesses
                        are achieving extraordinary results with ADmyBRAND AI
                        Suite.
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="text-4xl font-bold gradient-text mb-2">
                                {stat.number}
                            </div>
                            <div className="text-neutral-400 text-sm">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Testimonials carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Carousel
                        items={testimonials.map((testimonial, index) => (
                            <div key={index} className="px-4">
                                <TestimonialCard testimonial={testimonial} />
                            </div>
                        ))}
                        autoPlay={true}
                        autoPlayInterval={6000}
                        showDots={true}
                        showArrows={true}
                    />
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center mt-20"
                >
                    <div className="glass-card max-w-2xl mx-auto p-8">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Join Thousands of Successful Brands
                        </h3>
                        <p className="text-neutral-300 mb-6">
                            Start your 14-day free trial today and see why
                            marketing teams choose ADmyBRAND AI.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                className="btn-primary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Start Free Trial
                            </motion.button>
                            <motion.button
                                className="btn-secondary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Case Studies
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
