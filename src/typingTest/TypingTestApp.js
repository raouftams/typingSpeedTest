import React from 'react'
import './style.css';

function TypingTestApp() {
    return (
        <div className="typing-test-app">
            <div className="header">
                <p className="header-text">Typing speed test</p>
            </div>
            <div className="body">
                <div className="body-infobar">
                    <div className="body-infobar-labels">
                        <ul>
                            <li className="body-infobar-label">Text</li>
                            <li className="body-infobar-label">Time</li>
                            <li className="body-infobar-label">CPM</li>
                            <li className="body-infobar-label">WPM</li>
                        </ul>
                    </div>
                    <div className="body-infobar-content">
                        <ul>
                            <li className="body-infobar-item">title</li>
                            <li className="body-infobar-item">1:20</li>
                            <li className="body-infobar-item">234</li>
                            <li className="body-infobar-item">51</li>
                        </ul>
                    </div>

                </div>
                <div className="body-textarea">
                    <textarea name="textcontent" id="textcontent" cols="120" rows="15" readOnly></textarea>
                </div>
                <div className="body-typingarea">
                    <input type="text" />
                </div>
            </div>
        </div>
    )
}

export default TypingTestApp