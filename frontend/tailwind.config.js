// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // KHAI BÁO CÁC FILE REACT SẼ DÙNG TAILWIND CSS
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Giữ nguyên
    "./public/index.html", // Giữ nguyên
  ],
  theme: {
    // THÊM CẤU HÌNH THEME ĐỂ ĐỊNH NGHĨA BIẾN MÀU CƠ BẢN (border, primary, etc.)
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      // Thêm cấu hình radius để hỗ trợ các component như Button
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
};