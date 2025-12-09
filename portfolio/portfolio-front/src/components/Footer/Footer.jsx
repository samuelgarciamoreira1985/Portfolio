// REACT
import { useState, useContext } from "react";
// CONTEXT
import { Context_Themes } from '../../context/ThemesContext'
// CSS
import "./Footer.css"
// ÍCONES
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedinIn,FaSquareInstagram } from "react-icons/fa6";
import { FaGithub,FaFacebook,FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {

  const { colorTheme,setColorTheme } = useContext(Context_Themes)

  return (

    <div className="container-footer">

        <div className={colorTheme === "dark" ? "details-footer-dark" : "details-footer"}>
            <div className={colorTheme === "dark" ? "items-footer-dark" : "items-footer"}>
                <p><FaPhoneAlt className={colorTheme === "dark" ? "icon-details-footer-dark" : "icon-details-footer"}/> (14) 99828-7796</p>
                <p><IoLogoWhatsapp className={colorTheme === "dark" ? "icon-details-footer-dark" : "icon-details-footer"}/> (14) 99828-7796</p>
                <p><MdEmail className={colorTheme === "dark" ? "icon-details-footer-dark" : "icon-details-footer"}/> samuel02031985@gmail.com</p>
            </div>
            <div className={colorTheme === "dark" ? "social-media-footer-dark" : "social-media-footer"}>
                <a href="https://www.linkedin.com/in/samuel-garcia-moreira-456285308/" target="_blank"><FaLinkedinIn className={colorTheme === "dark" ? "icon-social-media-footer-dark" : "icon-social-media-footer"}/></a>
                <a href="https://github.com/samuelgarciamoreira1985" target="_blank"><FaGithub className={colorTheme === "dark" ? "icon-social-media-footer-dark" : "icon-social-media-footer"}/></a>
                <a href="https://www.instagram.com/samuel02031985/" target="_blank"><FaSquareInstagram className={colorTheme === "dark" ? "icon-social-media-footer-dark" : "icon-social-media-footer"}/></a>
                <a href="https://www.facebook.com/samuel.garciamoreira?locale=pt_BR" target="_blank"><FaFacebook className={colorTheme === "dark" ? "icon-social-media-footer-dark" : "icon-social-media-footer"}/></a>
            </div>
        </div>

    </div>

  )
  
}

export default Footer