import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const AccordionItem = ({ title, children, isOpen, onToggle }) => {
    return (
        <div className="glass-card border border-white/10">
            <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                onClick={onToggle}
            >
                <span className="text-lg font-medium text-white">{title}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown className="w-5 h-5 text-neutral-400" />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-4 text-neutral-300 leading-relaxed border-t border-white/10">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Accordion = ({ items, allowMultiple = false, defaultOpen = [] }) => {
    const [openItems, setOpenItems] = useState(new Set(defaultOpen));

    const toggleItem = (index) => {
        const newOpenItems = new Set(openItems);

        if (allowMultiple) {
            if (newOpenItems.has(index)) {
                newOpenItems.delete(index);
            } else {
                newOpenItems.add(index);
            }
        } else {
            if (newOpenItems.has(index)) {
                newOpenItems.clear();
            } else {
                newOpenItems.clear();
                newOpenItems.add(index);
            }
        }

        setOpenItems(newOpenItems);
    };

    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    isOpen={openItems.has(index)}
                    onToggle={() => toggleItem(index)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
};

export default Accordion;
