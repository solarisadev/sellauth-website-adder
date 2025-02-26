const fs = require('fs');
const path = require('path');

exports.uploadTheme = (req, res) => {
    const apiToken = req.body['api-token'];
    const themeFile = req.file;

    if (!apiToken || !themeFile) {
        return res.status(400).json({ success: false, message: 'API token and theme file are required.' });
    }

    // Validate the theme file and API token here
    // For now, we'll just simulate a successful upload

    // Move the uploaded file to the desired location
    const targetPath = path.join(__dirname, '../../themes', themeFile.originalname);
    fs.rename(themeFile.path, targetPath, (err) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Failed to upload theme.' });
        }

        res.json({ success: true, message: 'Theme uploaded successfully!' });
    });
};