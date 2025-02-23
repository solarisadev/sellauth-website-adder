class ThemeController {
    constructor(apiToken) {
        this.apiToken = apiToken;
    }

    async uploadTheme(req, res) {
        const themeFile = req.file; // Assuming you're using multer for file uploads

        if (!themeFile) {
            return res.status(400).json({ message: 'No file uploaded.' });
        }

        // Validate the file type and size according to SellAuth requirements
        const allowedTypes = ['application/zip', 'application/x-zip-compressed']; // Example allowed types
        if (!allowedTypes.includes(themeFile.mimetype)) {
            return res.status(400).json({ message: 'Invalid file type. Only ZIP files are allowed.' });
        }

        try {
            const response = await this.sendToSellAuth(themeFile);
            return res.status(200).json({ message: 'Theme uploaded successfully.', data: response });
        } catch (error) {
            return res.status(500).json({ message: 'Error uploading theme.', error: error.message });
        }
    }

    async sendToSellAuth(themeFile) {
        // Logic to send the theme file to SellAuth API
        // This will include setting up the request with the API token and handling the response

        // Example placeholder for API request
        const formData = new FormData();
        formData.append('theme', themeFile.buffer, themeFile.originalname);

        const response = await fetch('https://sellauth.com/api/upload', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.apiToken}`,
            },
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Failed to upload theme to SellAuth');
        }

        return await response.json();
    }
}

export default ThemeController;