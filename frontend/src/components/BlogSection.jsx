// components/BlogSection.jsx
// Component này là một Client Component
// vì nó sử dụng hook useState để chuyển đổi giữa hai tab ("Kiến thức chuyên ngành" và "Tin tức Meta").

"use client"

import React, { useState } from "react"

export function BlogSection() {
    const [activeTab, setActiveTab] = useState("knowledge")

    const blogPosts = [
        {
            id: 1,
            title: "Marketing Online là gì? Chiến lược Marketing Online phổ biến",
            date: "25 Tháng 10, 2025",
            excerpt:
                "Marketing Online là từ khóa có lượng tìm kiếm hót nhất thời đại kỹ thuật 4.0. Có lẽu sẽ và các công thức máy để nguyên nhân tại...",
        },
        {
            id: 2,
            title: "Marketing Online là gì? Chiến lược Marketing Online phổ biến",
            date: "25 Tháng 10, 2025",
            excerpt:
                "Marketing Online là từ khóa có lượng tìm kiếm hót nhất thời đại kỹ thuật 4.0. Có lẽu sẽ và các công thức máy để nguyên nhân tại...",
        },
        {
            id: 3,
            title: "Marketing Online là gì? Chiến lược Marketing Online phổ biến",
            date: "25 Tháng 10, 2025",
            excerpt:
                "Marketing Online là từ khóa có lượng tìm kiếm hót nhất thời đại kỹ thuật 4.0. Có lẽu sẽ và các công thức máy để nguyên nhân tại...",
        },
        {
            id: 4,
            title: "Marketing Online là gì? Chiến lược Marketing Online phổ biến",
            date: "25 Tháng 10, 2025",
            excerpt:
                "Marketing Online là từ khóa có lượng tìm kiếm hót nhất thời đại kỹ thuật 4.0. Có lẽu sẽ và các công thức máy để nguyên nhân tại...",
        },
    ]

    return (
        <section className="py-12 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center gap-4 mb-12">
                    <button
                        onClick={() => setActiveTab("knowledge")}
                        className={`px-6 py-3 rounded-full font-semibold transition-all ${
                            activeTab === "knowledge"
                                ? "bg-blue-600 text-white"
                                : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                        }`}
                    >
                        BIẾN THỨC CHUYÊN NGÀNH
                    </button>
                    <button
                        onClick={() => setActiveTab("news")}
                        className={`px-6 py-3 rounded-full font-semibold transition-all ${
                            activeTab === "news"
                                ? "bg-blue-600 text-white"
                                : "border-2 border-gray-400 text-gray-600 hover:bg-gray-50"
                        }`}
                    >
                        TIN TỨC META
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <img
                            src="/social-media-marketing.jpg"
                            alt="Featured blog post"
                            className="w-full h-48 bg-gray-300 rounded-lg mb-4"
                        />
                        <h3 className="font-bold text-lg mb-3">
                            Social Media Marketing là gì? Làm sao để triển khai Social Media Marketing
                        </h3>
                        <p className="text-sm text-red-600 mb-2">📅 25 tháng 10, 2025</p>
                        <p className="text-sm text-gray-600">
                            Social Media là các mạng xã hội ứng dụng trong các hoạt động của nó. Các nội dung, ứng dụng và các công
                            thức máy để nguyên nhân tại...
                        </p>
                    </div>

                    <div className="md:col-span-2 space-y-4">
                        {blogPosts.map((post) => (
                            <div key={post.id} className="flex gap-4 pb-4 border-b border-gray-200 last:border-b-0">
                                <div className="bg-blue-600 text-white rounded px-3 py-2 h-fit min-w-fit">
                                    <p className="font-bold text-lg">25</p>
                                    <p className="text-xs">{post.date.split(" ").slice(1).join(" ")}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-blue-900 mb-2">{post.title}</h4>
                                    <p className="text-sm text-gray-600">{post.excerpt}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}