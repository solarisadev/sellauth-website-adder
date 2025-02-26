import React from 'react';
import ThemeUploader from './ThemeUploader';
import ApiTokenInput from './ApiTokenInput';
import './App.css';

const App = () => {
    return (
        <div className="app-container">
            <h1>Sellauth Theme Uploader</h1>
            <ApiTokenInput />
            <ThemeUploader />
        </div>
    );
};

export default App;