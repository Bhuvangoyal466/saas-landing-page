"use client";

import { motion } from "framer-motion";
import {
    Brain,
    Target,
    BarChart3,
    Zap,
    Palette,
    Globe,
    ArrowRight,
    Sparkles,
} from "lucide-react";
import Card from "../ui/Card";

const Features = () => {
    const features = [
        {
            icon: Brain,
            title: "AI Content Generation",
            description:
                "Generate high-converting copy, social media posts, and email campaigns with our advanced AI that understands your brand voice.",
            benefits: [
                "10x faster content creation",
                "Brand-consistent messaging",
                "Multi-platform optimization",
            ],
            color: "from-primary-500 to-primary-600",
        },
        {
            icon: Target,
            title: "Smart Audience Targeting",
            description:
                "Identify and reach your ideal customers with precision targeting powered by machine learning algorithms.",
            benefits: [
                "95% targeting accuracy",
                "Real-time optimization",
                "Cross-platform insights",
            ],
            color: "from-secondary-500 to-secondary-600",
        },
        {
            icon: BarChart3,
            title: "Predictive Analytics",
            description:
                "Forecast campaign performance and ROI before launch with our advanced predictive modeling technology.",
            benefits: [
                "Predict campaign success",
                "Optimize budget allocation",
                "Risk assessment",
            ],
            color: "from-accent-500 to-accent-600",
        },
        {
            icon: Zap,
            title: "Automated Campaigns",
            description:
                "Set up intelligent automation workflows that adapt and optimize based on real-time performance data.",
            benefits: [
                "24/7 optimization",
                "Dynamic content updates",
                "Smart bid management",
            ],
            color: "from-success-500 to-success-600",
        },
        {
            icon: Palette,
            title: "Brand Intelligence",
            description:
                "Maintain consistent brand identity across all channels with AI-powered brand monitoring and guidelines.",
            benefits: [
                "Brand consistency checks",
                "Visual identity analysis",
                "Competitor monitoring",
            ],
            color: "from-purple-500 to-pink-500",
        },
        {
            icon: Globe,
            title: "Global Reach",
            description:
                "Scale your campaigns worldwide with intelligent localization and cultural adaptation features.",
            benefits: [
                "Multi-language support",
                "Cultural adaptation",
                "Global compliance",
            ],
            color: "from-blue-500 to-cyan-500",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <section id="features" className="section-padding relative">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/50 to-transparent"></div>

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
                        <Sparkles className="w-4 h-4 text-primary-400" />
                        <span className="text-sm font-medium text-neutral-200">
                            Powerful Features
                        </span>
                    </div>

                    <h2 className="heading-lg mb-6">
                        Everything You Need to{" "}
                        <span className="gradient-text">
                            Dominate Your Market
                        </span>
                    </h2>

                    <p className="text-large text-neutral-300 max-w-3xl mx-auto">
                        Our AI-powered suite provides all the tools modern
                        brands need to create, optimize, and scale their
                        marketing efforts with unprecedented efficiency.
                    </p>
                </motion.div>

                {/* Features grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card
                                variant="feature"
                                className="h-full p-8 group relative overflow-hidden"
                                hover={true}
                            >
                                {/* Gradient background on hover */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                                ></div>

                                {/* Icon */}
                                <div
                                    className={`relative mb-6 p-4 bg-gradient-to-br ${feature.color} rounded-2xl w-fit`}
                                >
                                    <feature.icon className="w-8 h-8 text-white" />
                                </div>

                                {/* Content */}
                                <div className="relative">
                                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300">
                                        {feature.title}
                                    </h3>

                                    <p className="text-neutral-300 mb-6 leading-relaxed">
                                        {feature.description}
                                    </p>

                                    {/* Benefits list */}
                                    <ul className="space-y-2 mb-6">
                                        {feature.benefits.map(
                                            (benefit, benefitIndex) => (
                                                <li
                                                    key={benefitIndex}
                                                    className="flex items-center text-sm text-neutral-400"
                                                >
                                                    <div
                                                        className={`w-1.5 h-1.5 bg-gradient-to-r ${feature.color} rounded-full mr-3 flex-shrink-0`}
                                                    ></div>
                                                    {benefit}
                                                </li>
                                            )
                                        )}
                                    </ul>

                                    {/* Learn more button */}
                                    <button className="flex items-center text-sm font-medium text-neutral-400 group-hover:text-white transition-colors duration-300">
                                        Learn more
                                        <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                                    </button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
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
                            Ready to Experience the Power?
                        </h3>
                        <p className="text-neutral-300 mb-6">
                            Join thousands of successful brands already using
                            ADmyBRAND AI to revolutionize their marketing.
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
                                Schedule Demo
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
