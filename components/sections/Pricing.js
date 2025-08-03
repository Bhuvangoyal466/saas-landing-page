"use client";

import { motion } from "framer-motion";
import { Check, Crown, Zap, Sparkles } from "lucide-react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { formatPrice } from "@/lib/utils";

const Pricing = () => {
    const plans = [
        {
            name: "Starter",
            price: 29,
            description: "Perfect for small businesses and startups",
            features: [
                "Up to 10 campaigns per month",
                "Basic AI content generation",
                "Email support",
                "Standard analytics",
                "1 brand profile",
                "Social media scheduling",
                "Basic templates",
            ],
            limitations: [
                "Limited integrations",
                "Standard support response time",
            ],
            buttonText: "Start Free Trial",
            popular: false,
            color: "from-neutral-600 to-neutral-700",
        },
        {
            name: "Professional",
            price: 89,
            description: "Ideal for growing companies and agencies",
            features: [
                "Unlimited campaigns",
                "Advanced AI content generation",
                "Priority support",
                "Advanced analytics & insights",
                "5 brand profiles",
                "A/B testing suite",
                "Custom templates",
                "API access",
                "Team collaboration",
                "White-label options",
            ],
            limitations: [],
            buttonText: "Get Started",
            popular: true,
            color: "from-primary-500 to-secondary-500",
        },
        {
            name: "Enterprise",
            price: 299,
            description: "For large organizations with custom needs",
            features: [
                "Everything in Professional",
                "Custom AI model training",
                "Dedicated account manager",
                "Enterprise analytics",
                "Unlimited brand profiles",
                "Advanced integrations",
                "Custom workflows",
                "SLA guarantee",
                "On-premise deployment",
                "24/7 phone support",
            ],
            limitations: [],
            buttonText: "Contact Sales",
            popular: false,
            color: "from-accent-500 to-success-500",
        },
    ];

    const additionalFeatures = [
        "99.9% uptime guarantee",
        "SOC 2 Type II certified",
        "GDPR compliant",
        "Enterprise-grade security",
        "Custom integrations available",
        "Dedicated success manager",
    ];

    return (
        <section id="pricing" className="section-padding relative">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/10 to-transparent"></div>

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
                        <Crown className="w-4 h-4 text-accent-400" />
                        <span className="text-sm font-medium text-neutral-200">
                            Simple Pricing
                        </span>
                    </div>

                    <h2 className="heading-lg mb-6">
                        Choose the Perfect Plan for{" "}
                        <span className="gradient-text">Your Business</span>
                    </h2>

                    <p className="text-large text-neutral-300 max-w-3xl mx-auto mb-8">
                        Start free and scale as you grow. All plans include our
                        core AI features with 14-day free trial and no setup
                        fees.
                    </p>

                    {/* Billing toggle */}
                    <div className="flex items-center justify-center space-x-4">
                        <span className="text-neutral-400">Monthly</span>
                        <div className="relative">
                            <input
                                type="checkbox"
                                id="billing-toggle"
                                className="sr-only"
                            />
                            <label
                                htmlFor="billing-toggle"
                                className="flex items-center cursor-pointer"
                            >
                                <div className="relative">
                                    <div className="w-12 h-6 bg-neutral-700 rounded-full shadow-inner"></div>
                                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200"></div>
                                </div>
                            </label>
                        </div>
                        <span className="text-neutral-400">
                            Annual
                            <span className="ml-1 text-success-400 text-sm font-medium">
                                (Save 20%)
                            </span>
                        </span>
                    </div>
                </motion.div>

                {/* Pricing cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative"
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                    <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            <Card
                                variant={
                                    plan.popular
                                        ? "pricing-featured"
                                        : "pricing"
                                }
                                className="h-full p-8 relative overflow-hidden"
                            >
                                {/* Background gradient */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-5`}
                                ></div>

                                {/* Header */}
                                <div className="relative text-center mb-8">
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        {plan.name}
                                    </h3>
                                    <p className="text-neutral-400 mb-6">
                                        {plan.description}
                                    </p>

                                    <div className="mb-6">
                                        <span className="text-5xl font-bold text-white">
                                            {formatPrice(plan.price)}
                                        </span>
                                        <span className="text-neutral-400 text-lg">
                                            /month
                                        </span>
                                    </div>

                                    <Button
                                        variant={
                                            plan.popular
                                                ? "primary"
                                                : "secondary"
                                        }
                                        className="w-full"
                                    >
                                        {plan.buttonText}
                                    </Button>
                                </div>

                                {/* Features */}
                                <div className="relative">
                                    <h4 className="text-white font-semibold mb-4">
                                        Everything included:
                                    </h4>
                                    <ul className="space-y-3">
                                        {plan.features.map(
                                            (feature, featureIndex) => (
                                                <li
                                                    key={featureIndex}
                                                    className="flex items-start"
                                                >
                                                    <Check className="w-5 h-5 text-success-400 mr-3 mt-0.5 flex-shrink-0" />
                                                    <span className="text-neutral-300 text-sm">
                                                        {feature}
                                                    </span>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Additional features */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-card p-8 mb-12"
                >
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            All Plans Include
                        </h3>
                        <p className="text-neutral-300">
                            Enterprise-grade features and security for all
                            customers
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {additionalFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                className="flex items-center"
                            >
                                <Sparkles className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0" />
                                <span className="text-neutral-300">
                                    {feature}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* FAQ link */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <p className="text-neutral-400 mb-4">
                        Have questions about our pricing?
                    </p>
                    <Button variant="ghost">View Pricing FAQ</Button>
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;
