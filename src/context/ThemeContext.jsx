import { useEffect, useState ,createContext} from "react";
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) =>{
    const storedTheme = localStorage.getItem("theme") || "light";
    const [theme , setTheme] = useState(storedTheme)

    useEffect(()=>{
        document.body.className = theme;
        localStorage.setItem("theme" , theme)
    },[theme])

    const toggleTheme = () =>{
        setTheme(prev => prev === "light" ? "dark" : "light")
    };

    return(
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
    );
}
