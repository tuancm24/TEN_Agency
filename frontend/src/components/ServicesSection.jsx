// components/ServicesSection.jsx
// Tiếp theo là phần Dịch vụ nổi bật (ServicesSection) – đây là khu vực hiển thị các sản phẩm/dịch vụ dạng card.
import React from 'react';
// Import Icons
import { Heart, ShoppingCart } from "lucide-react"

export function ServicesSection() {
    const services = [
        {
            id: 1,
            title: "Digital Ads Facebook",
            image: "/facebook-ads.jpg",
            rating: 5,
            reviews: 0,
            students: "798 khách hàng",
            price: 999000,
            originalPrice: 2999000,
        },
        {
            id: 2,
            title: "Phương Pháp Hạn Chế Tập Áo & Clone Kh...",
            image: "/digital-marketing.jpg",
            rating: 5,
            reviews: 0,
            students: "302 học viên",
            price: 199000,
            originalPrice: 399000,
        },
        {
            id: 3,
            title: "[Record] Xây Dựn Tối Nguyên Fanpage & TKQC...",
            image: "/marketing-strategy.jpg",
            rating: 5,
            reviews: 0,
            students: "489 học viên",
            price: 399000,
            originalPrice: null,
        },
    ]

    return (
        <section className="py-12 bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">Dịch vụ nổi bật</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div className="relative">
                                <img
                                    src={service.image || "/placeholder.svg"}
                                    alt={service.title}
                                    className="w-full h-48 bg-gray-300 object-cover"
                                />
                                <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                  NỔI BẬT
                </span>
                            </div>

                            <div className="p-4">
                                <h3 className="font-bold text-gray-900 mb-3">{service.title}</h3>

                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex gap-1">
                                        {/* Hiển thị 5 sao màu vàng */}
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className="text-yellow-400">
                        ★
                      </span>
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-600">({service.reviews})</span>
                                    <span className="text-xs text-gray-500 ml-auto">{service.students}</span>
                                </div>

                                <div className="flex items-center gap-2 mb-4">
                                    <span className="font-bold text-blue-600">{service.price.toLocaleString()} vnđ</span>
                                    {service.originalPrice && (
                                        <span className="text-xs text-gray-500 line-through">
                      {service.originalPrice.toLocaleString()} vnđ
                    </span>
                                    )}
                                </div>

                                <div className="flex gap-2">
                                    <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded py-2 hover:bg-gray-50 transition-colors">
                                        <Heart className="w-4 h-4" />
                                    </button>
                                    <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded py-2 hover:bg-gray-50 transition-colors">
                                        <ShoppingCart className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}