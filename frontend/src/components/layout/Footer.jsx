// components/layout/Footer.jsx
import React from 'react';

export function Footer() {
    return (
        <footer className="bg-blue-950 text-gray-300 py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-8 pb-8 border-b border-blue-800">
                    {/* Column 1: Logo & Description */}
                    <div>
                        <div className="text-xl font-bold text-white flex items-center gap-2 mb-4">
                            <div className="w-6 h-6 bg-blue-400 rounded flex items-center justify-center">
                                <span className="text-blue-950 text-sm font-bold">T</span>
                            </div>
                            T-EN Agency
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            T-EN Agency là một đơn vị chuyên cung cấp các giải pháp Digital Marketing toàn diện và tư vấn vận hành
                            hành cho doanh nghiệp.
                        </p>
                    </div>

                    {/* Column 2: Contact Info & Connection */}
                    <div>
                        <h3 className="text-yellow-400 font-bold text-lg mb-4">Thông Tin Liên Hệ</h3>
                        <div className="space-y-3 text-sm">
                            <p>Địa chỉ: Tầng 5, 28 Huỳnh Thúc Kháng, Phương Hải Châu, Thành Phố Đà Nẵng</p>
                            <p>Điện Thoại: 0866 393 797</p>
                            <p>Email:</p>
                            <p>Giờ làm việc: Thứ 2 - Thứ 7 (08:00 - 20:00)</p>
                        </div>
                        <h3 className="text-yellow-400 font-bold text-lg mt-6 mb-3">Kết Nối Với Chúng Tôi</h3>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                {/* Facebook Icon */}
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                {/* Twitter Icon */}
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 002.856-3.51 9.86 9.86 0 01-2.833.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                {/* Youtube Icon */}
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 3: Services */}
                    <div>
                        <h3 className="text-yellow-400 font-bold text-lg mb-4">Dịch Vụ Của Chúng Tôi</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Facebook Marketing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Website Marketing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Content Marketing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Quảng Cáo Facebook, TikTok, Google
                                </a>
                            </li>
                        </ul>
                        <h3 className="text-yellow-400 font-bold text-lg mt-6 mb-2">Google Maps</h3>
                        <p className="text-sm text-gray-400">Văn Phòng Đại Diện</p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-sm text-gray-500">
                    <p>Copyright © 2025 T-EN Agency. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}