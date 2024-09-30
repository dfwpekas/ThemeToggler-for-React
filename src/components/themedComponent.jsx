import { useContext } from "react";
import ThemeContext from "./themeContextComponent";

 
const ThemedComponent = () => {
    // using the useContext to hook the current theme 
    const {theme, setTheme} = useContext(ThemeContext);

    // a function for switching the theme
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const costumeStyle = {
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color : theme === 'light' ? 'black' : 'white',
        padding: '20px',
        margin: '20px',
        textAlign: 'center',
        width: '100vw',
        height: '100vh'
    }
    const buttonStyle = {
        padding: '10px',
        backgroundColor: theme === 'light' ? 'black' : 'white',
        color : theme === 'light' ? 'white' : 'black',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1.2rem',
        marginTop: '10px'
    }

    return (
        <div style={costumeStyle}>
            <p>Current Theme is {theme}.</p>

            <button style={buttonStyle} onClick={toggleTheme}>Toggle Theme to See 💥</button>
        </div>
    )
}

export default ThemedComponent;