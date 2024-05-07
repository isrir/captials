// client/src/App.js

import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [country, setCountry] = useState('');
    const [capital, setCapital] = useState('');

    const handleInputChange = (e) => {
        setCountry(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`/api/capitals/${country}`);
            setCapital(response.data.capital);
        } catch (error) {
            setCapital('Capital not found');
        }
    };

    return (
        <div>
            <h1>Find Capital</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter country name"
                    value={country}
                    onChange={handleInputChange}
                />
                <button type="submit">Find Capital</button>
            </form>
            <p>{capital}</p>
        </div>
    );
}

export default App;
