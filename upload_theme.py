import os
from flask import Flask, request, render_template_string, redirect, url_for
import requests

app = Flask(__name__)
UPLOAD_FOLDER = 'theme-files'
ALLOWED_EXTENSIONS = {'html', 'css', 'js'}

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/', methods=['GET', 'POST'])
def upload_theme():
    if request.method == 'POST':
        token = request.form['api-token']
        if 'theme-files' not in request.files:
            return 'No files part'
        files = request.files.getlist('theme-files')
        
        headers = {
            'Authorization': f'Bearer {token}',
            'Content-Type': 'application/json'
        }
        
        for file in files:
            if file and allowed_file(file.filename):
                file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
                file.save(file_path)
                
                with open(file_path, 'rb') as f:
                    response = requests.post(
                        'https://api.sellauth.com/themes/upload',  # Replace with the actual SellAuth API endpoint
                        headers=headers,
                        files={'file': f}
                    )
                    if response.status_code == 200:
                        print(f'Successfully uploaded {file.filename}')
                    else:
                        print(f'Failed to upload {file.filename}: {response.text}')

        return 'Theme uploaded successfully!'
    
    return '''
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SellAuth Theme Uploader</title>
        <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
            header { background-color: #4CAF50; color: white; text-align: center; padding: 1em 0; }
            main { padding: 2em; }
            form { display: flex; flex-direction: column; gap: 1em; }
            label { font-weight: bold; }
            button { background-color: #4CAF50; color: white; padding: 0.5em; border: none; cursor: pointer; }
        </style>
    </head>
    <body>
        <header>
            <h1>SellAuth Theme Uploader</h1>
        </header>
        <main>
            <form method="POST" enctype="multipart/form-data">
                <label for="api-token">API Token:</label>
                <input type="text" id="api-token" name="api-token" required>
                <label for="theme-files">Theme Files:</label>
                <input type="file" id="theme-files" name="theme-files" multiple required>
                <button type="submit">Upload Theme</button>
            </form>
        </main>
    </body>
    </html>
    '''

if __name__ == '__main__':
    app.run(debug=True)
