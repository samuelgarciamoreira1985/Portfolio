import { useState, createContext } from "react";

export const Context_Themes = createContext()

export const Provider_Themes = ({children}) => {

    const [colorTheme,setColorTheme] = useState("clear")
    const SectionID = ["idHome","idSkills","idFormations","idProjects"]

    return (
        <Context_Themes.Provider value={{colorTheme,setColorTheme,SectionID}}>
            {children}
        </Context_Themes.Provider>
    )

} 