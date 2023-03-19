/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')


module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: colors.gray[700],
                    hover: colors.gray[900],
                    focus: colors.gray[600],
                    active: colors.gray[500],
                    disabled: "#C7D9F5",
                    dark: "#28262C",
                    light: "#ABA8B3",
                },
                secondary: {
                    DEFAULT: "#333138",
                    hover: "#28262C",
                    focus: "#817C8D",
                    disabled: "#D5D3D9",
                },
                info: {
                    content: "#0369a1",
                    icon: "#0ea5e9",
                    bg: "#f0f9ff",
                },
                success: {
                    content: "#15803d",
                    icon: "#22c55e",
                    bg: "#f0fdf4",
                },
                warning: {
                    content: "#b45309",
                    icon: "#f59e0b",
                    bg: "#fffbeb",
                },
                error: {
                    content: "#b91c1c",
                    icon: "#ef4444",
                    bg: "#fef2f2",
                },
                tint: "#e6f4ea",
                body: "#FBFCFE",
                stroke: "#e5e7eb",
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                playfair:['Playfair'],
                raleway:['Raleway'],
            },
            fontSize: {
                xxs: [
                    "10px",
                ],
            },
            boxShadow: {
                'glow': '0 0 10px 0 rgba(255, 255, 255, 0.5)'
            },
            display: ["group-hover"]
        },
    },
    plugins: [
        // eslint-disable-next-line no-undef
        require('@tailwindcss/line-clamp'),
    ],
}
