class ThemeController {
    async uploadTheme(req, res) {
        const apiToken = req.body.apiToken;
        const themeFile = req.file;

        if (!apiToken || !themeFile) {
            return res.status(400).json({ message: 'API token and theme file are required.' });
        }

        const allowedFileTypes = ['.zip', '.tar', '.rar']; // Adjust based on SellAuth allowed file types
        const fileExtension = path.extname(themeFile.originalname);

        if (!allowedFileTypes.includes(fileExtension)) {
            return res.status(400).json({ message: 'Invalid file type. Only .zip, .tar, and .rar files are allowed.' });
        }

        try {
            // Logic to upload the theme to SellAuth API
            const response = await axios.post('https://sellauth.com/api/upload', {
                apiToken: apiToken,
                themeFile: themeFile.buffer // Assuming the file is uploaded as a buffer
            });

            return res.status(200).json({ message: 'Theme uploaded successfully!', data: response.data });
        } catch (error) {
            return res.status(500).json({ message: 'Error uploading theme.', error: error.message });
        }
    }
}

export default new ThemeController();