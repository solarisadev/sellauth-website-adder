import React, { useState } from 'react';

const ApiTokenInput = ({ onTokenChange }) => {
    const [token, setToken] = useState('');

    const handleInputChange = (event) => {
        setToken(event.target.value);
        onTokenChange(event.target.value);
    };

    return (
        <div className="api-token-input">
            <label htmlFor="api-token">API Token:</label>
            <input
                type="text"
                id="api-token"
                value={token}
                onChange={handleInputChange}
                placeholder="Enter your API token"
                required
            />
        </div>
    );
};

export default ApiTokenInput;