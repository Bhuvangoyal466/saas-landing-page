"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
    Play,
    Pause,
    Volume2,
    VolumeX,
    Maximize,
    RotateCcw,
} from "lucide-react";
import Card from "../ui/Card";
import Button from "../ui/Button";

const DemoVideo = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [progress, setProgress] = useState(0);
    const [showAnimation, setShowAnimation] = useState(false);
    const [videoError, setVideoError] = useState(false);
    const videoRef = useRef(null);

    // Animated demo steps
    const demoSteps = [
        {
            title: "Upload Your Brand Assets",
            description:
                "Simply drag and drop your logos, images, and brand guidelines",
            icon: "📁",
            delay: 0,
        },
        {
            title: "AI Analyzes Your Brand",
            description: "Our AI understands your brand personality and style",
            icon: "🧠",
            delay: 1,
        },
        {
            title: "Generate Campaign Ideas",
            description: "Get dozens of creative campaign concepts in seconds",
            icon: "💡",
            delay: 2,
        },
        {
            title: "Customize & Deploy",
            description:
                "Fine-tune your campaigns and launch across all channels",
            icon: "🚀",
            delay: 3,
        },
    ];

    // Cleanup video on component unmount
    useEffect(() => {
        const video = videoRef.current;
        return () => {
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        };
    }, []);

    const handlePlayPause = async () => {
        if (videoRef.current && !videoError) {
            try {
                if (isPlaying) {
                    videoRef.current.pause();
                    setIsPlaying(false);
                } else {
                    // Reset error state when trying to play
                    setVideoError(false);
                    await videoRef.current.play();
                    setIsPlaying(true);
                }
            } catch (error) {
                // Handle the AbortError and other video playback errors
                console.log("Video playback interrupted:", error.message);
                setIsPlaying(false);
                if (
                    error.name === "NotSupportedError" ||
                    error.name === "NotAllowedError"
                ) {
                    setVideoError(true);
                }
            }
        }
    };

    const handleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current && videoRef.current.duration) {
            const progress =
                (videoRef.current.currentTime / videoRef.current.duration) *
                100;
            setProgress(isNaN(progress) ? 0 : progress);
        }
    };

    const handleProgressClick = (e) => {
        if (videoRef.current && videoRef.current.duration) {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const width = rect.width;
            const clickProgress = Math.max(
                0,
                Math.min(100, (clickX / width) * 100)
            );
            const newTime = (clickProgress / 100) * videoRef.current.duration;

            if (isFinite(newTime)) {
                videoRef.current.currentTime = newTime;
                setProgress(clickProgress);
            }
        }
    };

    return (
        <section id="demo" className="section-padding relative">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary-950/20 to-transparent"></div>

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
                        <Play className="w-4 h-4 text-accent-400" />
                        <span className="text-sm font-medium text-accent-400">
                            See It In Action
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                        Watch
                        <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                            {" "}
                            ADmyBRAND{" "}
                        </span>
                        Transform Your Marketing
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        See how our AI-powered platform can revolutionize your
                        marketing campaigns in just minutes
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    {/* Video/Animation Toggle */}
                    <div className="flex justify-center mb-8">
                        <div className="flex bg-gray-800/50 rounded-xl p-1">
                            <button
                                className={`py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                                    !showAnimation
                                        ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg"
                                        : "text-gray-400 hover:text-white"
                                }`}
                                onClick={() => setShowAnimation(false)}
                            >
                                📹 Product Demo
                            </button>
                            <button
                                className={`py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                                    showAnimation
                                        ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg"
                                        : "text-gray-400 hover:text-white"
                                }`}
                                onClick={() => setShowAnimation(true)}
                            >
                                ✨ Interactive Demo
                            </button>
                        </div>
                    </div>

                    {!showAnimation ? (
                        /* Video Player */
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Card className="p-0 overflow-hidden relative group">
                                {/* Video Container */}
                                <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800">
                                    {/* Placeholder for actual video */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-900/50 to-secondary-900/50">
                                        <div className="text-center">
                                            <motion.div
                                                className="w-24 h-24 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Play className="w-12 h-12 text-white ml-1" />
                                            </motion.div>
                                            <h3 className="text-2xl font-bold mb-2">
                                                Product Demo Video
                                            </h3>
                                            <p className="text-gray-300">
                                                Watch how ADmyBRAND AI
                                                transforms marketing workflows
                                            </p>
                                        </div>
                                    </div>

                                    {/* Video element (placeholder) */}
                                    <video
                                        ref={videoRef}
                                        className="w-full h-full object-cover"
                                        onTimeUpdate={handleTimeUpdate}
                                        onEnded={() => setIsPlaying(false)}
                                        onPlay={() => setIsPlaying(true)}
                                        onPause={() => setIsPlaying(false)}
                                        onLoadStart={() => setIsPlaying(false)}
                                        onError={() => {
                                            console.log(
                                                "Video loading error - using placeholder"
                                            );
                                            setIsPlaying(false);
                                            setVideoError(true);
                                        }}
                                        poster="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop&crop=center"
                                        preload="metadata"
                                    >
                                        {/* Demo video sources - you can replace these with your actual video */}
                                        <source
                                            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                                            type="video/mp4"
                                        />
                                        <source
                                            src="/demo-video.mp4"
                                            type="video/mp4"
                                        />
                                        Your browser does not support the video
                                        tag.
                                    </video>

                                    {/* Video Controls Overlay */}
                                    <motion.div
                                        className="absolute inset-0 bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        initial={false}
                                    >
                                        {/* Play/Pause Button */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <motion.button
                                                className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors"
                                                onClick={handlePlayPause}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                {isPlaying ? (
                                                    <Pause className="w-8 h-8 text-white" />
                                                ) : (
                                                    <Play className="w-8 h-8 text-white ml-1" />
                                                )}
                                            </motion.button>
                                        </div>

                                        {/* Bottom Controls */}
                                        <div className="absolute bottom-0 left-0 right-0 p-4">
                                            {/* Progress Bar */}
                                            <div
                                                className="w-full h-1 bg-white/20 rounded-full mb-4 cursor-pointer"
                                                onClick={handleProgressClick}
                                            >
                                                <div
                                                    className="h-full bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full transition-all duration-300"
                                                    style={{
                                                        width: `${progress}%`,
                                                    }}
                                                />
                                            </div>

                                            {/* Control Buttons */}
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-2">
                                                    <button
                                                        className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white transition-colors"
                                                        onClick={
                                                            handlePlayPause
                                                        }
                                                    >
                                                        {isPlaying ? (
                                                            <Pause className="w-4 h-4" />
                                                        ) : (
                                                            <Play className="w-4 h-4" />
                                                        )}
                                                    </button>
                                                    <button
                                                        className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white transition-colors"
                                                        onClick={handleMute}
                                                    >
                                                        {isMuted ? (
                                                            <VolumeX className="w-4 h-4" />
                                                        ) : (
                                                            <Volume2 className="w-4 h-4" />
                                                        )}
                                                    </button>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <button className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white transition-colors">
                                                        <RotateCcw className="w-4 h-4" />
                                                    </button>
                                                    <button className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white transition-colors">
                                                        <Maximize className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </Card>
                        </motion.div>
                    ) : (
                        /* Interactive Animation Demo */
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="grid lg:grid-cols-2 gap-12 items-center"
                        >
                            {/* Animation Steps */}
                            <div className="space-y-6">
                                {demoSteps.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.6,
                                            delay: step.delay * 0.2,
                                        }}
                                        className="flex items-start space-x-4"
                                    >
                                        <motion.div
                                            className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-2xl shadow-lg flex-shrink-0"
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.4,
                                                delay: step.delay * 0.2 + 0.3,
                                            }}
                                        >
                                            {step.icon}
                                        </motion.div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold mb-2">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-300">
                                                {step.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 1 }}
                                    className="pt-6"
                                >
                                    <Button
                                        variant="primary"
                                        size="lg"
                                        className="group"
                                    >
                                        Try Interactive Demo
                                        <motion.span
                                            className="ml-2"
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                            }}
                                        >
                                            →
                                        </motion.span>
                                    </Button>
                                </motion.div>
                            </div>

                            {/* Visual Animation */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="relative"
                            >
                                <Card className="p-8 text-center relative overflow-hidden">
                                    {/* Animated background */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-accent-500/10"
                                        animate={{
                                            background: [
                                                "linear-gradient(to bottom right, rgba(99,102,241,0.1), rgba(139,92,246,0.1), rgba(34,197,94,0.1))",
                                                "linear-gradient(to bottom right, rgba(139,92,246,0.1), rgba(34,197,94,0.1), rgba(99,102,241,0.1))",
                                                "linear-gradient(to bottom right, rgba(34,197,94,0.1), rgba(99,102,241,0.1), rgba(139,92,246,0.1))",
                                            ],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                        }}
                                    />

                                    <div className="relative z-10">
                                        {/* Animated Elements */}
                                        <motion.div
                                            className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center"
                                            animate={{
                                                rotate: [0, 5, -5, 0],
                                                scale: [1, 1.05, 1],
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                            }}
                                        >
                                            <motion.div
                                                className="text-4xl"
                                                animate={{ rotate: [0, 360] }}
                                                transition={{
                                                    duration: 8,
                                                    repeat: Infinity,
                                                    ease: "linear",
                                                }}
                                            >
                                                🤖
                                            </motion.div>
                                        </motion.div>

                                        {/* Floating particles */}
                                        {[...Array(6)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute w-2 h-2 bg-accent-400 rounded-full"
                                                style={{
                                                    left: `${20 + i * 10}%`,
                                                    top: `${
                                                        30 + (i % 2) * 20
                                                    }%`,
                                                }}
                                                animate={{
                                                    y: [0, -20, 0],
                                                    opacity: [0.3, 1, 0.3],
                                                }}
                                                transition={{
                                                    duration: 2 + i * 0.5,
                                                    repeat: Infinity,
                                                    delay: i * 0.3,
                                                }}
                                            />
                                        ))}

                                        <h3 className="text-2xl font-bold mb-4">
                                            AI in Action
                                        </h3>
                                        <p className="text-gray-300">
                                            Watch as our AI processes your brand
                                            data and generates personalized
                                            campaigns
                                        </p>
                                    </div>
                                </Card>
                            </motion.div>
                        </motion.div>
                    )}

                    {/* Demo Features */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-16 grid md:grid-cols-3 gap-8"
                    >
                        {[
                            {
                                icon: "⚡",
                                title: "Lightning Fast",
                                desc: "Generate campaigns in under 60 seconds",
                            },
                            {
                                icon: "🎯",
                                title: "Highly Targeted",
                                desc: "AI-powered audience segmentation",
                            },
                            {
                                icon: "📊",
                                title: "Data Driven",
                                desc: "Real-time analytics and optimization",
                            },
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                whileHover={{ y: -5 }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center text-2xl border border-white/10">
                                    {feature.icon}
                                </div>
                                <h4 className="text-lg font-bold mb-2">
                                    {feature.title}
                                </h4>
                                <p className="text-gray-400 text-sm">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default DemoVideo;
