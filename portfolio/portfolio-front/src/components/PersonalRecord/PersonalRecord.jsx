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
          <h3 style={{userSelect:"none"}}>Samuel Garcia Moreira</h3>
          <p style={{userSelect:"none"}}>Formado em Análise e Desenvolvimento de Sistemas com foco em desenvolvimento web especificamente em Front-End. Motivado pela paixão a tecnologia, estou sempre buscando por novos desafios e o aperfeiçoamento de minhas habilidades. Atualmente, estou em busca de uma oportunidade no mercado de trabalho na área do desenvolvimento e posso garantir que esforço e dedicação são atributos que jamais irão faltar.</p>
      </div>

      <div className="social-media-dev">
          <a href="https://www.linkedin.com/in/samuel-garcia-moreira-456285308/">
            <FaLinkedinIn className="icon-social-media-dev"/>
          </a>
          <a href="https://github.com/samuelgarciamoreira1985">
            <FaGithub  className="icon-social-media-dev"/>
          </a>
          <a href="https://www.instagram.com/samuel02031985/">
            <FaInstagramSquare  className="icon-social-media-dev"/>
          </a>
          <a href="https://www.facebook.com/samuel.garciamoreira?locale=pt_BR">
            <FaFacebook  className="icon-social-media-dev"/>
          </a>
      </div>

    </div>

  )
}

export default PersonalRecord