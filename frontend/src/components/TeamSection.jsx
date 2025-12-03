// components/TeamSection.jsx
// Đây là phần hiển thị Đội ngũ nhân sự của T-EN Agency. Component này không sử dụng hooks hay icons đặc biệt.
import React from 'react';

export function TeamSection() {
    const teamMembers = [
        {
            id: 1,
            name: "Cao Minh Tuấn",
            title: "Phó Giám Đốc",
        },
        {
            id: 2,
            name: "Cao Minh Tuấn",
            title: "Phó Giám Đốc",
        },
        {
            id: 3,
            name: "Cao Minh Tuấn",
            title: "Phó Giám Đốc",
        },
    ]

    return (
        <section className="py-16 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Đội ngũ <span className="text-blue-600">nhân sự</span>
                </h2>

                <div className="flex justify-center items-center gap-12">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="flex flex-col items-center">
                            {/* Vị trí để thêm ảnh thành viên */}
                            <div className="w-32 h-32 bg-gray-800 rounded-full flex items-center justify-center mb-4 shadow-lg" />
                            <p className="font-semibold text-gray-900 text-center text-sm">{member.name}</p>
                            <p className="text-gray-600 text-xs text-center">{member.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}