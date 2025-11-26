// CSS
import "./PersonalRecord.css"
// IMAGENS
import photo_dev from "../../assets/imagens/photo_logo.png"
// ÍCONES
import { FaLinkedinIn,FaGithub,FaInstagramSquare,FaFacebook } from "react-icons/fa";

const PersonalRecord = () => {

  return (

    <div className="container-personal-record">

      <div className="photo-dev">
          <img src={photo_dev} alt="foto do desenvolvedor" />
      </div>

      <div className="personal-dev">
          <h3>Samuel Garcia Moreira</h3>
          <p>Formado em Análise e Desenvolvimento de Sistemas com foco em desenvolvimento web. Motivado pela paixão a tecnologia, estou sempre buscando por novos desafios e o aperfeiçoamento de minhas habilidades. Atualmente, estou em busca de uma oportunidade no merdado de trabalho na área do desenvolvimento e posso garantir que esforço e dedicação são atributos que jamais irão faltar.</p>
      </div>

      <div className="social-media-dev">
          <FaLinkedinIn className="icon-social-media-dev"/>
          <FaGithub  className="icon-social-media-dev"/>
          <FaInstagramSquare  className="icon-social-media-dev"/>
          <FaFacebook  className="icon-social-media-dev"/>
      </div>

    </div>

  )
}

export default PersonalRecord