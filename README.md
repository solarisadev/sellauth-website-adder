# SellAuth Theme Uploader

This project is a web application that allows users to upload themes for SellAuth. Users can enter their API token and upload theme files that are compatible with SellAuth. The uploaded themes will be automatically added to the SellAuth themes section for easy application.

## Features

- User-friendly interface for uploading themes.
- API token input for secure authentication.
- Validation to ensure only allowed theme files are uploaded.
- Automatic integration with SellAuth themes section.

## Project Structure

```
sellauth-theme-uploader
├── public
│   ├── index.html          # Main HTML document
│   ├── styles              # Contains CSS styles
│   │   └── main.css
│   └── scripts             # Contains JavaScript files
│       └── main.js
├── src
│   ├── app.js              # Entry point of the application
│   ├── routes              # Contains route definitions
│   │   └── index.js
│   ├── controllers         # Contains business logic
│   │   └── themeController.js
│   └── views               # Contains view templates
│       └── upload.ejs
├── package.json            # npm configuration file
├── .env                    # Environment variables
├── .gitignore              # Files to ignore in Git
└── README.md               # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/sellauth-theme-uploader.git
   ```

2. Navigate to the project directory:
   ```
   cd sellauth-theme-uploader
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your API token:
   ```
   API_TOKEN=your_api_token_here
   ```

## Usage

1. Start the server:
   ```
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000` to access the application.

3. Use the upload form to select your theme file and enter your API token.

4. Submit the form to upload your theme to SellAuth.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.