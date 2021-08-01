import React from 'react'
import './style.css';

function TypingTestApp() {
    return (
        <div className="typing-test-app">
            <div className="header">
                <p className="header-text">Typing speed test</p>
            </div>
            <div className="body">
                <div className="body-infobar"></div>
                <div className="body-textarea"></div>
                <div className="body-typingarea"></div>
            </div>
        </div>
    )
}

export default TypingTestApp
