document.addEventListener('DOMContentLoaded', function() {
    const themeSection = document.getElementById('theme-section');

    // Fetch and add theme content
    fetch('path/to/your/sellauth/theme/file')
        .then(response => response.text())
        .then(data => {
            themeSection.innerHTML = data;
        })
        .catch(error => console.error('Error loading theme:', error));
});
