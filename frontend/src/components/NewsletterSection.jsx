// components/NewsletterSection.jsx
// Đây là phần chứa form Đăng ký/Liên hệ của T-EN Agency.
// Component này là một Client Component vì nó xử lý trạng thái form (useState) và sự kiện gửi form.

"use client"

import React, { useState } from "react"
// Import Component Button đã tạo
import { Button } from "./ui/Button"

export function NewsletterSection() {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        industry: "",
        message: "",
    })

    const handleNewsletterSubmit = (e) => { // Đã loại bỏ type (e: React.FormEvent)
        e.preventDefault()
        console.log("Newsletter form submitted:", formData)
        // Sau khi gửi form, reset form
        setFormData({ fullName: "", phone: "", email: "", industry: "", message: "" })
    }

    const handleChange = (e) => { // Đã loại bỏ type (e: React.ChangeEvent<...>)
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    return (
        <section className="py-16 bg-white">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-[3rem] overflow-hidden border-8 border-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start p-12">
                        <div className="text-white">
                            <h2 className="text-3xl font-bold mb-4">Kết nối ngay với T-EN Agency</h2>
                            <p className="text-blue-100 mb-8">
                                Chúng tôi cam kết hỗ trợ toàn diện để giúp doanh nghiệp của bạn phát triển bền vững và hiệu quả.
                            </p>
                            <Button className="bg-white text-blue-700 hover:bg-gray-100 font-semibold px-8">SDT</Button>
                        </div>

                        <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Họ và tên*"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="bg-white text-gray-900 px-4 py-2 rounded focus:outline-none"
                                    required
                                />
                                <input
                                    type="tel"
                                    placeholder="Số điện thoại*"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="bg-white text-gray-900 px-4 py-2 rounded focus:outline-none"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="email"
                                    placeholder="Email*"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="bg-white text-gray-900 px-4 py-2 rounded focus:outline-none"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Ngành nghề*"
                                    name="industry"
                                    value={formData.industry}
                                    onChange={handleChange}
                                    className="bg-white text-gray-900 px-4 py-2 rounded focus:outline-none"
                                    required
                                />
                            </div>

                            <textarea
                                placeholder="Nội dung bình luận*"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-white text-gray-900 px-4 py-2 rounded focus:outline-none resize-none"
                                rows={3}
                                required
                            />

                            <Button type="submit" className="w-full bg-blue-900 text-white hover:bg-blue-800 font-semibold py-2">
                                Gửi yêu cầu
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}