// CSS
import "./Skills.css"
// ÍCONES
import { GiSkills } from "react-icons/gi";
import { FaHtml5,FaDatabase,FaGithub,FaGitAlt } from "react-icons/fa";
import { SiCss3,SiDialogflow } from "react-icons/si";
import { RiReactjsLine,RiTeamFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaUnity,FaBrain } from "react-icons/fa6";
import { PiFileCSharpFill } from "react-icons/pi";
import { MdDashboardCustomize,MdEmojiPeople } from "react-icons/md";

const Skills = () => {

  return (

    <div className="container-skills">

        <div className="sub-container-skills">

            <div className="title-skills">
                <GiSkills className="icon-title-skill"/>
                <span style={{userSelect:"none"}}>Minhas Habilidades</span>
            </div>

            <div className="details-skills">

                <div className="item-skill">
                    <div className="info-percentage-skills">
                        <FaHtml5 className="icon-skill"/>
                        <span style={{userSelect:"none"}} className="desc-skill">HTML 5</span>
                        <span style={{userSelect:"none"}} className="desc-percentage">85%</span>
                    </div>
                    <div className="container-progress-skills">
                        <div className="progress-skills">
                            <div className="progress-bar" style={{width:"85%"}}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item-skill">
                    <div className="info-percentage-skills">
                        <SiCss3 className="icon-skill"/>
                        <span style={{userSelect:"none"}} className="desc-skill">CSS 3</span>
                        <span style={{userSelect:"none"}} className="desc-percentage">80%</span>
                    </div>
                    <div className="container-progress-skills">
                        <div className="progress-skills">
                            <div className="progress-bar" style={{width:"80%"}}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item-skill">
                    <div className="info-percentage-skills">
                        <IoLogoJavascript style={{borderRadius:"7px"}} className="icon-skill"/>
                        <span style={{userSelect:"none"}} className="desc-skill">JavaScript</span>
                        <span style={{userSelect:"none"}} className="desc-percentage">75%</span>
                    </div>
                    <div className="container-progress-skills">
                        <div className="progress-skills">
                            <div className="progress-bar" style={{width:"75%"}}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item-skill">
                    <div className="info-percentage-skills">
                        <RiReactjsLine className="icon-skill"/>
                        <span style={{userSelect:"none"}} className="desc-skill">REACT JS</span>
                        <span style={{userSelect:"none"}} className="desc-percentage">70%</span>
                    </div>
                    <div className="container-progress-skills">
                        <div className="progress-skills">
                            <div className="progress-bar" style={{width:"70%"}}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item-skill">
                    <div className="info-percentage-skills">
                        <FaGitAlt className="icon-skill"/>
                        <span style={{userSelect:"none"}} className="desc-skill">GIT</span>
                        <span style={{userSelect:"none"}} className="desc-percentage">65%</span>
                    </div>
                    <div className="container-progress-skills">
                        <div className="progress-skills">
                            <div className="progress-bar" style={{width:"65%"}}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item-skill">
                    <div className="info-percentage-skills">
                        <FaGithub className="icon-skill"/>
                        <span style={{userSelect:"none"}} className="desc-skill">GITHUB</span>
                        <span style={{userSelect:"none"}} className="desc-percentage">65%</span>
                    </div>
                    <div className="container-progress-skills">
                        <div className="progress-skills">
                            <div className="progress-bar" style={{width:"65%"}}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item-skill">
                    <div className="info-percentage-skills">
                        <FaDatabase className="icon-skill"/>
                        <span style={{userSelect:"none"}} className="desc-skill">SQL</span>
                        <span style={{userSelect:"none"}} className="desc-percentage">60%</span>
                    </div>
                    <div className="container-progress-skills">
                        <div className="progress-skills">
                            <div className="progress-bar" style={{width:"60%"}}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item-skill">
                    <div className="info-percentage-skills">
                        <FaUnity className="icon-skill"/>
                        <span style={{userSelect:"none"}} className="desc-skill">UNITY 3D</span>
                        <span style={{userSelect:"none"}} className="desc-percentage">75%</span>
                    </div>
                    <div className="container-progress-skills">
                        <div className="progress-skills">
                            <div className="progress-bar" style={{width:"75%"}}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item-skill">
                    <div className="info-percentage-skills">
                        <PiFileCSharpFill className="icon-skill"/>
                        <span style={{userSelect:"none"}} className="desc-skill">C# PARA JOGOS DIGITAIS</span>
                        <span style={{userSelect:"none"}} className="desc-percentage">75%</span>
                    </div>
                    <div className="container-progress-skills">
                        <div className="progress-skills">
                            <div className="progress-bar" style={{width:"75%"}}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item-skill">
                    <div className="info-percentage-skills">
                        <FaBrain className="icon-skill"/>
                        <span style={{userSelect:"none"}} className="desc-skill">LÓGICA DE PROGRAMAÇÃO</span>
                        <span style={{userSelect:"none"}} className="desc-percentage">80%</span>
                    </div>
                    <div className="container-progress-skills">
                        <div className="progress-skills">
                            <div className="progress-bar" style={{width:"80%"}}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item-skill">
                    <div className="info-percentage-skills">
                        <SiDialogflow className="icon-skill"/>
                        <span style={{userSelect:"none"}} className="desc-skill">COMUNICAÇÃO</span>
                        <span style={{userSelect:"none"}} className="desc-percentage">95%</span>
                    </div>
                    <div className="container-progress-skills">
                        <div className="progress-skills">
                            <div className="progress-bar" style={{width:"95%"}}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item-skill">
                    <div className="info-percentage-skills">
                        <MdDashboardCustomize className="icon-skill"/>
                        <span style={{userSelect:"none"}} className="desc-skill">ADAPTABILIDADE</span>
                        <span style={{userSelect:"none"}} className="desc-percentage">85%</span>
                    </div>
                    <div className="container-progress-skills">
                        <div className="progress-skills">
                            <div className="progress-bar" style={{width:"85%"}}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item-skill">
                    <div className="info-percentage-skills">
                        <RiTeamFill className="icon-skill"/>
                        <span style={{userSelect:"none"}} className="desc-skill">TRABALHO EM EQUIPE</span>
                        <span style={{userSelect:"none"}} className="desc-percentage">90%</span>
                    </div>
                    <div className="container-progress-skills">
                        <div className="progress-skills">
                            <div className="progress-bar" style={{width:"90%"}}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item-skill">
                    <div className="info-percentage-skills">
                        <MdEmojiPeople  className="icon-skill"/>
                        <span style={{userSelect:"none"}} className="desc-skill">LIDERANÇA</span>
                        <span style={{userSelect:"none"}} className="desc-percentage">98%</span>
                    </div>
                    <div className="container-progress-skills">
                        <div className="progress-skills">
                            <div className="progress-bar" style={{width:"98%"}}>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>

  )
}

export default Skills