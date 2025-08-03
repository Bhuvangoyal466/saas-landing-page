"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
    Calendar,
    Clock,
    User,
    ArrowRight,
    BookOpen,
    Download,
    Video,
    FileText,
    Bookmark,
} from "lucide-react";
import Card from "../ui/Card";
import Button from "../ui/Button";

const BlogResources = () => {
    const [activeTab, setActiveTab] = useState("blog");

    const blogPosts = [
        {
            id: 1,
            title: "The Future of AI in Marketing: 2025 Trends and Predictions",
            excerpt:
                "Discover how artificial intelligence is reshaping marketing strategies and what to expect in the coming year.",
            author: "Sarah Chen",
            date: "2025-01-15",
            readTime: "8 min read",
            category: "AI Trends",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=240&fit=crop&crop=center",
            featured: true,
        },
        {
            id: 2,
            title: "How to Build Brand Consistency Across All Marketing Channels",
            excerpt:
                "Learn the essential strategies for maintaining your brand voice and visual identity across different platforms.",
            author: "Marcus Rodriguez",
            date: "2025-01-12",
            readTime: "6 min read",
            category: "Branding",
            image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=240&fit=crop&crop=center",
            featured: false,
        },
        {
            id: 3,
            title: "Maximizing ROI with Data-Driven Campaign Optimization",
            excerpt:
                "Step-by-step guide to using analytics and AI insights to improve your marketing campaign performance.",
            author: "Emily Johnson",
            date: "2025-01-10",
            readTime: "10 min read",
            category: "Analytics",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop&crop=center",
            featured: false,
        },
        {
            id: 4,
            title: "Customer Persona Development in the AI Era",
            excerpt:
                "Modern techniques for creating detailed customer personas using AI-powered data analysis.",
            author: "David Park",
            date: "2025-01-08",
            readTime: "7 min read",
            category: "Strategy",
            image: "https://images.unsplash.com/photo-1567839981633-3efa98544592?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=400&h=240&fit=crop&crop=center",
            featured: false,
        },
    ];

    const resources = [
        {
            id: 1,
            title: "Complete Guide to AI Marketing Automation",
            type: "PDF Guide",
            description:
                "90-page comprehensive guide covering everything from setup to advanced strategies.",
            downloads: "2.3k",
            icon: FileText,
            featured: true,
        },
        {
            id: 2,
            title: "Brand Guidelines Template",
            type: "Template",
            description:
                "Professional template to create consistent brand guidelines for your organization.",
            downloads: "1.8k",
            icon: Download,
            featured: false,
        },
        {
            id: 3,
            title: "Marketing Campaign Checklist",
            type: "Checklist",
            description:
                "Essential checklist to ensure your campaigns are optimized for maximum impact.",
            downloads: "3.1k",
            icon: BookOpen,
            featured: false,
        },
        {
            id: 4,
            title: "Webinar: Advanced AI Strategies",
            type: "Video",
            description:
                "60-minute deep dive into advanced AI marketing strategies with industry experts.",
            downloads: "945",
            icon: Video,
            featured: false,
        },
    ];

    const categories = [
        "All",
        "AI Trends",
        "Branding",
        "Analytics",
        "Strategy",
    ];

    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredPosts =
        selectedCategory === "All"
            ? blogPosts
            : blogPosts.filter((post) => post.category === selectedCategory);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    return (
        <section id="resources" className="section-padding relative">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-950/10 to-transparent"></div>

            <div className="relative container-custom">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6 border border-white/20">
                        <BookOpen className="w-4 h-4 text-accent-400" />
                        <span className="text-sm font-medium text-accent-400">
                            Knowledge Hub
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                        Learn &
                        <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                            {" "}
                            Grow{" "}
                        </span>
                        With Expert Insights
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Stay ahead with the latest marketing strategies, AI
                        insights, and actionable resources
                    </p>
                </motion.div>

                {/* Tab Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mb-12"
                >
                    <div className="flex bg-gray-800/50 rounded-xl p-1">
                        <button
                            className={`py-3 px-8 rounded-lg font-medium transition-all duration-300 ${
                                activeTab === "blog"
                                    ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg"
                                    : "text-gray-400 hover:text-white"
                            }`}
                            onClick={() => setActiveTab("blog")}
                        >
                            📝 Blog Posts
                        </button>
                        <button
                            className={`py-3 px-8 rounded-lg font-medium transition-all duration-300 ${
                                activeTab === "resources"
                                    ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg"
                                    : "text-gray-400 hover:text-white"
                            }`}
                            onClick={() => setActiveTab("resources")}
                        >
                            📚 Resources
                        </button>
                    </div>
                </motion.div>

                {activeTab === "blog" ? (
                    /* Blog Section */
                    <div>
                        {/* Category Filter */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-wrap justify-center gap-3 mb-12"
                        >
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                                        selectedCategory === category
                                            ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg"
                                            : "bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50"
                                    }`}
                                    onClick={() =>
                                        setSelectedCategory(category)
                                    }
                                >
                                    {category}
                                </button>
                            ))}
                        </motion.div>

                        {/* Featured Post */}
                        {filteredPosts.find((post) => post.featured) && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="mb-16"
                            >
                                <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500">
                                    <div className="grid lg:grid-cols-2 gap-0">
                                        <div className="relative overflow-hidden">
                                            <motion.img
                                                src={
                                                    filteredPosts.find(
                                                        (post) => post.featured
                                                    ).image
                                                }
                                                alt={
                                                    filteredPosts.find(
                                                        (post) => post.featured
                                                    ).title
                                                }
                                                className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                whileHover={{ scale: 1.05 }}
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                                    Featured
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-8 flex flex-col justify-center">
                                            <div className="mb-4">
                                                <span className="text-primary-400 text-sm font-medium">
                                                    {
                                                        filteredPosts.find(
                                                            (post) =>
                                                                post.featured
                                                        ).category
                                                    }
                                                </span>
                                            </div>
                                            <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary-400 transition-colors">
                                                {
                                                    filteredPosts.find(
                                                        (post) => post.featured
                                                    ).title
                                                }
                                            </h3>
                                            <p className="text-gray-300 mb-6 leading-relaxed">
                                                {
                                                    filteredPosts.find(
                                                        (post) => post.featured
                                                    ).excerpt
                                                }
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-4 text-sm text-gray-400">
                                                    <div className="flex items-center space-x-1">
                                                        <User className="w-4 h-4" />
                                                        <span>
                                                            {
                                                                filteredPosts.find(
                                                                    (post) =>
                                                                        post.featured
                                                                ).author
                                                            }
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center space-x-1">
                                                        <Calendar className="w-4 h-4" />
                                                        <span>
                                                            {formatDate(
                                                                filteredPosts.find(
                                                                    (post) =>
                                                                        post.featured
                                                                ).date
                                                            )}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center space-x-1">
                                                        <Clock className="w-4 h-4" />
                                                        <span>
                                                            {
                                                                filteredPosts.find(
                                                                    (post) =>
                                                                        post.featured
                                                                ).readTime
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="group/btn"
                                                >
                                                    Read More
                                                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        )}

                        {/* Blog Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts
                                .filter((post) => !post.featured)
                                .map((post, index) => (
                                    <motion.div
                                        key={post.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.1,
                                        }}
                                    >
                                        <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 h-full">
                                            <div className="relative overflow-hidden">
                                                <motion.img
                                                    src={post.image}
                                                    alt={post.title}
                                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                                    whileHover={{ scale: 1.05 }}
                                                />
                                                <div className="absolute top-4 left-4">
                                                    <span className="bg-primary-500/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                                                        {post.category}
                                                    </span>
                                                </div>
                                                <motion.button
                                                    className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <Bookmark className="w-4 h-4 text-white" />
                                                </motion.button>
                                            </div>
                                            <div className="p-6 flex flex-col flex-1">
                                                <h3 className="text-lg font-bold mb-3 group-hover:text-primary-400 transition-colors line-clamp-2">
                                                    {post.title}
                                                </h3>
                                                <p className="text-gray-300 text-sm mb-4 flex-1 line-clamp-3">
                                                    {post.excerpt}
                                                </p>
                                                <div className="flex items-center justify-between text-xs text-gray-400">
                                                    <div className="flex items-center space-x-2">
                                                        <User className="w-3 h-3" />
                                                        <span>
                                                            {post.author}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <Clock className="w-3 h-3" />
                                                        <span>
                                                            {post.readTime}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </motion.div>
                                ))}
                        </div>
                    </div>
                ) : (
                    /* Resources Section */
                    <div>
                        {/* Featured Resource */}
                        {resources.find((resource) => resource.featured) && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="mb-16"
                            >
                                <Card className="p-8 text-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 group-hover:from-primary-500/20 group-hover:to-secondary-500/20 transition-colors duration-500"></div>
                                    <div className="relative z-10">
                                        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center">
                                            <FileText className="w-10 h-10 text-white" />
                                        </div>
                                        <span className="inline-block bg-accent-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                                            Featured Resource
                                        </span>
                                        <h3 className="text-3xl font-bold mb-4">
                                            {
                                                resources.find(
                                                    (resource) =>
                                                        resource.featured
                                                ).title
                                            }
                                        </h3>
                                        <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                                            {
                                                resources.find(
                                                    (resource) =>
                                                        resource.featured
                                                ).description
                                            }
                                        </p>
                                        <div className="flex items-center justify-center space-x-6 mb-8">
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-primary-400">
                                                    {
                                                        resources.find(
                                                            (resource) =>
                                                                resource.featured
                                                        ).downloads
                                                    }
                                                </div>
                                                <div className="text-sm text-gray-400">
                                                    Downloads
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-secondary-400">
                                                    FREE
                                                </div>
                                                <div className="text-sm text-gray-400">
                                                    Always
                                                </div>
                                            </div>
                                        </div>
                                        <Button
                                            variant="primary"
                                            size="lg"
                                            className="group/btn"
                                        >
                                            <Download className="w-5 h-5 mr-2 group-hover/btn:animate-bounce" />
                                            Download Now
                                        </Button>
                                    </div>
                                </Card>
                            </motion.div>
                        )}

                        {/* Resources Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {resources
                                .filter((resource) => !resource.featured)
                                .map((resource, index) => {
                                    const Icon = resource.icon;
                                    return (
                                        <motion.div
                                            key={resource.id}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.6,
                                                delay: index * 0.1,
                                            }}
                                        >
                                            <Card className="p-6 text-center group hover:shadow-xl transition-all duration-300 h-full">
                                                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                                    <Icon className="w-8 h-8 text-primary-400" />
                                                </div>
                                                <span className="inline-block bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs font-medium mb-3">
                                                    {resource.type}
                                                </span>
                                                <h3 className="text-lg font-bold mb-3 group-hover:text-primary-400 transition-colors">
                                                    {resource.title}
                                                </h3>
                                                <p className="text-gray-300 text-sm mb-4 flex-1">
                                                    {resource.description}
                                                </p>
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="text-xs text-gray-400">
                                                        {resource.downloads}{" "}
                                                        downloads
                                                    </span>
                                                    <span className="text-sm font-bold text-accent-400">
                                                        FREE
                                                    </span>
                                                </div>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="w-full group/btn"
                                                >
                                                    <Download className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
                                                    Download
                                                </Button>
                                            </Card>
                                        </motion.div>
                                    );
                                })}
                        </div>
                    </div>
                )}

                {/* Newsletter Signup */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-20"
                >
                    <Card className="p-8 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-4">
                                Stay Updated
                            </h3>
                            <p className="text-gray-300 mb-6">
                                Get the latest insights, resources, and
                                exclusive content delivered to your inbox
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                                />
                                <Button
                                    variant="primary"
                                    className="whitespace-nowrap"
                                >
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
};

export default BlogResources;
