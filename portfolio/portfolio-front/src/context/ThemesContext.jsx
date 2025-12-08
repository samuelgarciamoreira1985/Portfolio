import { useState, createContext } from "react";

export const Context_Themes = createContext()

export const Provider_Themes = ({children}) => {

    const [colorTheme,setColorTheme] = useState("clear")

    return (
        <Context_Themes.Provider value={{colorTheme,setColorTheme}}>
            {children}
        </Context_Themes.Provider>
    )

} 