// backend/models/CaseStudy.model.js

const { DataTypes } = require('sequelize');
// Cần đảm bảo file db.config.js đã có hàm export { sequelize }
const { sequelize } = require('../config/db.config');

const CaseStudy = sequelize.define('CaseStudy', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    clientName: {
        type: DataTypes.STRING,
    },
    platform: {
        type: DataTypes.STRING, // Ví dụ: Facebook, TikTok
    },
    resultMetrics: {
        type: DataTypes.STRING, // Ví dụ: ROAS 500%
    },
    solution: {
        type: DataTypes.TEXT, // Trường văn bản dài
    },
}, {
    tableName: 'case_studies'
});

module.exports = CaseStudy;