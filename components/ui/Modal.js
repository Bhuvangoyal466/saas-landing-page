import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

const Modal = ({
    isOpen,
    onClose,
    children,
    title,
    className,
    size = "default",
}) => {
    const sizes = {
        sm: "max-w-md",
        default: "max-w-lg",
        lg: "max-w-2xl",
        xl: "max-w-4xl",
        full: "max-w-full mx-4",
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        className={cn(
                            "relative glass-card w-full mx-4 max-h-[90vh] overflow-y-auto",
                            sizes[size],
                            className
                        )}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                        }}
                    >
                        {/* Header */}
                        {title && (
                            <div className="flex items-center justify-between p-6 border-b border-white/10">
                                <h3 className="text-xl font-semibold text-white">
                                    {title}
                                </h3>
                                <button
                                    onClick={onClose}
                                    className="p-2 text-neutral-400 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-lg"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        )}

                        {/* Close button (when no title) */}
                        {!title && (
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white transition-colors duration-200 hover:bg-white/10 rounded-lg z-10"
                            >
                                <X size={20} />
                            </button>
                        )}

                        {/* Content */}
                        <div className={cn("p-6", title && "pt-0")}>
                            {children}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
