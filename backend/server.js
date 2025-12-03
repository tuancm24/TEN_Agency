// backend/server.js

// 1. Import thư viện và load biến môi trường từ file .env
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize, connectDB } = require('./config/db.config'); // Import hàm kết nối và đối tượng sequelize
const caseStudyRoutes = require('./routes/caseStudy.routes'); // Import Route Case Study

// 2. Khởi tạo ứng dụng Express
const app = express();
const PORT = process.env.PORT || 3000;

// 3. Thiết lập Middlewares
// Cho phép Express đọc dữ liệu JSON từ request body
app.use(express.json());
// Thiết lập CORS (Cho phép Frontend React gọi API)
app.use(cors({
    origin: process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000' // Chỉ cho phép local React gọi trong môi trường dev
        : process.env.FRONTEND_URL // Địa chỉ Frontend khi deploy
}));

// 4. Định nghĩa Route cho API
// Tất cả API liên quan đến Case Study sẽ bắt đầu bằng /api/casestudies
app.use('/api/casestudies', caseStudyRoutes);

// Route gốc (Thử nghiệm)
app.get('/', (req, res) => {
    res.send('API Backend Node.js đã chạy thành công!');
});

// 5. Khởi chạy Server và Đồng bộ Database
app.listen(PORT, async () => {
    console.log(`Server đang chạy ở chế độ ${process.env.NODE_ENV}`);
    console.log(`Mở API: http://localhost:${PORT}`);

    // Kết nối Database
    await connectDB();

    // Đồng bộ Database (Tạo bảng nếu chưa có)
    // Lưu ý: Nếu muốn xóa bảng cũ và tạo lại, dùng { force: true } (CHỈ DÙNG TRONG DEV!)
    try {
        await sequelize.sync({ force: false });
        console.log("✅ Database sync complete: Tables created/updated.");
    } catch (error) {
        console.error("❌ Database sync failed:", error.message);
    }
});