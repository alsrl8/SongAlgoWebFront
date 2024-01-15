import React from 'react';
import {Switch} from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const DarkModeToggleImpl = ({darkMode, handleThemeChange}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2px'}}>
            {darkMode ? <DarkModeIcon style={{fontSize: '2rem'}}/> : <LightModeIcon style={{fontSize: '2rem'}}/>}
            <Switch checked={darkMode} onChange={handleThemeChange}/>
        </div>
    );
};

export default DarkModeToggleImpl;