import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Loại bỏ các khai báo kiểu dữ liệu (ClassValue)
export function cn(...inputs) {
    // Hàm này hợp nhất và giải quyết xung đột các lớp CSS Tailwind
    return twMerge(clsx(inputs));
}