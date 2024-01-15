import './App.css';
import Chatter from "./chatter";
import React, {useMemo, useState} from "react";
import {Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import DarkModeToggle from "./dark-mode-toggle";
import './fonts.css'

function App() {
    const [darkMode, setDarkMode] = useState(true);

    const theme = useMemo(
        () => createTheme(({
            palette: {
                mode: darkMode ? 'dark' : 'light',
            },
            typography: {
                fontFamily: 'omyu',
                fontSize: 20,
            }
        })),
        [darkMode]
    )

    const handleThemeChange = () => {
        setDarkMode(!darkMode);
    }

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Container>
                    <div style={{position: 'absolute', top: 10, right: 10}}>
                        <DarkModeToggle darkMode={darkMode} handleThemeChange={handleThemeChange}/>
                    </div>
                    <Chatter/>
                </Container>
            </ThemeProvider>
        </div>
    );
}

export default App;
