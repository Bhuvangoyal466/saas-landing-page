"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    CheckCircle,
    Sparkles,
    Calendar,
    MessageSquare,
    Users,
} from "lucide-react";
import { useForm } from "react-hook-form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { validateEmail } from "@/lib/utils";

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const contactMethods = [
        {
            icon: Mail,
            title: "Email Us",
            description: "Get in touch with our team",
            contact: "hello@admybrand.ai",
            action: "Send Email",
        },
        {
            icon: Phone,
            title: "Call Us",
            description: "Speak with our experts",
            contact: "+1 (555) 123-4567",
            action: "Start Call",
        },
        {
            icon: Calendar,
            title: "Schedule Demo",
            description: "Book a personalized demo",
            contact: "30-minute consultation",
            action: "Book Now",
        },
    ];

    const supportFeatures = [
        {
            icon: MessageSquare,
            title: "24/7 Live Chat",
            description: "Instant support when you need it",
        },
        {
            icon: Users,
            title: "Dedicated Success Manager",
            description: "Personal guidance for Enterprise customers",
        },
        {
            icon: CheckCircle,
            title: "99.9% Uptime SLA",
            description: "Reliable service you can count on",
        },
    ];

    const onSubmit = async (data) => {
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        console.log("Form submitted:", data);
        setIsSubmitted(true);
        setIsSubmitting(false);
        reset();

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const validateForm = {
        name: {
            required: "Name is required",
            minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
            },
        },
        email: {
            required: "Email is required",
            validate: (value) =>
                validateEmail(value) || "Please enter a valid email address",
        },
        company: {
            required: "Company name is required",
        },
        message: {
            required: "Message is required",
            minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
            },
        },
    };

    return (
        <section id="contact" className="section-padding relative">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-success-950/10 to-transparent"></div>

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
                        <Mail className="w-4 h-4 text-success-400" />
                        <span className="text-sm font-medium text-neutral-200">
                            Get In Touch
                        </span>
                    </div>

                    <h2 className="heading-lg mb-6">
                        Ready to Transform Your{" "}
                        <span className="gradient-text">
                            Marketing Strategy
                        </span>
                        ?
                    </h2>

                    <p className="text-large text-neutral-300 max-w-3xl mx-auto">
                        Let&apos;s discuss how ADmyBRAND AI can help you achieve
                        your marketing goals. Our team of experts is ready to
                        provide personalized recommendations.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
                    {/* Contact Methods */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        {contactMethods.map((method, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                            >
                                <Card
                                    variant="feature"
                                    className="p-6 group cursor-pointer"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="p-3 bg-gradient-to-br from-success-500 to-success-600 rounded-xl">
                                            <method.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-white mb-2">
                                                {method.title}
                                            </h3>
                                            <p className="text-neutral-400 text-sm mb-3">
                                                {method.description}
                                            </p>
                                            <p className="text-neutral-300 font-medium mb-3">
                                                {method.contact}
                                            </p>
                                            <button className="text-success-400 text-sm font-medium group-hover:text-success-300 transition-colors duration-200">
                                                {method.action} →
                                            </button>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}

                        {/* Support Features */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="glass-card p-6"
                        >
                            <h3 className="text-white font-semibold mb-4">
                                Why Choose Our Support?
                            </h3>
                            <div className="space-y-4">
                                {supportFeatures.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start space-x-3"
                                    >
                                        <feature.icon className="w-5 h-5 text-success-400 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <div className="text-white font-medium text-sm">
                                                {feature.title}
                                            </div>
                                            <div className="text-neutral-400 text-xs">
                                                {feature.description}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-2"
                    >
                        <Card className="p-8">
                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <CheckCircle className="w-16 h-16 text-success-400 mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-white mb-4">
                                        Message Sent Successfully!
                                    </h3>
                                    <p className="text-neutral-300">
                                        Thank you for reaching out. Our team
                                        will get back to you within 24 hours.
                                    </p>
                                </motion.div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="space-y-6"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <Input
                                            label="Full Name"
                                            placeholder="John Doe"
                                            error={errors.name?.message}
                                            {...register(
                                                "name",
                                                validateForm.name
                                            )}
                                        />
                                        <Input
                                            label="Email Address"
                                            type="email"
                                            placeholder="john@company.com"
                                            error={errors.email?.message}
                                            {...register(
                                                "email",
                                                validateForm.email
                                            )}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <Input
                                            label="Company Name"
                                            placeholder="Your Company"
                                            error={errors.company?.message}
                                            {...register(
                                                "company",
                                                validateForm.company
                                            )}
                                        />
                                        <div>
                                            <label className="block text-sm font-medium text-neutral-300 mb-2">
                                                Team Size
                                            </label>
                                            <select
                                                {...register("teamSize")}
                                                className="form-input"
                                            >
                                                <option value="">
                                                    Select team size
                                                </option>
                                                <option value="1-10">
                                                    1-10 employees
                                                </option>
                                                <option value="11-50">
                                                    11-50 employees
                                                </option>
                                                <option value="51-200">
                                                    51-200 employees
                                                </option>
                                                <option value="201-1000">
                                                    201-1000 employees
                                                </option>
                                                <option value="1000+">
                                                    1000+ employees
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-neutral-300 mb-2">
                                            How can we help you?
                                        </label>
                                        <textarea
                                            placeholder="Tell us about your marketing goals and challenges..."
                                            rows={6}
                                            className="form-textarea"
                                            {...register(
                                                "message",
                                                validateForm.message
                                            )}
                                        />
                                        {errors.message && (
                                            <p className="mt-1 text-sm text-red-400">
                                                {errors.message.message}
                                            </p>
                                        )}
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <input
                                            type="checkbox"
                                            id="newsletter"
                                            {...register("newsletter")}
                                            className="mt-1"
                                        />
                                        <label
                                            htmlFor="newsletter"
                                            className="text-sm text-neutral-400"
                                        >
                                            I&apos;d like to receive marketing
                                            updates and insights from ADmyBRAND
                                            AI.
                                        </label>
                                    </div>

                                    <Button
                                        type="submit"
                                        variant="primary"
                                        size="lg"
                                        className="w-full"
                                        loading={isSubmitting}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            "Sending Message..."
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="ml-2 w-5 h-5" />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </Card>
                    </motion.div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center"
                >
                    <div className="glass-card max-w-4xl mx-auto p-8">
                        <Sparkles className="w-12 h-12 text-primary-400 mx-auto mb-6" />
                        <h3 className="text-3xl font-bold text-white mb-4">
                            Start Your AI-Powered Marketing Journey Today
                        </h3>
                        <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
                            Join thousands of successful brands using ADmyBRAND
                            AI to revolutionize their marketing strategy and
                            achieve unprecedented growth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button variant="primary" size="lg">
                                Start 14-Day Free Trial
                            </Button>
                            <Button variant="secondary" size="lg">
                                Schedule Personalized Demo
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
