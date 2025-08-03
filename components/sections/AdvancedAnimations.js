"use client";

import {
    motion,
    useScroll,
    useTransform,
    useMotionValue,
    useSpring,
    useInView,
} from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Sparkles, Zap, Target, TrendingUp, Brain, Rocket } from "lucide-react";

const AdvancedAnimations = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.3 });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Parallax transforms
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.9]);

    // Mouse position for interactive elements
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { damping: 25, stiffness: 150 };
    const mouseXSpring = useSpring(mouseX, springConfig);
    const mouseYSpring = useSpring(mouseY, springConfig);

    const handleMouseMove = (e) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            mouseX.set(x * 0.1);
            mouseY.set(y * 0.1);
        }
    };

    // Floating elements data
    const floatingElements = [
        { Icon: Sparkles, delay: 0, x: 20, y: 20, duration: 6 },
        { Icon: Zap, delay: 1, x: 80, y: 30, duration: 8 },
        { Icon: Target, delay: 2, x: 15, y: 70, duration: 7 },
        { Icon: TrendingUp, delay: 3, x: 85, y: 80, duration: 9 },
        { Icon: Brain, delay: 4, x: 50, y: 15, duration: 6.5 },
        { Icon: Rocket, delay: 5, x: 70, y: 60, duration: 7.5 },
    ];

    // Predefined particle data to avoid hydration mismatch
    const particleData = [
        {
            initialX: 45,
            initialY: 123,
            positions: [45, 189, 78],
            yPositions: [123, 67, 201],
            duration: 6.2,
            delay: 0.3,
        },
        {
            initialX: 178,
            initialY: 89,
            positions: [178, 34, 156],
            yPositions: [89, 234, 145],
            duration: 7.1,
            delay: 0.8,
        },
        {
            initialX: 67,
            initialY: 234,
            positions: [67, 201, 23],
            yPositions: [234, 45, 178],
            duration: 5.8,
            delay: 1.2,
        },
        {
            initialX: 234,
            initialY: 56,
            positions: [234, 89, 167],
            yPositions: [56, 189, 78],
            duration: 6.9,
            delay: 0.5,
        },
        {
            initialX: 123,
            initialY: 167,
            positions: [123, 78, 245],
            yPositions: [167, 234, 89],
            duration: 7.3,
            delay: 1.5,
        },
        {
            initialX: 89,
            initialY: 201,
            positions: [89, 156, 45],
            yPositions: [201, 67, 234],
            duration: 6.1,
            delay: 0.9,
        },
        {
            initialX: 201,
            initialY: 78,
            positions: [201, 67, 189],
            yPositions: [78, 201, 123],
            duration: 7.8,
            delay: 0.2,
        },
        {
            initialX: 56,
            initialY: 145,
            positions: [56, 234, 89],
            yPositions: [145, 78, 167],
            duration: 6.5,
            delay: 1.1,
        },
        {
            initialX: 167,
            initialY: 189,
            positions: [167, 45, 123],
            yPositions: [189, 234, 56],
            duration: 7.2,
            delay: 0.7,
        },
        {
            initialX: 145,
            initialY: 67,
            positions: [145, 189, 234],
            yPositions: [67, 123, 201],
            duration: 6.8,
            delay: 1.3,
        },
        {
            initialX: 78,
            initialY: 123,
            positions: [78, 234, 56],
            yPositions: [123, 89, 167],
            duration: 7.5,
            delay: 0.4,
        },
        {
            initialX: 189,
            initialY: 234,
            positions: [189, 67, 145],
            yPositions: [234, 167, 78],
            duration: 6.3,
            delay: 1.0,
        },
        {
            initialX: 34,
            initialY: 89,
            positions: [34, 178, 201],
            yPositions: [89, 234, 123],
            duration: 7.7,
            delay: 0.6,
        },
        {
            initialX: 223,
            initialY: 167,
            positions: [223, 89, 45],
            yPositions: [167, 78, 234],
            duration: 6.6,
            delay: 1.4,
        },
        {
            initialX: 98,
            initialY: 201,
            positions: [98, 167, 234],
            yPositions: [201, 45, 89],
            duration: 7.1,
            delay: 0.8,
        },
        {
            initialX: 167,
            initialY: 45,
            positions: [167, 201, 78],
            yPositions: [45, 189, 234],
            duration: 6.9,
            delay: 1.2,
        },
        {
            initialX: 134,
            initialY: 178,
            positions: [134, 56, 189],
            yPositions: [178, 234, 67],
            duration: 7.4,
            delay: 0.3,
        },
        {
            initialX: 189,
            initialY: 89,
            positions: [189, 234, 123],
            yPositions: [89, 167, 201],
            duration: 6.7,
            delay: 1.1,
        },
        {
            initialX: 56,
            initialY: 234,
            positions: [56, 167, 89],
            yPositions: [234, 78, 145],
            duration: 7.6,
            delay: 0.5,
        },
        {
            initialX: 201,
            initialY: 123,
            positions: [201, 78, 167],
            yPositions: [123, 234, 89],
            duration: 6.4,
            delay: 0.9,
        },
    ];

    // Counter animation
    const [count, setCount] = useState(0);
    const targetCount = 10000;

    useEffect(() => {
        if (isInView) {
            const timer = setInterval(() => {
                setCount((prev) => {
                    if (prev < targetCount) {
                        return prev + Math.ceil((targetCount - prev) / 20);
                    }
                    clearInterval(timer);
                    return targetCount;
                });
            }, 50);
            return () => clearInterval(timer);
        }
    }, [isInView]);

    // Morphing shape paths
    const morphPaths = [
        "M100,200 C100,100 200,100 200,200 C200,300 100,300 100,200 Z",
        "M150,150 C200,100 300,150 250,200 C300,250 200,300 150,250 C100,250 50,200 100,150 Z",
        "M180,120 C220,140 240,180 220,220 C200,240 160,240 120,220 C80,200 60,160 80,120 C100,100 140,100 180,120 Z",
    ];

    const [currentPath, setCurrentPath] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPath((prev) => (prev + 1) % morphPaths.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [morphPaths.length]);

    return (
        <section
            ref={containerRef}
            className="section-padding relative overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Animated Background */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-secondary-500/5 to-accent-500/5"
                    animate={{
                        background: [
                            "linear-gradient(to bottom right, rgba(99,102,241,0.05), rgba(139,92,246,0.05), rgba(34,197,94,0.05))",
                            "linear-gradient(to bottom right, rgba(139,92,246,0.05), rgba(34,197,94,0.05), rgba(244,63,94,0.05))",
                            "linear-gradient(to bottom right, rgba(34,197,94,0.05), rgba(244,63,94,0.05), rgba(99,102,241,0.05))",
                        ],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                />

                {/* Floating Orbs with Parallax */}
                <motion.div
                    className="absolute w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
                    style={{ y: y1, x: -100, top: -100 }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div
                    className="absolute w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl"
                    style={{ y: y2, x: "70%", top: "30%" }}
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{ duration: 8, repeat: Infinity, delay: 2 }}
                />
            </div>

            <div className="relative container-custom">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <motion.div
                        className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full mb-8 border border-white/20"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            type: "spring",
                            bounce: 0.6,
                        }}
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            <Sparkles className="w-5 h-5 text-accent-400" />
                        </motion.div>
                        <span className="text-sm font-medium text-accent-400">
                            Advanced Animations
                        </span>
                    </motion.div>

                    <motion.h2
                        className="text-5xl md:text-7xl font-black mb-8"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                            delay: 0.3,
                        }}
                    >
                        <motion.span
                            className="inline-block bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent"
                            animate={{
                                backgroundPosition: ["0%", "100%", "0%"],
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                            style={{ backgroundSize: "200% 100%" }}
                        >
                            Experience
                        </motion.span>
                        <br />
                        <motion.span
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.6 }}
                        >
                            The Future
                        </motion.span>
                    </motion.h2>

                    <motion.p
                        className="text-xl text-gray-300 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        Immerse yourself in cutting-edge animations and
                        interactions that bring your brand to life
                    </motion.p>
                </motion.div>

                {/* Interactive Elements Grid */}
                <div className="grid lg:grid-cols-3 gap-12 mb-20">
                    {/* Morphing Shape */}
                    <motion.div
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <div className="w-64 h-64 mb-6 relative">
                            <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 300 300"
                            >
                                <motion.path
                                    d={morphPaths[currentPath]}
                                    fill="url(#morphGradient)"
                                    initial={false}
                                    animate={{ d: morphPaths[currentPath] }}
                                    transition={{
                                        duration: 2,
                                        ease: "easeInOut",
                                    }}
                                />
                                <defs>
                                    <linearGradient
                                        id="morphGradient"
                                        x1="0%"
                                        y1="0%"
                                        x2="100%"
                                        y2="100%"
                                    >
                                        <stop
                                            offset="0%"
                                            stopColor="#6366f1"
                                            stopOpacity="0.6"
                                        />
                                        <stop
                                            offset="50%"
                                            stopColor="#8b5cf6"
                                            stopOpacity="0.8"
                                        />
                                        <stop
                                            offset="100%"
                                            stopColor="#22c55e"
                                            stopOpacity="0.6"
                                        />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center"
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            >
                                <Brain className="w-12 h-12 text-white" />
                            </motion.div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                            Morphing Intelligence
                        </h3>
                        <p className="text-gray-400 text-center">
                            AI that adapts and evolves with your needs
                        </p>
                    </motion.div>

                    {/* Particle System */}
                    <motion.div
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <div className="w-64 h-64 mb-6 relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10">
                            {particleData.map((particle, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 bg-accent-400 rounded-full"
                                    initial={{
                                        x: particle.initialX,
                                        y: particle.initialY,
                                        opacity: 0,
                                    }}
                                    animate={{
                                        x: particle.positions,
                                        y: particle.yPositions,
                                        opacity: [0, 1, 0],
                                        scale: [0, 1.5, 0],
                                    }}
                                    transition={{
                                        duration: particle.duration,
                                        repeat: Infinity,
                                        delay: particle.delay,
                                        ease: "easeInOut",
                                    }}
                                />
                            ))}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Zap className="w-12 h-12 text-primary-400" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                            Dynamic Energy
                        </h3>
                        <p className="text-gray-400 text-center">
                            Powerful algorithms at work
                        </p>
                    </motion.div>

                    {/* 3D Card Effect */}
                    <motion.div
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <motion.div
                            className="w-64 h-64 mb-6 perspective-1000"
                            style={{
                                rotateX: useTransform(
                                    mouseYSpring,
                                    [-100, 100],
                                    [10, -10]
                                ),
                                rotateY: useTransform(
                                    mouseXSpring,
                                    [-100, 100],
                                    [-10, 10]
                                ),
                            }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <motion.div
                                className="w-full h-full bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-2xl"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                                    style={{
                                        background: useTransform(
                                            mouseXSpring,
                                            [-100, 100],
                                            [
                                                "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
                                                "linear-gradient(225deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
                                            ]
                                        ),
                                    }}
                                />
                                <Target className="w-12 h-12 text-white z-10" />
                            </motion.div>
                        </motion.div>
                        <h3 className="text-xl font-bold mb-2">
                            Precision Targeting
                        </h3>
                        <p className="text-gray-400 text-center">
                            Reach your perfect audience
                        </p>
                    </motion.div>
                </div>

                {/* Floating Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    {floatingElements.map((element, index) => {
                        const { Icon } = element;
                        return (
                            <motion.div
                                key={index}
                                className="absolute text-white/20"
                                style={{
                                    left: `${element.x}%`,
                                    top: `${element.y}%`,
                                }}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{
                                    opacity: [0, 0.6, 0],
                                    scale: [0, 1.2, 0],
                                    y: [0, -30, 0],
                                    rotate: [0, 180, 360],
                                }}
                                transition={{
                                    duration: element.duration,
                                    repeat: Infinity,
                                    delay: element.delay,
                                    ease: "easeInOut",
                                }}
                            >
                                <Icon className="w-6 h-6" />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Statistics Counter */}
                <motion.div
                    className="text-center py-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                value: count,
                                label: "Campaigns Generated",
                                suffix: "+",
                            },
                            {
                                value: Math.floor(count * 0.95),
                                label: "Happy Clients",
                                suffix: "%",
                            },
                            {
                                value: Math.floor(count * 0.003),
                                label: "Countries Served",
                                suffix: "",
                            },
                            {
                                value: Math.floor(count * 0.0024),
                                label: "Team Members",
                                suffix: "",
                            },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                            >
                                <motion.div
                                    className="text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.1 + 0.5,
                                        type: "spring",
                                        bounce: 0.6,
                                    }}
                                >
                                    {stat.value.toLocaleString()}
                                    {stat.suffix}
                                </motion.div>
                                <div className="text-gray-400">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Liquid Loading Animation */}
                <motion.div
                    className="flex justify-center mb-20"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className="relative w-80 h-20 bg-gray-800 rounded-full overflow-hidden border border-gray-600">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full"
                            initial={{ x: "-100%" }}
                            animate={{ x: "0%" }}
                            transition={{
                                duration: 3,
                                ease: "easeInOut",
                                repeat: Infinity,
                            }}
                        />
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"
                            animate={{
                                x: ["-100%", "100%"],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                repeat: Infinity,
                            }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                            Loading Magic...
                        </div>
                    </div>
                </motion.div>

                {/* Magnetic Button */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <motion.button
                        className="relative px-12 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full text-white font-bold text-lg overflow-hidden group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            x: useTransform(mouseXSpring, [-100, 100], [-5, 5]),
                            y: useTransform(mouseYSpring, [-100, 100], [-5, 5]),
                        }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-white/20"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.6 }}
                        />
                        <span className="relative z-10 flex items-center">
                            Experience the Magic
                            <motion.div
                                className="ml-2"
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <Rocket className="w-5 h-5" />
                            </motion.div>
                        </span>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default AdvancedAnimations;
