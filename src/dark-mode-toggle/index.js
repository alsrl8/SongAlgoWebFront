import React from 'react';
import _DarkModeToggle from "./DarkModeToogle";

const DarkModeToggle = ({darkMode, handleThemeChange}) => {
    return <_DarkModeToggle darkMode={darkMode} handleThemeChange={handleThemeChange}/>;
};

export default DarkModeToggle;