'use client'

import ThemeProvider from "./ThemeProvider";

/* common provider */
const Providers = ({children}) => {
    return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;