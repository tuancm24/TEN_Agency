// backend/controllers/caseStudy.controller.js

const CaseStudy = require('../models/CaseStudy.model');

// Hàm 1: Lấy tất cả Case Study
exports.findAll = async (req, res) => {
    try {
        // Sử dụng Sequelize để tìm tất cả dữ liệu
        const caseStudies = await CaseStudy.findAll({
            order: [['publishedDate', 'DESC']] // Sắp xếp theo ngày mới nhất
        });

        // Trả về dữ liệu dưới dạng JSON
        res.status(200).json(caseStudies);
    } catch (error) {
        console.error("Lỗi khi lấy Case Studies:", error);
        res.status(500).json({
            message: "Không thể lấy dữ liệu Case Studies.",
            error: error.message
        });
    }
};

// Hàm 2: Thêm một Case Study mới (Ví dụ để thêm dữ liệu ban đầu)
exports.create = async (req, res) => {
    // Dữ liệu Case Study được gửi từ Frontend qua req.body
    try {
        const newCaseStudy = await CaseStudy.create(req.body);
        res.status(201).json(newCaseStudy);
    } catch (error) {
        res.status(400).json({ message: "Lỗi tạo Case Study.", error: error.message });
    }
};