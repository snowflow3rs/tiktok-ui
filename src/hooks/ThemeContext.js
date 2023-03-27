import { useState, createContext, useEffect } from 'react';
export const ThemeContext = createContext();
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

// export default { ThemeContext, ThemeProvider };
