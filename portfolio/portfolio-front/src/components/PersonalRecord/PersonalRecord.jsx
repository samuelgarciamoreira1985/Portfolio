// REACT
import { useState, useContext } from "react";
// CONTEXT
import { Context_Themes } from '../../context/ThemesContext'
// CSS
import "./PersonalRecord.css"
// IMAGENS
import photo_dev from "../../assets/imagens/photo_dev.png"
// ÍCONES
import { FaLinkedinIn,FaGithub,FaInstagramSquare,FaFacebook } from "react-icons/fa";

const PersonalRecord = () => {

  const { colorTheme,setColorTheme,SectionID } = useContext(Context_Themes)

  return (

    <div className="container-personal-record" id={SectionID[0]}>

      <div className={colorTheme === "dark" ? "photo-dev-dark" : "photo-dev"}>
          <img src={photo_dev} alt="foto do desenvolvedor" />
      </div>

      <div className={colorTheme === "dark" ? "personal-dev-dark" : "personal-dev"}>
          <h3 style={{userSelect:"none"}}>Samuel Garcia Moreira</h3>
          <p style={{userSelect:"none"}}>Formado em Análise e Desenvolvimento de Sistemas com foco em desenvolvimento web especificamente em Front-End. Motivado pela paixão a tecnologia, estou sempre buscando por novos desafios e o aperfeiçoamento de minhas habilidades. Atualmente, estou em busca de uma oportunidade no mercado de trabalho na área do desenvolvimento e posso garantir que esforço e dedicação são atributos que jamais irão faltar.</p>
      </div>

      <div className={colorTheme === "dark" ? "social-media-dev-dark" : "social-media-dev"}>
          <a href="https://www.linkedin.com/in/samuel-garcia-moreira-456285308/" target="_blank">
            <FaLinkedinIn className={colorTheme === "dark" ? "icon-social-media-dev-dark" : "icon-social-media-dev"}/>
          </a>
          <a href="https://github.com/samuelgarciamoreira1985" target="_blank">
            <FaGithub  className={colorTheme === "dark" ? "icon-social-media-dev-dark" : "icon-social-media-dev"}/>
          </a>
          <a href="https://www.instagram.com/samuel02031985/" target="_blank">
            <FaInstagramSquare  className={colorTheme === "dark" ? "icon-social-media-dev-dark" : "icon-social-media-dev"}/>
          </a>
          <a href="https://www.facebook.com/samuel.garciamoreira?locale=pt_BR" target="_blank">
            <FaFacebook  className={colorTheme === "dark" ? "icon-social-media-dev-dark" : "icon-social-media-dev"}/>
          </a>
      </div>

      <div className={colorTheme === "dark" ? "curriculum-dev-dark" : "curriculum-dev"} >
          <p>Estou disponibilizando também o meu currículo digital. Para acessar é só clicar em <a href="https://samuelgarciamoreira1985.github.io/curriculo_digital_front_end/" target="_blank">Currículo Digital</a></p>
      </div>

    </div>

  )
}

export default PersonalRecord