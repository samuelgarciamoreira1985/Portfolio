// CSS
import "./MainMenu.css"
// ÍCONES
import { HiHome } from "react-icons/hi2";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { FaGraduationCap,FaDiagramProject,FaMoon } from "react-icons/fa6";

const MainMenu = () => {

  return (

    <div className="container-mainmenu">
       <div className="menu-items">
            <a href="#" title="Início"><HiHome className="icon-mainmenu"/></a>
            <a href="#" title="Minhas Habilidades"><GiGiftOfKnowledge className="icon-mainmenu"/></a>
            <a href="#" title="Formações"><FaGraduationCap className="icon-mainmenu"/></a>
            <a href="#" title="Projetos"><FaDiagramProject className="icon-mainmenu"/></a>
            <a href="#" title="Temas"><FaMoon className="icon-mainmenu"/></a>
       </div>
    </div>

  )
}

export default MainMenu