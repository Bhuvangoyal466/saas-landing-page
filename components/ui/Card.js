import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Card = ({
    children,
    className,
    variant = "default",
    hover = false,
    glass = false,
    ...props
}) => {
    const baseClasses = "rounded-2xl transition-all duration-500";

    const variants = {
        default: "bg-neutral-900/50 border border-neutral-800 shadow-lg",
        glass: "glass-card",
        feature: "feature-card",
        pricing: "pricing-card",
        "pricing-featured": "pricing-card-featured",
    };

    const hoverEffects = hover
        ? "hover:scale-105 hover:shadow-2xl cursor-pointer"
        : "";

    const CardComponent = hover ? motion.div : "div";
    const motionProps = hover
        ? {
              whileHover: { scale: 1.02, y: -5 },
              transition: { type: "spring", stiffness: 300, damping: 20 },
          }
        : {};

    return (
        <CardComponent
            className={cn(
                baseClasses,
                variants[variant],
                hoverEffects,
                className
            )}
            {...motionProps}
            {...props}
        >
            {children}
        </CardComponent>
    );
};

export default Card;
