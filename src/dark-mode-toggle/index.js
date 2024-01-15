import React from 'react';
import DarkModeToggleSwitch from "./DarkModeToogle";

const DarkModeToggle = ({darkMode, handleThemeChange}) => {
    return <DarkModeToggleSwitch darkMode={darkMode} handleThemeChange={handleThemeChange}/>;
};

export default DarkModeToggle;