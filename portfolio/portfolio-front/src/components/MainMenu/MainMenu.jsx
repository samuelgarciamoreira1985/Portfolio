// REACT
import { useState, useContext } from "react";
// CONTEXT
import { Context_Themes } from '../../context/ThemesContext'
// CSS
import "./MainMenu.css"
// ÍCONES
import { HiHome } from "react-icons/hi2";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { FaGraduationCap,FaDiagramProject,FaMoon,FaSun  } from "react-icons/fa6";

const MainMenu = () => {

  const { colorTheme,setColorTheme } = useContext(Context_Themes)

  const [icon_Theme,setIcon_Theme] = useState(<FaMoon className="icon-mainmenu"/>)
  const [index_theme,setIndex_Theme] = useState(1) // 1 - TEMA CLAR0, 2 - TEMA ESCURO
  const [title_Theme,setTitle_Theme] = useState("Mudar para o tema escuro")

  const settings_Theme = (e) => {

    if (index_theme === 1) { // MUDAR PARA O TEMA ESCURO
      setIndex_Theme(2)
      setIcon_Theme(<FaSun className="icon-mainmenu"/>)
      setTitle_Theme("Mudar para o tema claro")
      setColorTheme("dark")
    }
    else if (index_theme === 2) { // MUDAR PARA O TEMA CLARO
      setIndex_Theme(1)
      setIcon_Theme(<FaMoon className="icon-mainmenu"/>)
      setTitle_Theme("Mudar para o tema escuro")
      setColorTheme("clear")
    }
    console.log("tema: " + colorTheme)
    e.preventDefault()
  }

  return (

    <div className="container-mainmenu">
       <div className="menu-items">
            <a href="#" title="Início"><HiHome className="icon-mainmenu"/></a>
            <a href="#" title="Minhas Habilidades"><GiGiftOfKnowledge className="icon-mainmenu"/></a>
            <a href="#" title="Formações"><FaGraduationCap className="icon-mainmenu"/></a>
            <a href="#" title="Projetos"><FaDiagramProject className="icon-mainmenu"/></a>
            <a href="#" title={title_Theme} onClick={(e) => settings_Theme(e)}>{icon_Theme}</a>
       </div>
    </div>

  )
}

export default MainMenu