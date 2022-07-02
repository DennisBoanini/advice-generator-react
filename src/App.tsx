import React, { useEffect, useState } from 'react';
import './App.css';

interface AdviceResponse {
    slip: {id: number; advice: string; };
}

function App() {

    const [advice, setAdvice] = useState('');
    const [adviceNumber, setAdviceNumber] = useState(0);

    useEffect(() => doGetAdvice(), []);
    const getAdvice = () => doGetAdvice();

    function doGetAdvice() {
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then((data: AdviceResponse) => {
                setAdvice(data.slip.advice);
                setAdviceNumber(data.slip.id);
            });
    }

    return (
        <div className="App">
            <section className="advice-container">
                <p className="advice-number">advice #{adviceNumber}</p>
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
