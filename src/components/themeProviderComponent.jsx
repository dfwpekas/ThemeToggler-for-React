import { useState } from "react";
import ThemeContext from "./themeContextComponent";

const ThemeProviderComponent = ({ children }) => {
    // using the useState to store current theme
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProviderComponent;