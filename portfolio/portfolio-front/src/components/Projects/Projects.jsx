// CSS
import "./Projects.css"
// ÍCONES
import { FaDiagramProject } from "react-icons/fa6";
import { IoArrowRedo } from "react-icons/io5";
// IMAGENS
import img_lunch_king from "../../assets/imagens/img-lunch-king.png"
import img_mari_artes from "../../assets/imagens/img-mari-artes.png"

const Projects = () => {

  return (

    <div className="container-projects">

        <div className="sub-container-projects">

            <div className="title-projects">
                <FaDiagramProject className="icon-title-projects"/>
                <span style={{userSelect:"none"}}>Projetos</span>
            </div>

            <div className="details-projects">

                <div className="items-projects">
                    <div className="align-items-projects">
                        <img src={img_lunch_king} alt="foto do projeto Lunch King" />
                        <p className="period-project">2025</p>
                        <h4>Lunch King - Sistema para Lanchonetes</h4>
                        <p className="description-project"><IoArrowRedo className="icon-description-project"/> Sistema web com foco específico em serviços para lanchonetes. Possibilita ao usuário realizar novos cadastros, alterações, exclusões e gravações de produtos através de interfaces bonitas e intuitivas. Disponibiliza também uma interface para operações de vendas, permitindo ao operador gerar QrCodes e Notas Fiscais.</p>
                        <a href="#" target="_blank">Acessar Projeto</a>
                    </div>
                </div>
                <div className="items-projects">
                    <div className="align-items-projects">
                        <img src={img_mari_artes} alt="foto do projeto Mari-Artes" />
                        <p className="period-project">2025</p>
                        <h4>Mari Artes - Site de Artesanato</h4>
                        <p className="description-project"><IoArrowRedo className="icon-description-project"/> O site possibilita ao usuário conferir produtos de artesanato assim como seus preços e detalhes específicos. O usuário também tem a possibilidade de adicionar ou remover produtos no seu carrinho de compras e enviar seu pedido finalizado para o destinatário.</p>
                        <a href="#" target="_blank">Acessar Projeto</a>
                    </div>
                </div>

            </div>

        </div>

    </div>

  )

}

export default Projects