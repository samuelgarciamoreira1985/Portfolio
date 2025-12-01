// CSS
import "./Formations.css"
// JSON
import list_Formations from "../../../data/listFormations.json"
// ÍCONES
import { FaGraduationCap } from "react-icons/fa6";

const Formations = () => {

  return (

    <div className="container-formations">
            
        <div className="sub-container-formations">

            <div className="title-formations">
                <FaGraduationCap className="icon-title-formations"/>
                <span style={{userSelect:"none"}}>Formações</span>
            </div>

            <div className="details-formations">

                {list_Formations && list_Formations?.map(itemFormation => (
                <div className="items-formations" key={itemFormation.id}>
                    <div className="align-items-formation">
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