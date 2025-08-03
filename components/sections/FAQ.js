"use client";

import { motion } from "framer-motion";
import { HelpCircle, Sparkles } from "lucide-react";
import Accordion from "../ui/Accordion";
import Button from "../ui/Button";

const FAQ = () => {
    const faqItems = [
        {
            title: "How does ADmyBRAND AI generate content that matches my brand voice?",
            content:
                "Our AI uses advanced natural language processing and machine learning to analyze your existing content, brand guidelines, and tone of voice. It learns from your previous campaigns, website copy, and marketing materials to understand your unique brand personality. The more you use it, the better it becomes at capturing your authentic voice across all content types.",
        },
        {
            title: "What types of campaigns can I create with ADmyBRAND AI?",
            content:
                "You can create virtually any type of marketing campaign including social media campaigns, email marketing sequences, Google Ads, Facebook/Instagram ads, content marketing, influencer outreach, PR campaigns, and more. Our AI adapts to different platforms and formats while maintaining consistency across all touchpoints.",
        },
        {
            title: "How accurate are the predictive analytics and forecasting features?",
            content:
                "Our predictive models achieve 95% accuracy on average, based on analysis of over 500,000 campaigns. The system considers hundreds of variables including historical performance, market trends, seasonal patterns, audience behavior, and competitive landscape to provide reliable forecasts for reach, engagement, conversions, and ROI.",
        },
        {
            title: "Can I integrate ADmyBRAND AI with my existing marketing tools?",
            content:
                "Yes! We offer integrations with 50+ popular marketing tools including HubSpot, Salesforce, Mailchimp, Hootsuite, Google Analytics, Facebook Business Manager, Slack, and many more. Our API also allows for custom integrations. Professional and Enterprise plans include priority integration support.",
        },
        {
            title: "Is my data secure and how do you protect brand confidentiality?",
            content:
                "We take security extremely seriously. All data is encrypted in transit and at rest using enterprise-grade encryption. We're SOC 2 Type II certified, GDPR compliant, and follow strict data protection protocols. Your brand data never leaves our secure environment and is never used to train models for other customers.",
        },
        {
            title: "What kind of support do you provide and how quickly can I get help?",
            content:
                "All plans include comprehensive support. Starter plan users get email support with 24-hour response time. Professional users get priority support with 4-hour response time. Enterprise customers receive dedicated account managers, phone support, and 1-hour SLA for critical issues. We also provide extensive documentation, video tutorials, and live training sessions.",
        },
        {
            title: "How does the free trial work and what's included?",
            content:
                "Your 14-day free trial includes full access to all Professional plan features with no restrictions. You can create unlimited campaigns, access all AI tools, use advanced analytics, and test integrations. No credit card is required to start, and you can cancel anytime during the trial with no charges.",
        },
        {
            title: "Can I customize the AI to work with industry-specific requirements?",
            content:
                "Absolutely! Our AI can be trained on industry-specific data and compliance requirements. We have pre-built models for healthcare, finance, e-commerce, B2B SaaS, real estate, and more. Enterprise customers can also request custom model training for unique industry needs or specialized use cases.",
        },
        {
            title: "How does pricing work and can I change plans anytime?",
            content:
                "Pricing is based on monthly or annual subscriptions. You can upgrade or downgrade your plan at any time, and changes take effect immediately. If you upgrade mid-cycle, you'll only pay the prorated difference. Annual plans save 20% and include additional features. Enterprise pricing is custom based on your specific needs.",
        },
        {
            title: "What happens to my data if I decide to cancel my subscription?",
            content:
                "You maintain full ownership of all your data. If you cancel, you have 90 days to export all your campaigns, analytics data, and generated content. We provide easy export tools and can assist with data migration. After 90 days, data is securely deleted according to our retention policy.",
        },
    ];

    const categories = [
        { name: "Getting Started", count: 12 },
        { name: "Features & Functionality", count: 18 },
        { name: "Pricing & Billing", count: 8 },
        { name: "Integrations", count: 15 },
        { name: "Security & Privacy", count: 6 },
        { name: "Support", count: 9 },
    ];

    return (
        <section id="faq" className="section-padding relative">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-950/10 to-transparent"></div>

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
                        <HelpCircle className="w-4 h-4 text-accent-400" />
                        <span className="text-sm font-medium text-neutral-200">
                            Support Center
                        </span>
                    </div>

                    <h2 className="heading-lg mb-6">
                        Frequently Asked{" "}
                        <span className="gradient-text">Questions</span>
                    </h2>

                    <p className="text-large text-neutral-300 max-w-3xl mx-auto">
                        Find answers to common questions about ADmyBRAND AI
                        Suite. Can&apos;t find what you&apos;re looking for? Our
                        support team is here to help.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* FAQ Categories */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-1"
                    >
                        <div className="glass-card p-6 sticky top-8">
                            <h3 className="text-white font-semibold mb-6">
                                Browse by Category
                            </h3>
                            <div className="space-y-3">
                                {categories.map((category, index) => (
                                    <motion.button
                                        key={category.name}
                                        className="w-full flex items-center justify-between p-3 text-left text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.1,
                                        }}
                                        whileHover={{ x: 5 }}
                                    >
                                        <span className="text-sm">
                                            {category.name}
                                        </span>
                                        <span className="text-xs text-neutral-500 bg-neutral-800 px-2 py-1 rounded-full">
                                            {category.count}
                                        </span>
                                    </motion.button>
                                ))}
                            </div>

                            {/* Contact support */}
                            <div className="mt-8 pt-6 border-t border-white/10">
                                <h4 className="text-white font-medium mb-3">
                                    Still need help?
                                </h4>
                                <p className="text-sm text-neutral-400 mb-4">
                                    Get in touch with our support team
                                </p>
                                <Button
                                    variant="secondary"
                                    size="sm"
                                    className="w-full"
                                >
                                    Contact Support
                                </Button>
                            </div>
                        </div>
                    </motion.div>

                    {/* FAQ Accordion */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-3"
                    >
                        <Accordion
                            items={faqItems}
                            allowMultiple={true}
                            defaultOpen={[0]}
                        />
                    </motion.div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center mt-20"
                >
                    <div className="glass-card max-w-2xl mx-auto p-8">
                        <Sparkles className="w-12 h-12 text-primary-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Ready to Get Started?
                        </h3>
                        <p className="text-neutral-300 mb-6">
                            Join thousands of brands already using ADmyBRAND AI
                            to transform their marketing.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="primary">Start Free Trial</Button>
                            <Button variant="secondary">Schedule Demo</Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
