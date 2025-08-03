import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const Input = forwardRef(
    (
        { className, type = "text", placeholder, label, error, icon, ...props },
        ref
    ) => {
        return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                        {label}
                    </label>
                )}
                <div className="relative">
                    {icon && (
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400">
                            {icon}
                        </div>
                    )}
                    <input
                        type={type}
                        className={cn(
                            "form-input",
                            icon && "pl-10",
                            error &&
                                "border-red-500 focus:border-red-500 focus:ring-red-500/20",
                            className
                        )}
                        placeholder={placeholder}
                        ref={ref}
                        {...props}
                    />
                </div>
                {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
            </div>
        );
    }
);

Input.displayName = "Input";

export default Input;
