// CSS
import "./Skills.css"
// ÍCONES
import { GiSkills } from "react-icons/gi";
import { FaHtml5,FaDatabase,FaGithub,FaGitAlt } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { RiReactjsLine  } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaUnity,FaBrain } from "react-icons/fa6";
import { PiFileCSharpFill } from "react-icons/pi";

const Skills = () => {

  return (

    <div className="container-skills">

        <div className="sub-container-skills">

            <div className="title-skills">
                <GiSkills className="icon-title-skill"/>
                <span>Minhas Habilidades</span>
            </div>

            <div className="details-skills">

                <div className="item-skill">
                    <div className="info-percentage-skills">
                        <FaHtml5 className="icon-skill"/>
                        <span className="desc-skill">HTML 5</span>
                        <span className="desc-percentage">90%</span>
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
                        <SiCss3  className="icon-skill"/>
                        <span className="desc-skill">CSS 3</span>
                        <span className="desc-percentage">80%</span>
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
                        <span className="desc-skill">JavaScript</span>
                        <span className="desc-percentage">75%</span>
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
                        <RiReactjsLine   className="icon-skill"/>
                        <span className="desc-skill">REACT JS</span>
                        <span className="desc-percentage">80%</span>
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
                        <FaGitAlt className="icon-skill"/>
                        <span className="desc-skill">GIT</span>
                        <span className="desc-percentage">70%</span>
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
                        <FaGithub    className="icon-skill"/>
                        <span className="desc-skill">GITHUB</span>
                        <span className="desc-percentage">75%</span>
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
                        <FaDatabase    className="icon-skill"/>
                        <span className="desc-skill">SQL</span>
                        <span className="desc-percentage">75%</span>
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
                        <FaUnity     className="icon-skill"/>
                        <span className="desc-skill">UNITY 3D</span>
                        <span className="desc-percentage">85%</span>
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
                        <PiFileCSharpFill     className="icon-skill"/>
                        <span className="desc-skill">C# PARA JOGOS DIGITAIS</span>
                        <span className="desc-percentage">80%</span>
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
                        <FaBrain      className="icon-skill"/>
                        <span className="desc-skill">LÓGICA DE PROGRAMAÇÃO</span>
                        <span className="desc-percentage">90%</span>
                    </div>
                    <div className="container-progress-skills">
                        <div className="progress-skills">
                            <div className="progress-bar" style={{width:"90%"}}>
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