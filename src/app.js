const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const themeController = require('./controllers/themeController');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

const upload = multer({ dest: 'uploads/' });

app.post('/upload-theme', upload.single('theme-file'), themeController.uploadTheme);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});