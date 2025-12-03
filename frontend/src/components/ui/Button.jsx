// components/ui/Button.jsx
import React from "react"
import clsx from "clsx"

// Component Button đơn giản nhất, nhận các props phổ biến
export function Button({ className, children, ...props }) {
    // Đây là các class mặc định (default styling) của nút
    const defaultClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2"

    return (
        <button
            // clsx(defaultClasses, className) sẽ đảm bảo kết hợp các class mặc định và class bạn truyền vào
            className={clsx(defaultClasses, className)}
            {...props}
        >
            {children}
        </button>
    )
}