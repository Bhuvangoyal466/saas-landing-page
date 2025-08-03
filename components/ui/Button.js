import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Button = ({
    children,
    variant = "primary",
    size = "default",
    className,
    onClick,
    disabled = false,
    loading = false,
    ...props
}) => {
    const baseClasses =
        "inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden";

    const variants = {
        primary:
            "bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg hover:shadow-xl focus:ring-primary-500",
        secondary:
            "glass hover:bg-white/[0.12] text-white border border-white/20 hover:border-white/30 shadow-lg hover:shadow-xl focus:ring-white/20",
        ghost: "text-neutral-300 hover:text-white hover:bg-white/[0.05] focus:ring-white/20",
        accent: "bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white shadow-lg hover:shadow-xl focus:ring-accent-500",
        success:
            "bg-gradient-to-r from-success-500 to-success-600 hover:from-success-600 hover:to-success-700 text-white shadow-lg hover:shadow-xl focus:ring-success-500",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm rounded-lg",
        default: "px-8 py-4 text-base rounded-xl",
        lg: "px-10 py-5 text-lg rounded-xl",
        xl: "px-12 py-6 text-xl rounded-2xl",
    };

    return (
        <motion.button
            className={cn(
                baseClasses,
                variants[variant],
                sizes[size],
                className
            )}
            onClick={onClick}
            disabled={disabled || loading}
            whileHover={{ scale: disabled ? 1 : 1.05 }}
            whileTap={{ scale: disabled ? 1 : 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            {...props}
        >
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex space-x-1">
                        <div className="loading-dot"></div>
                        <div
                            className="loading-dot"
                            style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                            className="loading-dot"
                            style={{ animationDelay: "0.2s" }}
                        ></div>
                    </div>
                </div>
            )}
            <span className={cn("flex items-center", loading && "opacity-0")}>
                {children}
            </span>

            {/* Ripple effect */}
            <div className="absolute inset-0 overflow-hidden rounded-inherit">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </div>
        </motion.button>
    );
};

export default Button;
