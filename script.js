document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('upload-form');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const apiToken = document.getElementById('api-token').value;

        // Fetch and add theme content
        fetch('path/to/your/theme-files', {  // Update with the actual path to your theme files
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${apiToken}`
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                messageDiv.textContent = 'Theme uploaded successfully!';
                messageDiv.style.color = 'green';
            } else {
                messageDiv.textContent = `Failed to upload theme: ${data.message}`;
            }
        })
        .catch(error => {
            messageDiv.textContent = `Error: ${error.message}`;
        });
    });
});
