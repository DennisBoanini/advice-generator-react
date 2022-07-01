import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

    const [advice, setAdvice] = useState(null);

    useEffect(() => {
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(data => setAdvice(data.slip.advice));
    }, [])

    const getAdvice = () => {
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(data => setAdvice(data.slip.advice));
    }

    return (
        <div className="App">
            <section className="advice-container">
                <p className="advice-number">advice #<span id="advice-id"></span></p>
                <p className="advice-text" id="advice-text">
                    {advice}
                </p>
                <div className="separator"></div>
                <button className="advice-generator" id="advice-generator-btn" onClick={getAdvice} />
            </section>
        </div>
    );
}

export default App;
