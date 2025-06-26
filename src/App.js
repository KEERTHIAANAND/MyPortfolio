import styled, {ThemeProvider} from "styled-components";
import {darkTheme} from "./data/utils/Themes.js";
import Navbar from "./components/Navbar";
import {BrowserRouter} from "react-router-dom";
function App(){
    return (
        <ThemeProvider theme={darkTheme}>
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
            
        </ThemeProvider>
    );
}

export default App;