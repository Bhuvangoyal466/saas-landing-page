import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const Carousel = ({
    items,
    autoPlay = true,
    autoPlayInterval = 5000,
    showDots = true,
    showArrows = true,
    className,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(autoPlay);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        if (!isPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === items.length - 1 ? 0 : prevIndex + 1
            );
        }, autoPlayInterval);
        return () => clearInterval(interval);
    }, [isPlaying, autoPlayInterval, items.length]);

    return (
        <div
            className={cn("relative", className)}
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(autoPlay)}
        >
            {/* Main carousel container */}
            <div className="overflow-hidden rounded-2xl">
                <motion.div
                    className="flex"
                    animate={{ x: `-${currentIndex * 100}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {items.map((item, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                            {item}
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Navigation arrows */}
            {showArrows && items.length > 1 && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 glass p-2 rounded-full text-white hover:bg-white/20 transition-all duration-200 z-10"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 glass p-2 rounded-full text-white hover:bg-white/20 transition-all duration-200 z-10"
                    >
                        <ChevronRight size={20} />
                    </button>
                </>
            )}

            {/* Dots indicator */}
            {showDots && items.length > 1 && (
                <div className="flex justify-center space-x-2 mt-6">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={cn(
                                "w-3 h-3 rounded-full transition-all duration-200",
                                index === currentIndex
                                    ? "bg-primary-500 scale-110"
                                    : "bg-white/30 hover:bg-white/50"
                            )}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Carousel;
