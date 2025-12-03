// components/HeroCarousel.jsx
// Đây là phần banner lớn nhất, có tính năng trượt tự động.
// Nó cần sử dụng useState và useEffect, nên chúng ta giữ lại 'use client'.
"use client" // Giữ lại vì nó sử dụng hooks (useState, useEffect)

import { useState, useEffect } from "react"
// Nếu bạn chưa có thư viện lucide-react, bạn cần cài đặt:
// npm install lucide-react
import { ChevronRight, ChevronLeft } from "lucide-react"

export function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const heroImages = [
        "/digital-marketing-agency-hero-1.jpg",
        "/digital-marketing-agency-hero-2.jpg",
        "/digital-marketing-agency-hero-3.jpg",
        "/digital-marketing-agency-hero-4.jpg",
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [heroImages.length])

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)

    return (
        <section className="relative bg-gray-300 h-96 overflow-hidden">
            <div className="relative w-full h-full">
                {heroImages.map((image, index) => (
                    <img
                        key={index}
                        src={image || "/placeholder.svg"}
                        alt={`Slide ${index + 1}`}
                        className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                            index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                    />
                ))}
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-700 rounded-full p-2 transition-colors z-10"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-700 rounded-full p-2 transition-colors z-10"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
                    />
                ))}
            </div>

            <div className="absolute bottom-8 right-4 flex flex-col gap-2 z-10">
                <button className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-white hover:bg-pink-600 transition-colors shadow-lg hover:shadow-xl transform hover:scale-110">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    </svg>
                </button>
                <button className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl transform hover:scale-110">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    </svg>
                </button>
            </div>
        </section>
    )
}