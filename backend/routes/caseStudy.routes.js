// backend/routes/caseStudy.routes.js

const express = require('express');
const router = express.Router();
const caseStudyController = require('../controllers/caseStudy.controller');

// Route: GET /api/casestudies
router.get('/', caseStudyController.findAll);

// Route: POST /api/casestudies (Chỉ dùng để thêm dữ liệu tạm thời)
router.post('/', caseStudyController.create);

module.exports = router;