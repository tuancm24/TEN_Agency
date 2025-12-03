// components/AboutSection.jsx
// Đây là phần giới thiệu về T-EN Agency. Component này sử dụng Component Button mà chúng ta đã tạo.
import React from 'react';
// Import Component Button đã tạo
import { Button } from "./ui/Button"; // Đường dẫn tương đối từ components/ đến components/ui/Button.jsx

export function AboutSection() {
    return (
        <section className="py-16 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-xs font-bold text-gray-500 mb-4 tracking-widest">ABOUT US</p>
                        <h2 className="text-4xl font-bold text-blue-600 mb-6">
                            T-EN Agency – Giải Pháp Digital Marketing Toàn Diện Cho Doanh Nghiệp
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Với hơn 10 năm kinh nghiệm trong lĩnh vực Digital Marketing, T-EN Agency tự hào là đơn vị hàng đầu cung
                            cấp các giải pháp marketing toàn diện cho doanh nghiệp. Chúng tôi cam kết mang lại hiệu quả tối ưu thông
                            qua các chiến lược độc quyền và tiếp cận dữ liệu khoa học.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn trong mọi giai đoạn phát triển kinh doanh, từ xây
                            dựng thương hiệu đến tăng trưởng doanh số bán hàng.
                        </p>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">Tìm hiểu thêm</Button>
                    </div>

                    <div className="flex justify-center">
                        <div className="w-full max-w-sm bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-6 text-white shadow-2xl">
                            <p className="text-xs font-semibold text-blue-200 mb-2">PROFESSIONAL PLATFORM</p>
                            <h3 className="text-2xl font-bold mb-4">PROFESSIONAL PLATFORM ENGAGE GET OUT OF YOUR FEAR SURPRISE</h3>
                            <img src="/professional-marketing-platform.jpg" alt="Platform showcase" className="w-full rounded-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}