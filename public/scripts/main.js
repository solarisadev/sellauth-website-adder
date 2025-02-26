document.addEventListener('DOMContentLoaded', function() {
    const uploadForm = document.getElementById('uploadForm');
    const apiTokenInput = document.getElementById('apiToken');
    const themeFileInput = document.getElementById('themeFile');
    const messageBox = document.getElementById('messageBox');

    uploadForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const apiToken = apiTokenInput.value;
        const themeFile = themeFileInput.files[0];

        if (!apiToken || !themeFile) {
            messageBox.textContent = 'Please enter your API token and select a theme file.';
            return;
        }

        const allowedExtensions = ['.zip', '.tar', '.rar']; // Example allowed file types
        const fileExtension = themeFile.name.split('.').pop();

        if (!allowedExtensions.includes(`.${fileExtension}`)) {
            messageBox.textContent = 'Invalid file type. Please upload a valid theme file.';
            return;
        }

        const formData = new FormData();
        formData.append('apiToken', apiToken);
        formData.append('themeFile', themeFile);

        fetch('/api/upload-theme', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                messageBox.textContent = 'Theme uploaded successfully!';
            } else {
                messageBox.textContent = `Error: ${data.message}`;
            }
        })
        .catch(error => {
            messageBox.textContent = 'An error occurred while uploading the theme.';
            console.error('Upload error:', error);
        });
    });
});