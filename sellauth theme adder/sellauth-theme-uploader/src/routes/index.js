const express = require('express');
const router = express.Router();
const ThemeController = require('../controllers/themeController');

const themeController = new ThemeController();

router.get('/', (req, res) => {
    res.render('upload');
});

router.post('/upload', themeController.uploadTheme.bind(themeController));

module.exports = router;