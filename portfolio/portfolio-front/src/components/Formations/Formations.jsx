// REACT
import { useState, useContext } from "react";
// CONTEXT
import { Context_Themes } from '../../context/ThemesContext'
// CSS
import "./Formations.css"
// JSON
import list_Formations from "../../../data/listFormations.json"
// ÍCONES
import { FaGraduationCap } from "react-icons/fa6";

const Formations = () => {

    const { colorTheme,setColorTheme } = useContext(Context_Themes)

  return (

    <div className="container-formations">
            
        <div className={colorTheme === "dark" ? "sub-container-formations-dark" : "sub-container-formations"}>

            <div className={colorTheme === "dark" ? "title-formations-dark" : "title-formations"}>
                <FaGraduationCap className={colorTheme === "dark" ? "icon-title-formations-dark" : "icon-title-formations"}/>
                <span style={{userSelect:"none"}}>Formações</span>
            </div>

            <div className={colorTheme === "dark" ? "details-formations-dark" : "details-formations"}>

                {list_Formations && list_Formations?.map(itemFormation => (
                <div className={colorTheme === "dark" ? "items-formations-dark" : "items-formations"} key={itemFormation.id}>
                    <div className={colorTheme === "dark" ? "align-items-formation-dark" : "align-items-formation"}>
                        <p style={{fontWeight:"600",fontSize:".9rem"}}>{itemFormation.period}</p>
                        <h4>{itemFormation.institution}</h4>
                        <p>{itemFormation.course}</p>
                        <a href={itemFormation.certificate} target="_blank">Ver Certificado</a>
                    </div>
                </div>
                ))}

            </div>

        </div>

    </div>

  )
}

export default Formations