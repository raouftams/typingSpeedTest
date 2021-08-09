import React from 'react'
import './style.css';


const selectText = () =>{
    let textarea = document.getElementById('textcontent');
    textarea.append("this is some text")
}


function TypingTestApp() {
    const [counter, setCounter] = React.useState(60);
    const [cpm, setCpm] = React.useState(0);
    const [wpm, setWpm] = React.useState(0);

    React.useEffect(() => {
        const timer =
          counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
      }, [counter]);

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
                            <li className="body-infobar-item">{counter} sec</li>
                            <li className="body-infobar-item">{cpm}</li>
                            <li className="body-infobar-item">{wpm}</li>
                        </ul>
                    </div>
                </div>
                <div className="body-textarea">
                    <textarea name="textcontent" id="textcontent" cols="100" rows="13" readOnly></textarea>
                </div>
                <div className="body-typingarea">
                    <input type="text" />
                </div>
            </div>
        </div>
    )
}

export default TypingTestApp;
