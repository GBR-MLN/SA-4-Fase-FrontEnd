import React, { useState } from 'react';
import "./index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon,faSun } from '@fortawesome/free-solid-svg-icons'

function DarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isRotated, setIsRotated] = useState(false);

    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark');
    };

    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light');
    };

    const toggleTheme = () => {
        if (isDarkMode) {
            setLightMode();
        } else {
            setDarkMode();
        }
        setIsDarkMode(!isDarkMode);
        setIsRotated(true);
        setTimeout(() => setIsRotated(false), 70);
    };

    return (
        <div className="dark-mode">
            <button onClick={toggleTheme} className="dark-mode-button">
                <FontAwesomeIcon className={`icons-sun-moon ${isRotated ? 'rotate' : ''}`} icon={isDarkMode ? faSun : faMoon} />
            </button>
        </div>
    );
}

export default DarkMode;
