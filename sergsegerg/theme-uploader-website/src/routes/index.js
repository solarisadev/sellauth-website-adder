const express = require('express');
const router = express.Router();
const ThemeController = require('../controllers/themeController');

const themeController = new ThemeController();

router.post('/upload', themeController.uploadTheme);

module.exports = router;