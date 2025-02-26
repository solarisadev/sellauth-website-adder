document.getElementById('theme-upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const apiToken = document.getElementById('api-token').value;
    const themeFile = document.getElementById('theme-file').files[0];
    
    if (!apiToken || !themeFile) {
        alert('Please provide both API token and theme file.');
        return;
    }
    
    const formData = new FormData();
    formData.append('api-token', apiToken);
    formData.append('theme-file', themeFile);
    
    fetch('/upload-theme', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Theme uploaded successfully!');
        } else {
            alert('Failed to upload theme: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while uploading the theme.');
    });
});
