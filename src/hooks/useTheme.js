import ThemeContext from '@/contexts/ThemeContext';
import React, { useContext } from 'react';

const useTheme = () => {
    const theme = useContext(ThemeContext);

    /* check the server or client side */
    const isClient = typeof window !== "undefined";

    /* only work at client side */
    if (!isClient && !theme) return {};

    if(!theme){
        throw new Error(
          "You must wrap your application with ThemeProvider ot use the useTheme"
        );
    }
    return theme;
};

export default useTheme;