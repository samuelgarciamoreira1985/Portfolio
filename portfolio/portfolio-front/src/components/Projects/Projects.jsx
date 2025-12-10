// REACT
import { useState, useContext } from "react";
// CONTEXT
import { Context_Themes } from '../../context/ThemesContext'
// CSS
import "./Projects.css"
// ÍCONES
import { FaDiagramProject } from "react-icons/fa6";
import { IoArrowRedo } from "react-icons/io5";
// VÍDEOS
import video_lunch_king from "../../assets/videos/video-lunch-king.mp4"
// IMAGENS
import img_lunch_king from "../../assets/imagens/img-lunch-king.png"
import img_mari_artes from "../../assets/imagens/img-mari-artes.png"

const Projects = () => {

    const { colorTheme,setColorTheme,SectionID } = useContext(Context_Themes)

  return (

    <div className="container-projects" id={SectionID[3]}>

        <div className={colorTheme === "dark" ? "sub-container-projects-dark" : "sub-container-projects"}>

            <div className={colorTheme === "dark" ? "title-projects-dark" : "title-projects"}>
                <FaDiagramProject className={colorTheme === "dark" ? "icon-title-projects-dark" : "icon-title-projects"}/>
                <span style={{userSelect:"none"}}>Projetos</span>
            </div>

            <div className={colorTheme === "dark" ? "details-projects-dark" : "details-projects"}>

                <div className={colorTheme === "dark" ? "items-projects-dark" : "items-projects"}>
                    <div className={colorTheme === "dark" ? "align-items-projects-dark" : "align-items-projects"}>
                        <video 
                        src={video_lunch_king} 
                        controls poster={img_lunch_king}>
                        </video>
                        <p className={colorTheme === "dark" ? "period-project-dark" : "period-project"}>2025</p>
                        <h4>Lunch King - Sistema para Lanchonetes</h4>
                        <p className={colorTheme === "dark" ? "description-project-dark" : "description-project"}><IoArrowRedo className={colorTheme === "dark" ? "icon-description-project-dark" : "icon-description-project"}/> Sistema web com foco específico em serviços para lanchonetes. Possibilita ao usuário realizar novos cadastros, alterações, exclusões e gravações de produtos através de interfaces bonitas e intuitivas. Disponibiliza também uma interface para operações de vendas, permitindo ao operador gerar QrCodes e Notas Fiscais.</p>                       
                    </div>
                </div>
                <div className={colorTheme === "dark" ? "items-projects-dark" : "items-projects"}>
                    <div className={colorTheme === "dark" ? "align-items-projects-dark" : "align-items-projects"}>
                        <img src={img_mari_artes} alt="foto do projeto Mari-Artes" />
                        <p className={colorTheme === "dark" ? "period-project-dark" : "period-project"}>2025</p>
                        <h4>Mari Artes - Site de Artesanato</h4>
                        <p className={colorTheme === "dark" ? "description-project-dark" : "description-project"}><IoArrowRedo className={colorTheme === "dark" ? "icon-description-project-dark" : "icon-description-project"}/> O site possibilita ao usuário conferir produtos de artesanato assim como seus preços e detalhes específicos. O usuário também tem a possibilidade de adicionar ou remover produtos no seu carrinho de compras e enviar seu pedido finalizado para o destinatário.</p>
                    </div>
                </div>

            </div>

        </div>

    </div>

  )

}

export default Projects