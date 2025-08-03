"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "./Button";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navLinks = [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "FAQ", href: "#faq" },
        { name: "Contact", href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    };

    return (
        <motion.nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "glass backdrop-blur-xl border-b border-white/10"
                    : "bg-transparent"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <motion.div
                        className="flex items-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                        }}
                    >
                        <div className="p-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl">
                            <Zap className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold logo-gradient">
                            ADmyBRAND AI
                        </span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link, index) => (
                            <motion.button
                                key={link.name}
                                onClick={() => scrollToSection(link.href)}
                                className="nav-link"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.2 }}
                                whileHover={{ y: -2 }}
                            >
                                {link.name}
                            </motion.button>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <Button variant="ghost" size="sm">
                            Sign In
                        </Button>
                        <Button variant="primary" size="sm">
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                    >
                        <AnimatePresence mode="wait">
                            {isOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X size={24} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu size={24} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="lg:hidden glass border-t border-white/10"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="container-custom py-6">
                            <div className="flex flex-col space-y-4">
                                {navLinks.map((link, index) => (
                                    <motion.button
                                        key={link.name}
                                        onClick={() =>
                                            scrollToSection(link.href)
                                        }
                                        className="text-left py-2 text-neutral-300 hover:text-white transition-colors duration-200"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        {link.name}
                                    </motion.button>
                                ))}
                                <div className="flex flex-col space-y-3 pt-4 border-t border-white/10">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="justify-start"
                                    >
                                        Sign In
                                    </Button>
                                    <Button variant="primary" size="sm">
                                        Get Started
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
