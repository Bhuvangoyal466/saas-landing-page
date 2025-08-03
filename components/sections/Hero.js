"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight, Sparkles, Zap, Rocket } from "lucide-react";
import { useState } from "react";
import Button from "../ui/Button";
import Modal from "../ui/Modal";

const Hero = () => {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

    const floatingElements = [
        { icon: Sparkles, delay: 0, x: "10%", y: "20%" },
        { icon: Zap, delay: 0.5, x: "80%", y: "30%" },
        { icon: Rocket, delay: 1, x: "15%", y: "70%" },
        { icon: Sparkles, delay: 1.5, x: "85%", y: "75%" },
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Animated background */}
            <div className="absolute inset-0 gradient-bg"></div>

            {/* Floating orbs */}
            <div
                className="floating-orb w-96 h-96 bg-primary-500/20 -top-48 -left-48"
                style={{ animationDelay: "0s" }}
            ></div>
            <div
                className="floating-orb w-80 h-80 bg-secondary-500/20 -top-32 -right-32"
                style={{ animationDelay: "2s" }}
            ></div>
            <div
                className="floating-orb w-64 h-64 bg-accent-500/20 -bottom-32 -left-32"
                style={{ animationDelay: "4s" }}
            ></div>

            {/* Floating icons */}
            {floatingElements.map((element, index) => (
                <motion.div
                    key={index}
                    className="absolute text-white/20"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 4,
                        delay: element.delay,
                        repeat: Infinity,
                        repeatDelay: 2,
                    }}
                    style={{ left: element.x, top: element.y }}
                >
                    <element.icon size={32} />
                </motion.div>
            ))}

            <div className="relative container-custom text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full mb-8 border border-white/20"
                    >
                        <Sparkles className="w-4 h-4 text-primary-400" />
                        <span className="text-sm font-medium text-neutral-200">
                            🎉 Introducing AI-Powered Brand Intelligence
                        </span>
                    </motion.div>

                    {/* Main heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="heading-xl mb-8"
                    >
                        Transform Your Brand with{" "}
                        <span className="gradient-text">
                            AI-Powered Marketing
                        </span>{" "}
                        Excellence
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-large text-neutral-300 mb-12 max-w-3xl mx-auto"
                    >
                        ADmyBRAND AI Suite revolutionizes how modern businesses
                        create, optimize, and scale their marketing campaigns.
                        From intelligent content generation to predictive
                        analytics—unlock your brand&apos;s full potential.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
                    >
                        <Button variant="primary" size="lg" className="group">
                            Start Free Trial
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                        </Button>

                        <Button
                            variant="secondary"
                            size="lg"
                            onClick={() => setIsVideoModalOpen(true)}
                            className="group"
                        >
                            <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                            Watch Demo
                        </Button>
                    </motion.div>

                    {/* Trust indicators */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-8 text-neutral-400"
                    >
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
                            <span className="text-sm">Free 14-day trial</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
                            <span className="text-sm">
                                No credit card required
                            </span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
                            <span className="text-sm">Cancel anytime</span>
                        </div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20"
                    >
                        {[
                            { number: "500K+", label: "Campaigns Created" },
                            { number: "98%", label: "Customer Satisfaction" },
                            { number: "10x", label: "Average ROI Increase" },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="glass-card text-center"
                                whileHover={{ scale: 1.05, y: -5 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20,
                                }}
                            >
                                <div className="text-3xl font-bold gradient-text mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-neutral-400 text-sm">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Video Modal */}
            <Modal
                isOpen={isVideoModalOpen}
                onClose={() => setIsVideoModalOpen(false)}
                size="xl"
            >
                <div className="aspect-video bg-neutral-900 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                        <Play className="w-16 h-16 text-primary-400 mx-auto mb-4" />
                        <p className="text-neutral-400">
                            Demo video would be embedded here
                        </p>
                        <p className="text-sm text-neutral-500 mt-2">
                            This is a placeholder for the actual demo video
                        </p>
                    </div>
                </div>
            </Modal>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
