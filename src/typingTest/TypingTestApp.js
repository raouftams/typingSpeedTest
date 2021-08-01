import React from 'react'
import './style.css';

function TypingTestApp() {
    return (
        <div className="typing-test-app">
            <div className="header">
                <p className="header-text">Typing speed test</p>
                <div className="logo"> 
                  <div id="logo-clavier"> 
                    <div id="clavier-v1"></div>
                    <div id="clavier-t1"></div>
                    <div id="clavier-t2"></div>
                    <div id="clavier-t3"></div>
                    <div id="clavier-t4"></div>
                    <div id="clavier-t5"></div>
                    <div id="clavier-t6"></div>
                    <div id="clavier-t7"></div>
                    <div id="clavier-t8"></div>
                    <div id="clavier-t9"></div>
                    <div id="clavier-t10"></div>
                    <div id="clavier-t11"></div>
                    <div id="clavier-t12"></div>
                    <div id="clavier-t13"></div>
                    <div id="clavier-t14"></div>
                    <div id="clavier-t15"></div>
                    <div id="clavier-t16"></div>
                    <div id="clavier-t17"></div>
                    <div id="clavier-t18"></div>
                    <div id="clavier-t19"></div>
                    <div id="clavier-t20"></div>
                    <div id="clavier-t21"></div>
                    <div id="text"><p>words/min</p></div>
                    </div>
                    </div>
            </div>
            <div className="body">
                <div className="body-infobar">
                <p className="level">Difficulty</p>
                <p className="text">Text</p>
                <p className="time">Time</p>
                <p className="speed">Speeed</p>
                <p className="high">High Score</p>
                </div>
                <div className="body-infobarcontent"></div>
                <div className="body-infobarfin"></div>
                <div className="body-textarea"></div>
                <div className="body-typingarea"></div>
            </div>
        </div>
    )
}

export default TypingTestApp