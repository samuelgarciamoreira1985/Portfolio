// CSS
import "./Footer.css"
// ÍCONES
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedinIn,FaSquareInstagram } from "react-icons/fa6";
import { FaGithub,FaFacebook,FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {

  return (

    <div className="container-footer">

        <div className="details-footer">
            <div className="items-footer">
                <p><FaPhoneAlt className="icon-details-footer"/> (14) 99828-7796</p>
                <p><IoLogoWhatsapp className="icon-details-footer"/> (14) 99828-7796</p>
                <p><MdEmail className="icon-details-footer"/> samuel02031985@gmail.com</p>
            </div>
            <div className="social-media-footer">
                <a href=""><FaLinkedinIn className="icon-social-media-footer"/></a>
                <a href=""><FaGithub className="icon-social-media-footer"/></a>
                <a href=""><FaSquareInstagram className="icon-social-media-footer"/></a>
                <a href=""><FaFacebook className="icon-social-media-footer"/></a>
            </div>
        </div>

    </div>

  )
  
}

export default Footer