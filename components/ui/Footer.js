"use client";

import { motion } from "framer-motion";
import {
    Zap,
    Twitter,
    Linkedin,
    Github,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";

const Footer = () => {
    const socialLinks = [
        { icon: Twitter, href: "#", label: "Twitter" },
        {
            icon: Linkedin,
            href: "https://www.linkedin.com/in/bhuvangoyal28/",
            label: "LinkedIn",
        },
        {
            icon: Github,
            href: "https://github.com/Bhuvangoyal466",
            label: "GitHub",
        },
        {
            icon: Mail,
            href: "mailto:bhuvangoyal6002@gmail.com",
            label: "Email",
        },
    ];

    const footerLinks = {
        Product: [
            { name: "Features", href: "#features" },
            { name: "Pricing", href: "#pricing" },
            { name: "API Documentation", href: "#" },
            { name: "Integrations", href: "#" },
        ],
        Company: [
            { name: "About", href: "#" },
            { name: "Blog", href: "#" },
            { name: "Careers", href: "#" },
            { name: "Contact", href: "#contact" },
        ],
        Support: [
            { name: "Help Center", href: "#" },
            { name: "Community", href: "#" },
            { name: "Status", href: "#" },
            { name: "Security", href: "#" },
        ],
        Legal: [
            { name: "Privacy Policy", href: "#" },
            { name: "Terms of Service", href: "#" },
            { name: "Cookie Policy", href: "#" },
            { name: "GDPR", href: "#" },
        ],
    };

    const contactInfo = [
        {
            icon: Mail,
            text: "hello@admybrand.ai",
            href: "mailto:hello@admybrand.ai",
        },
        { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
        { icon: MapPin, text: "San Francisco, CA", href: "#" },
    ];

    return (
        <footer className="relative bg-neutral-950 border-t border-white/10">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/95 to-transparent"></div>

            <div className="relative container-custom py-16">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Brand and contact info */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Logo */}
                            <div className="flex items-center space-x-2 mb-6">
                                <div className="p-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl">
                                    <Zap className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-2xl font-bold logo-gradient">
                                    ADmyBRAND AI
                                </span>
                            </div>

                            <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-md">
                                Transform your brand with AI-powered marketing
                                solutions. Create, optimize, and scale your
                                campaigns effortlessly.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-4">
                                {contactInfo.map((item, index) => (
                                    <motion.a
                                        key={index}
                                        href={item.href}
                                        className="flex items-center space-x-3 text-neutral-400 hover:text-white transition-colors duration-200"
                                        whileHover={{ x: 5 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 20,
                                        }}
                                    >
                                        <item.icon size={18} />
                                        <span>{item.text}</span>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="flex space-x-4 mt-8">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        className="p-3 glass rounded-xl text-neutral-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 20,
                                        }}
                                        aria-label={social.label}
                                    >
                                        <social.icon size={20} />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Footer Links */}
                    <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {Object.entries(footerLinks).map(
                            ([category, links], categoryIndex) => (
                                <motion.div
                                    key={category}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        delay: categoryIndex * 0.1,
                                    }}
                                >
                                    <h3 className="text-white font-semibold text-lg mb-4">
                                        {category}
                                    </h3>
                                    <ul className="space-y-3">
                                        {links.map((link, linkIndex) => (
                                            <motion.li
                                                key={link.name}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 0.4,
                                                    delay:
                                                        categoryIndex * 0.1 +
                                                        linkIndex * 0.05,
                                                }}
                                            >
                                                <a
                                                    href={link.href}
                                                    className="text-neutral-400 hover:text-white transition-colors duration-200 block py-1"
                                                >
                                                    {link.name}
                                                </a>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )
                        )}
                    </div>
                </div>

                {/* Bottom section */}
                <motion.div
                    className="border-t border-white/10 mt-16 pt-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-neutral-400 text-center md:text-left">
                            © 2025 ADmyBRAND AI Suite. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-6">
                            <span className="text-neutral-400 text-sm">
                                Made with ❤️ for modern brands
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
