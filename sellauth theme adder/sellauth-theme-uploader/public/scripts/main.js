document.addEventListener('DOMContentLoaded', function() {
    const uploadForm = document.getElementById('uploadForm');
    const apiTokenInput = document.getElementById('apiToken');
    const themeFileInput = document.getElementById('themeFile');
    const messageContainer = document.getElementById('messageContainer');

    uploadForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const apiToken = apiTokenInput.value;
        const themeFile = themeFileInput.files[0];

        if (!apiToken || !themeFile) {
            displayMessage('Please enter your API token and select a theme file.', 'error');
            return;
        }

        const allowedFileTypes = ['application/zip', 'application/x-zip-compressed']; // Adjust based on SellAuth allowed types
        if (!allowedFileTypes.includes(themeFile.type)) {
            displayMessage('Invalid file type. Please upload a valid theme file.', 'error');
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
                displayMessage('Theme uploaded successfully!', 'success');
            } else {
                displayMessage('Error: ' + data.message, 'error');
            }
        })
        .catch(error => {
            displayMessage('An error occurred: ' + error.message, 'error');
        });
    });

    function displayMessage(message, type) {
        messageContainer.textContent = message;
        messageContainer.className = type === 'error' ? 'error-message' : 'success-message';
    }
});