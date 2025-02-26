import React, { useState } from 'react';
import compatibilityCheck from '../utils/compatibilityCheck';

const ThemeUploader = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const isCompatible = compatibilityCheck(selectedFile);
            if (isCompatible) {
                setFile(selectedFile);
                setError('');
            } else {
                setError('The selected file is not compatible. Please upload a valid theme file.');
            }
        }
    };

    const handleUpload = () => {
        if (file) {
            // Logic to handle the file upload
            console.log('Uploading file:', file.name);
        } else {
            setError('Please select a file to upload.');
        }
    };

    return (
        <div className="theme-uploader">
            <h2>Upload Your Theme</h2>
            <input type="file" accept=".zip,.tar,.gz" onChange={handleFileChange} />
            {error && <p className="error">{error}</p>}
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default ThemeUploader;