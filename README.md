# Theme Uploader Website

This project is a web application that allows users to upload themes to SellAuth. Users can enter their API token and upload theme files that are directly supported by SellAuth. The application features a user-friendly interface and ensures that only valid theme files are accepted.

## Features

- User authentication via API token
- Theme file upload functionality
- Validation of uploaded files to ensure compatibility with SellAuth
- Clean and modern user interface

## Project Structure

```
theme-uploader-website
├── public
│   ├── index.html          # Main HTML document
│   ├── styles              # Contains CSS files
│   │   └── main.css        # Main stylesheet
│   └── scripts             # Contains JavaScript files
│       └── main.js         # Main JavaScript file
├── src
│   ├── app.js              # Entry point of the application
│   ├── routes              # Contains route definitions
│   │   └── index.js        # Main route file
│   ├── controllers         # Contains controller logic
│   │   └── themeController.js # Handles theme upload logic
│   └── views               # Contains view templates
│       └── upload.ejs      # Upload page template
├── package.json            # NPM configuration file
├── .gitignore              # Specifies files to ignore in Git
└── README.md               # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd theme-uploader-website
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the application:
   ```
   npm start
   ```

2. Open your web browser and go to `http://localhost:3000` to access the application.

3. Enter your SellAuth API token and upload your theme files.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.