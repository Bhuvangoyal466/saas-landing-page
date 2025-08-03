/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Premium color palette - avoiding default Tailwind colors
                primary: {
                    50: "#f0f9ff",
                    100: "#e0f2fe",
                    200: "#bae6fd",
                    300: "#7dd3fc",
                    400: "#38bdf8",
                    500: "#0ea5e9",
                    600: "#0284c7",
                    700: "#0369a1",
                    800: "#075985",
                    900: "#0c4a6e",
                    950: "#082f49",
                },
                secondary: {
                    50: "#fdf4ff",
                    100: "#fae8ff",
                    200: "#f5d0fe",
                    300: "#f0abfc",
                    400: "#e879f9",
                    500: "#d946ef",
                    600: "#c026d3",
                    700: "#a21caf",
                    800: "#86198f",
                    900: "#701a75",
                    950: "#4a044e",
                },
                accent: {
                    50: "#fff7ed",
                    100: "#ffedd5",
                    200: "#fed7aa",
                    300: "#fdba74",
                    400: "#fb923c",
                    500: "#f97316",
                    600: "#ea580c",
                    700: "#c2410c",
                    800: "#9a3412",
                    900: "#7c2d12",
                    950: "#431407",
                },
                success: {
                    50: "#f0fdf4",
                    100: "#dcfce7",
                    200: "#bbf7d0",
                    300: "#86efac",
                    400: "#4ade80",
                    500: "#22c55e",
                    600: "#16a34a",
                    700: "#15803d",
                    800: "#166534",
                    900: "#14532d",
                    950: "#052e16",
                },
                neutral: {
                    50: "#fafafa",
                    100: "#f5f5f5",
                    200: "#e5e5e5",
                    300: "#d4d4d4",
                    400: "#a3a3a3",
                    500: "#737373",
                    600: "#525252",
                    700: "#404040",
                    800: "#262626",
                    900: "#171717",
                    950: "#0a0a0a",
                },
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
                heading: ["Satoshi", "Inter", "system-ui", "sans-serif"],
                mono: ["JetBrains Mono", "Menlo", "Monaco", "monospace"],
            },
            fontSize: {
                xs: ["0.75rem", { lineHeight: "1rem" }],
                sm: ["0.875rem", { lineHeight: "1.25rem" }],
                base: ["1rem", { lineHeight: "1.5rem" }],
                lg: ["1.125rem", { lineHeight: "1.75rem" }],
                xl: ["1.25rem", { lineHeight: "1.75rem" }],
                "2xl": ["1.5rem", { lineHeight: "2rem" }],
                "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
                "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
                "5xl": ["3rem", { lineHeight: "1" }],
                "6xl": ["3.75rem", { lineHeight: "1" }],
                "7xl": ["4.5rem", { lineHeight: "1" }],
                "8xl": ["6rem", { lineHeight: "1" }],
                "9xl": ["8rem", { lineHeight: "1" }],
            },
            spacing: {
                18: "4.5rem",
                88: "22rem",
                128: "32rem",
            },
            borderRadius: {
                "4xl": "2rem",
                "5xl": "2.5rem",
            },
            boxShadow: {
                "inner-lg":
                    "inset 0 10px 15px -3px rgba(0, 0, 0, 0.1), inset 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                glow: "0 0 20px rgba(59, 130, 246, 0.5)",
                "glow-lg": "0 0 40px rgba(59, 130, 246, 0.6)",
                glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "glass-gradient":
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
            },
            backdropBlur: {
                xs: "2px",
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-out",
                "fade-in-up": "fadeInUp 0.6s ease-out",
                "fade-in-down": "fadeInDown 0.6s ease-out",
                "slide-in-left": "slideInLeft 0.6s ease-out",
                "slide-in-right": "slideInRight 0.6s ease-out",
                "scale-in": "scaleIn 0.5s ease-out",
                float: "float 6s ease-in-out infinite",
                "pulse-glow":
                    "pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "gradient-x": "gradient-x 15s ease infinite",
                "gradient-y": "gradient-y 15s ease infinite",
                "gradient-xy": "gradient-xy 15s ease infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                fadeInUp: {
                    "0%": { opacity: "0", transform: "translateY(30px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                fadeInDown: {
                    "0%": { opacity: "0", transform: "translateY(-30px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                slideInLeft: {
                    "0%": { opacity: "0", transform: "translateX(-30px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                slideInRight: {
                    "0%": { opacity: "0", transform: "translateX(30px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                scaleIn: {
                    "0%": { opacity: "0", transform: "scale(0.9)" },
                    "100%": { opacity: "1", transform: "scale(1)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                pulseGlow: {
                    "0%, 100%": {
                        boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
                    },
                    "50%": { boxShadow: "0 0 40px rgba(59, 130, 246, 0.8)" },
                },
                "gradient-x": {
                    "0%, 100%": {
                        "background-size": "200% 200%",
                        "background-position": "left center",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "right center",
                    },
                },
                "gradient-y": {
                    "0%, 100%": {
                        "background-size": "200% 200%",
                        "background-position": "center top",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "center bottom",
                    },
                },
                "gradient-xy": {
                    "0%, 100%": {
                        "background-size": "400% 400%",
                        "background-position": "left center",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "right center",
                    },
                },
            },
        },
    },
    plugins: [],
};
