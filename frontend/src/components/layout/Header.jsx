// components/layout/Header.jsx
import React from 'react';
// 1. Thêm import Component Button đã tạo ở components/ui/Button.jsx
import { Button } from "../ui/Button"; // Tùy chỉnh đường dẫn này nếu cấu trúc thư mục của bạn khác

export function Header() {
    return (
        <header className="sticky top-0 z-50 bg-blue-700">
            <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-12">

                        {/* START - Thay thế logo tượng trưng bằng logo thật */}
                        <div className="text-xl font-bold text-white flex items-center gap-2">
                            <img
                                src="/logo/Logo_TEN_Agency_WEB.png" // ĐƯỜNG DẪN TỚI LOGO THẬT
                                alt="T-EN Agency Logo"
                                className="h-8 w-auto" // Điều chỉnh kích thước tùy ý
                            />
                            {/* Nếu bạn muốn giữ lại chữ T-EN Agency bên cạnh logo: */}
                            {/* <span className="ml-2">T-EN Agency</span> */}
                        </div>
                        {/* END - Thay thế logo tượng trưng bằng logo thật */}

                        <nav className="hidden gap-8 md:flex">
                            <a href="#" className="text-sm text-white hover:text-gray-200">
                                Trang Chủ
                            </a>
                            <a href="#" className="text-sm text-white hover:text-gray-200">
                                Giải Pháp
                            </a>
                            <a href="#" className="text-sm text-white hover:text-gray-200">
                                Dịch Vụ
                            </a>
                            <a href="#" className="text-sm text-white hover:text-gray-200">
                                Hỗ Trợ
                            </a>
                        </nav>
                    </div>
                    {/* 2. Thay thế thẻ <button> thường bằng Component Button */}
                    <Button className="bg-white text-blue-700 hover:bg-gray-100 font-semibold">Đăng nhập</Button>
                </div>
            </div>
        </header>
    )
}