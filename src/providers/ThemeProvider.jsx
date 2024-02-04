import ThemeContext from '@/contexts/ThemeContext';
import React, { Children, useEffect, useState } from 'react';

const ThemeProvider = ({children}) => {
    const [theme,setTheme]=useState("dark");

    /* store theme mode data to local storage based on the device theme */
    useEffect(()=>{
        let storedTheme = localStorage.getItem("theme");
        if(!storedTheme || !(storedTheme === "dark" || storedTheme === "light")){
            storedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        }
        setTheme(storedTheme);
    },[]);

    /* update the html when the theme changed */
    useEffect(()=>{
        document.querySelector("html").setAttribute("data-theme",theme);
    },[theme]);

    /* monitor the device theme changes */
    useEffect(()=>{
        const onChange=e=>{
            const colorScheme =e.matches ? "dark" : "light";
            setTheme(colorScheme);
        };

        window.matchMedia("(prefers-color-scheme:dark)").addEventListener("change",onchange);

        return ()=>{
            window
              .matchMedia("(prefers-color-scheme:dark)")
              .removeEventListener("change", onchange);
        }
    },[]);

    /* toggle the theme */
    const toggleTheme = ()=>{
        setTheme(preTheme=>{
            const currentTheme = preTheme === "dark" ? "light" : "dark";
            localStorage.setItem("theme",currentTheme);
            return currentTheme
        });
    }

    return <ThemeContext.Provider value={{theme,toggleTheme}}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;