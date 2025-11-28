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
                    <p>{itemFormation.period}</p>
                    <h4>{itemFormation.institution}</h4>
                    <p>{itemFormation.course}</p>
                    <button type="button">Ver Certificado</button>
                </div>
                ))}

            </div>

        </div>

    </div>

  )
}

export default Formations