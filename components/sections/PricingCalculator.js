"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useCallback, useMemo } from "react";
import { Calculator, Users, Zap, TrendingUp, Check } from "lucide-react";
import Card from "../ui/Card";
import Button from "../ui/Button";

const PricingCalculator = () => {
    const [users, setUsers] = useState(50);
    const [campaigns, setCampaigns] = useState(20);
    const [billing, setBilling] = useState("monthly"); // monthly or yearly
    const [selectedFeatures, setSelectedFeatures] = useState([]);

    const basePrice = useMemo(() => ({
        users: 2, // per user
        campaigns: 5, // per campaign
    }), []);

    const features = useMemo(() => [
        { id: 'analytics', name: 'Advanced Analytics', price: 99, icon: TrendingUp },
        { id: 'api', name: 'API Access', price: 149, icon: Zap },
        { id: 'whitelabel', name: 'White Label', price: 299, icon: Users },
        { id: 'priority', name: 'Priority Support', price: 49, icon: Check },
    ], []);

    const calculatePrice = useCallback(() => {
        const userCost = users * basePrice.users;
        const campaignCost = campaigns * basePrice.campaigns;
        const featureCost = selectedFeatures.reduce((total, featureId) => {
            const feature = features.find(f => f.id === featureId);
            return total + (feature ? feature.price : 0);
        }, 0);
        
        const monthlyTotal = userCost + campaignCost + featureCost;
        return billing === "yearly" ? monthlyTotal * 12 * 0.8 : monthlyTotal; // 20% discount for yearly
    }, [users, campaigns, billing, selectedFeatures, basePrice.users, basePrice.campaigns, features]);

    const toggleFeature = (featureId) => {
        setSelectedFeatures(prev => 
            prev.includes(featureId) 
                ? prev.filter(id => id !== featureId)
                : [...prev, featureId]
        );
    };

    const [animatedPrice, setAnimatedPrice] = useState(0);

    useEffect(() => {
        // Initialize with calculated price on client side only
        const initialPrice = calculatePrice();
        setAnimatedPrice(initialPrice);
    }, [calculatePrice]);

    useEffect(() => {
        const newPrice = calculatePrice();
        const duration = 500;
        const steps = 30;
        const increment = (newPrice - animatedPrice) / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            setAnimatedPrice(prev => prev + increment);
            
            if (currentStep >= steps) {
                setAnimatedPrice(newPrice);
                clearInterval(timer);
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [users, campaigns, billing, selectedFeatures, animatedPrice, calculatePrice]);

    return (
        <section id="calculator" className="section-padding relative">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-950/20 via-transparent to-secondary-950/20"></div>

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
                        <Calculator className="w-4 h-4 text-accent-400" />
                        <span className="text-sm font-medium text-accent-400">
                            Pricing Calculator
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                        Calculate Your
                        <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                            {" "}Perfect Plan
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Customize your package based on your specific needs and see real-time pricing
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Calculator Controls */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Card className="p-8 h-full">
                            <h3 className="text-2xl font-bold mb-8 text-center">
                                Customize Your Plan
                            </h3>

                            {/* Billing Toggle */}
                            <div className="mb-8">
                                <label className="block text-sm font-medium mb-4">Billing Cycle</label>
                                <div className="flex bg-gray-800/50 rounded-xl p-1">
                                    <button
                                        className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                                            billing === "monthly"
                                                ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg"
                                                : "text-gray-400 hover:text-white"
                                        }`}
                                        onClick={() => setBilling("monthly")}
                                    >
                                        Monthly
                                    </button>
                                    <button
                                        className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 relative ${
                                            billing === "yearly"
                                                ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg"
                                                : "text-gray-400 hover:text-white"
                                        }`}
                                        onClick={() => setBilling("yearly")}
                                    >
                                        Yearly
                                        <span className="absolute -top-2 -right-2 bg-accent-500 text-xs px-2 py-1 rounded-full">
                                            -20%
                                        </span>
                                    </button>
                                </div>
                            </div>

                            {/* Users Slider */}
                            <div className="mb-8">
                                <label className="block text-sm font-medium mb-2">
                                    Number of Users: <span className="text-primary-400 font-bold">{users}</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="range"
                                        min="1"
                                        max="500"
                                        value={users}
                                        onChange={(e) => setUsers(parseInt(e.target.value))}
                                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                                    />
                                    <div className="flex justify-between text-xs text-gray-400 mt-2">
                                        <span>1</span>
                                        <span>500+</span>
                                    </div>
                                </div>
                            </div>

                            {/* Campaigns Slider */}
                            <div className="mb-8">
                                <label className="block text-sm font-medium mb-2">
                                    Monthly Campaigns: <span className="text-secondary-400 font-bold">{campaigns}</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="range"
                                        min="1"
                                        max="1000"
                                        value={campaigns}
                                        onChange={(e) => setCampaigns(parseInt(e.target.value))}
                                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                                    />
                                    <div className="flex justify-between text-xs text-gray-400 mt-2">
                                        <span>1</span>
                                        <span>1000+</span>
                                    </div>
                                </div>
                            </div>

                            {/* Feature Add-ons */}
                            <div className="mb-8">
                                <label className="block text-sm font-medium mb-4">Premium Features</label>
                                <div className="space-y-3">
                                    {features.map((feature) => {
                                        const Icon = feature.icon;
                                        const isSelected = selectedFeatures.includes(feature.id);
                                        
                                        return (
                                            <motion.div
                                                key={feature.id}
                                                className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                                                    isSelected
                                                        ? "border-primary-500 bg-primary-500/10"
                                                        : "border-gray-700 bg-gray-800/30 hover:border-gray-600"
                                                }`}
                                                onClick={() => toggleFeature(feature.id)}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <div className="flex items-center space-x-3">
                                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                                        isSelected ? "bg-primary-500" : "bg-gray-700"
                                                    }`}>
                                                        <Icon className="w-5 h-5" />
                                                    </div>
                                                    <span className="font-medium">{feature.name}</span>
                                                </div>
                                                <span className="text-accent-400 font-bold">
                                                    ${feature.price}/{billing === "yearly" ? "year" : "month"}
                                                </span>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Price Display */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col justify-center"
                    >
                        <Card className="p-8 text-center relative overflow-hidden">
                            {/* Animated background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10"></div>
                            
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-4">Your Custom Plan</h3>
                                
                                {/* Animated Price */}
                                <motion.div
                                    className="mb-8"
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="text-6xl md:text-7xl font-black mb-2">
                                        <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                                            ${Math.round(animatedPrice).toLocaleString()}
                                        </span>
                                    </div>
                                    <div className="text-gray-400">
                                        per {billing === "yearly" ? "year" : "month"}
                                        {billing === "yearly" && (
                                            <div className="text-sm text-accent-400 mt-2">
                                                Save ${Math.round(calculatePrice() * 12 * 0.2).toLocaleString()} annually!
                                            </div>
                                        )}
                                    </div>
                                </motion.div>

                                {/* Price Breakdown */}
                                <div className="space-y-3 mb-8 text-left">
                                    <div className="flex justify-between text-sm">
                                        <span>{users} users × ${basePrice.users}</span>
                                        <span>${users * basePrice.users}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span>{campaigns} campaigns × ${basePrice.campaigns}</span>
                                        <span>${campaigns * basePrice.campaigns}</span>
                                    </div>
                                    {selectedFeatures.map(featureId => {
                                        const feature = features.find(f => f.id === featureId);
                                        return (
                                            <div key={featureId} className="flex justify-between text-sm text-accent-400">
                                                <span>{feature.name}</span>
                                                <span>${feature.price}</span>
                                            </div>
                                        );
                                    })}
                                    {billing === "yearly" && (
                                        <div className="flex justify-between text-sm text-green-400 pt-2 border-t border-gray-700">
                                            <span>Annual Discount (20%)</span>
                                            <span>-${Math.round(calculatePrice() * 12 * 0.2).toLocaleString()}</span>
                                        </div>
                                    )}
                                </div>

                                <Button 
                                    variant="primary" 
                                    size="lg" 
                                    className="w-full group"
                                    onClick={() => {
                                        // Handle purchase/contact
                                        console.log('Custom plan:', { users, campaigns, billing, selectedFeatures, price: Math.round(animatedPrice) });
                                    }}
                                >
                                    Get This Custom Plan
                                    <motion.div
                                        className="ml-2"
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        →
                                    </motion.div>
                                </Button>

                                <p className="text-xs text-gray-400 mt-4">
                                    30-day free trial • No setup fees • Cancel anytime
                                </p>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </div>

            <style jsx>{`
                .slider::-webkit-slider-thumb {
                    appearance: none;
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                    cursor: pointer;
                    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
                }

                .slider::-moz-range-thumb {
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                    cursor: pointer;
                    border: none;
                    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
                }
            `}</style>
        </section>
    );
};

export default PricingCalculator;
