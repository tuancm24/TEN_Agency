// components/SolutionsSection.jsx
// Tiếp theo là phần Giải pháp của T-EN Agency
// SolutionsSection – component này có tính năng tương tác (mở/đóng chi tiết) nên nó là một Client Component.
"use client"

import { useState } from "react"
// Import Icon và Button
import { ChevronRight } from "lucide-react"
import { Button } from "./ui/Button" // Đường dẫn tương đối đến Button.jsx

export function SolutionsSection() {
    const [expandedSolution, setExpandedSolution] = useState(null)

    const solutions = [
        {
            id: 1,
            title: "Giải pháp Thương hiệu",
            icon: "🏢",
        },
        {
            id: 2,
            title: "Giải pháp Marketing",
            icon: "📊",
        },
        {
            id: 3,
            title: "Giải pháp Thương mại điện tử",
            icon: "🛒",
        },
    ]

    return (
        <section className="py-12 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold text-blue-600 mb-4">
                            Giải pháp
                            <br />
                            của chúng tôi
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Từ vấn và khám nghiệm thương hiệu, tìm ra giải pháp tổng quát và chiến lược độc quyền giải đoạn nghiệp
                            kinh doanh kinh doanh để chuyên mục thương mại dịch phục...
                        </p>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                            TƯ VẤN GIẢI PHÁP CHO DOANH NGHIỆP
                        </Button>
                    </div>

                    <div className="space-y-3">
                        {solutions.map((solution) => (
                            <div key={solution.id} className="border-b border-gray-200 pb-3">
                                <button
                                    onClick={() => setExpandedSolution(expandedSolution === solution.id ? null : solution.id)}
                                    className="w-full flex items-center justify-between py-3 text-left hover:text-blue-600 transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">{solution.icon}</span>
                                        <span className="font-semibold text-gray-800">{solution.title}</span>
                                    </div>
                                    <ChevronRight
                                        className={`w-5 h-5 transition-transform ${expandedSolution === solution.id ? "rotate-90" : ""}`}
                                    />
                                </button>
                                {expandedSolution === solution.id && (
                                    <div className="pl-12 pb-3 text-sm text-gray-600">
                                        Chi tiết về giải pháp này sẽ được hiển thị ở đây...
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}