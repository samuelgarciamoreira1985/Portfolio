// REACT
import { useState, useContext } from "react";
// CONTEXT
import { Context_Themes } from '../../context/ThemesContext'
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

    const { colorTheme,setColorTheme } = useContext(Context_Themes)

  return (

    <div className="container-skills">

        <div className={colorTheme === "dark" ? "sub-container-skills-dark" : "sub-container-skills"}>

            <div className={colorTheme === "dark" ? "title-skills-dark" : "title-skills"}>
                <GiSkills className={colorTheme === "dark" ? "icon-title-skill-dark" : "icon-title-skill"}/>
                <span style={{userSelect:"none"}}>Minhas Habilidades</span>
            </div>

            <div className={colorTheme === "dark" ? "details-skills-dark" : "details-skills"}>

                <div className={colorTheme === "dark" ? "item-skill-dark" : "item-skill"}>
                    <div className={colorTheme === "dark" ? "info-percentage-skills-dark" : "info-percentage-skills"}>
                        <FaHtml5 className={colorTheme === "dark" ? "icon-skill-dark" : "icon-skill"}/>
                        <span style={{userSelect:"none"}} className={colorTheme === "dark" ? "desc-skill-dark" : "desc-skill"}>HTML 5</span>
                        <span style={{userSelect:"none"}} className={colorTheme === "dark" ? "desc-percentage-dark" : "desc-percentage"}>85%</span>
                    </div>
                    <div className={colorTheme === "dark" ? "container-progress-skills-dark" : "container-progress-skills"}>
                        <div className={colorTheme === "dark" ? "progress-skills-dark" : "progress-skills"}>
                            <div className={colorTheme === "dark" ? "progress-bar-dark" : "progress-bar"} style={{width:"85%"}}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={colorTheme === "dark" ? "item-skill-dark" : "item-skill"}>
                    <div className={colorTheme === "dark" ? "info-percentage-skills-dark" : "info-percentage-skills"}>
                        <SiCss3 className={colorTheme === "dark" ? "icon-skill-dark" : "icon-skill"}/>
                        <span style={{userSelect:"none"}} className={colorTheme === "dark" ? "desc-skill-dark" : "desc-skill"}>CSS 3</span>
                        <span style={{userSelect:"none"}} className={colorTheme === "dark" ? "desc-percentage-dark" : "desc-percentage"}>80%</span>
                    </div>
                    <div className={colorTheme === "dark" ? "container-progress-skills-dark" : "container-progress-skills"}>
                        <div className={colorTheme === "dark" ? "progress-skills-dark" : "progress-skills"}>
                            <div className={colorTheme === "dark" ? "progress-bar-dark" : "progress-bar"} style={{width:"80%"}}>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={colorTheme === "dark" ? "item-skill-dark" : "item-skill"}>
                    <div className={colorTheme === "dark" ? "info-percentage-skills-dark" : "info-percentage-skills"}>
                        <IoLogoJavascript className={colorTheme === "dark" ? "icon-skill-dark" : "icon-skill"}/>
                        <span style={{userSelect:"none"}} className={colorTheme === "dark" ? "desc-skill-dark" : "desc-skill"}>JavaScript</span>
                        <span style={{userSelect:"none"}} className={colorTheme === "dark" ? "desc-percentage-dark" : "desc-percentage"}>75%</span>
                    </div>
                    <div className={colorTheme === "dark" ? "container-progress-skills-dark" : "container-progress-skills"}>
                        <div className={colorTheme === "dark" ? "progress-skills-dark" : "progress-skills"}>
                            <div className={colorTheme === "dark" ? "progress-bar-dark" : "progress-bar"} style={{width:"75%"}}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={colorTheme === "dark" ? "item-skill-dark" : "item-skill"}>
                    <div className={colorTheme === "dark" ? "info-percentage-skills-dark" : "info-percentage-skills"}>
                        <RiReactjsLine className={colorTheme === "dark" ? "icon-skill-dark" : "icon-skill"}/>
                        <span style={{userSelect:"none"}} className={colorTheme === "dark" ? "desc-skill-dark" : "desc-skill"}>REACT JS</span>
                        <span style={{userSelect:"none"}} className={colorTheme === "dark" ? "desc-percentage-dark" : "desc-percentage"}>70%</span>
                    </div>
                    <div className={colorTheme === "dark" ? "container-progress-skills-dark" : "container-progress-skills"}>
                        <div className={colorTheme === "dark" ? "progress-skills-dark" : "progress-skills"}>
                            <div className={colorTheme === "dark" ? "progress-bar-dark" : "progress-bar"} style={{width:"70%"}}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={colorTheme === "dark" ? "item-skill-dark" : "item-skill"}>
                    <div className={colorTheme === "dark" ? "info-percentage-skills-dark" : "info-percentage-skills"}>
                        <FaGitAlt className={colorTheme === "dark" ? "icon-skill-dark" : "icon-skill"}/>
                        <span style={{userSelect:"none"}} className={colorTheme === "dark" ? "desc-skill-dark" : "desc-skill"}>GIT</span>
                        <span style={{userSelect:"none"}} className={colorTheme === "dark" ? "desc-percentage-dark" : "desc-percentage"}>65%</span>
                    </div>
                    <div className={colorTheme === "dark" ? "container-progress-skills-dark" : "container-progress-skills"}>
                        <div className={colorTheme === "dark" ? "progress-skills-dark" : "progress-skills"}>
                            <div className={colorTheme === "dark" ? "progress-bar-dark" : "progress-bar"} style={{width:"65%"}}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={colorTheme === "dark" ? "item-skill-dark" : "item-skill"}>
                    <div className={colorTheme === "dark" ? "info-percentage-skills-dark" : "info-percentage-skills"}>
                        <FaGithub className={colorTheme === "dark" ? "icon-skill-dark" : "icon-skill"}/>
                        <span style={{userSelect:"none"}} className={colorTheme === "dark" ? "desc-skill-dark" : "desc-skill"}>GITHUB</span>
                        <span style={{userSelect:"none"}} className={colorTheme === "dark" ? "desc-percentage-dark" : "desc-percentage"}>65%</span>
                    </div>
                    <div className={colorTheme === "dark" ? "container-progress-skills-dark" : "container-progress-skills"}>
                        <div className={colorTheme === "dark" ? "progress-skills-dark" : "progress-skills"}>
                            <div className={colorTheme === "dark" ? "progress-bar-dark" : "progress-bar"} style={{width:"65%"}}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={colorTheme === "dark" ? "item-skill-dark" : "item-skill"}>
                    <div className={colorTheme === "dark" ? "info-percentage-skills-dark" : "info-percentage-skills"}>
                        <FaDatabase className={colorTheme === "dark" ? "icon-skill-dark" : "icon-skill"}/>
                        <span style={{userSelect:"none"}} className={colorTheme === "dark" ? "desc-skill-dark" : "desc-skill"}>SQL</span>
                        <span style={{userSelect:"none"}} className={colorTheme === "dark" ? "desc-percentage-dark" : "desc-percentage"}>60%</span>
                    </div>
                    <div className={colorTheme === "dark" ? "container-progress-skills-dark" : "container-progress-skills"}>
                        <div className={colorTheme === "dark" ? "progress-skills-dark" : "progress-skills"}>
                            <div className={colorTheme === "dark" ? "progress-bar-dark" : "progress-bar"} style={{width:"60%"}}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={colorTheme === "dark" ? "item-skill-dark" : "item-skill"}>
                    <div className={colorTheme === "dark" ? "info-percentage-skills-dark" : "info-percentage-skills"}>
                        <FaUnity className={colorTheme === "dark" ? "icon-skill-dark" : "icon-skill"}/>
                        <span style={{userSelect:"none"}} className={colorTheme === "dark" ? "desc-skill-dark" : "desc-skill"}>UNITY 3D</span>
                        <span style={{userSelect:"none"}} className={colorTheme === "dark" ? "desc-percentage-dark" : "desc-percentage"}>75%</span>
                    </div>
                    <div className={colorTheme === "dark" ? "container-progress-skills-dark" : "container-progress-skills"}>
                        <div className={colorTheme === "dark" ? "progress-skills-dark" : "progress-skills"}>
                            <div className={colorTheme === "dark" ? "progress-bar-dark" : "progress-bar"} style={{width:"75%"}}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={colorTheme === "dark" ? "item-skill-dark" : "item-skill"}>
                    <div className={colorTheme === "dark" ? "info-percentage-skills-dark" : "info-percentage-skills"}>
                        <PiFileCSharpFill className={colorTheme === "dark" ? "icon-skill-dark" : "icon-skill"}/>
                        <span style={{userSelect:"none"}} className={colorTheme === "dark" ? "desc-skill-dark" : "desc-skill"}>C# PARA JOGOS DIGITAIS</span>
                        <span style={{userSelect:"none"}} className={colorTheme === "dark" ? "desc-percentage-dark" : "desc-percentage"}>75%</span>
                    </div>
                    <div className={colorTheme === "dark" ? "container-progress-skills-dark" : "container-progress-skills"}>
                        <div className={colorTheme === "dark" ? "progress-skills-dark" : "progress-skills"}>
                            <div className={colorTheme === "dark" ? "progress-bar-dark" : "progress-bar"} style={{width:"75%"}}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={colorTheme === "dark" ? "item-skill-dark" : "item-skill"}>
                    <div className={colorTheme === "dark" ? "info-percentage-skills-dark" : "info-percentage-skills"}>
                        <FaBrain className={colorTheme === "dark" ? "icon-skill-dark" : "icon-skill"}/>
                        <span style={{userSelect:"none"}} className={colorTheme === "dark" ? "desc-skill-dark" : "desc-skill"}>LÓGICA DE PROGRAMAÇÃO</span>
                        <span style={{userSelect:"none"}} className={colorTheme === "dark" ? "desc-percentage-dark" : "desc-percentage"}>80%</span>
                    </div>
                    <div className={colorTheme === "dark" ? "container-progress-skills-dark" : "container-progress-skills"}>
                        <div className={colorTheme === "dark" ? "progress-skills-dark" : "progress-skills"}>
                            <div className={colorTheme === "dark" ? "progress-bar-dark" : "progress-bar"} style={{width:"80%"}}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={colorTheme === "dark" ? "item-skill-dark" : "item-skill"}>
                    <div className={colorTheme === "dark" ? "info-percentage-skills-dark" : "info-percentage-skills"}>
                        <SiDialogflow className={colorTheme === "dark" ? "icon-skill-dark" : "icon-skill"}/>
                        <span style={{userSelect:"none"}} className={colorTheme === "dark" ? "desc-skill-dark" : "desc-skill"}>COMUNICAÇÃO</span>
                        <span style={{userSelect:"none"}} className={colorTheme === "dark" ? "desc-percentage-dark" : "desc-percentage"}>95%</span>
                    </div>
                    <div className={colorTheme === "dark" ? "container-progress-skills-dark" : "container-progress-skills"}>
                        <div className={colorTheme === "dark" ? "progress-skills-dark" : "progress-skills"}>
                            <div className={colorTheme === "dark" ? "progress-bar-dark" : "progress-bar"} style={{width:"95%"}}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={colorTheme === "dark" ? "item-skill-dark" : "item-skill"}>
                    <div className={colorTheme === "dark" ? "info-percentage-skills-dark" : "info-percentage-skills"}>
                        <MdDashboardCustomize className={colorTheme === "dark" ? "icon-skill-dark" : "icon-skill"}/>
                        <span style={{userSelect:"none"}} className={colorTheme === "dark" ? "desc-skill-dark" : "desc-skill"}>ADAPTABILIDADE</span>
                        <span style={{userSelect:"none"}} className={colorTheme === "dark" ? "desc-percentage-dark" : "desc-percentage"}>85%</span>
                    </div>
                    <div className={colorTheme === "dark" ? "container-progress-skills-dark" : "container-progress-skills"}>
                        <div className={colorTheme === "dark" ? "progress-skills-dark" : "progress-skills"}>
                            <div className={colorTheme === "dark" ? "progress-bar-dark" : "progress-bar"} style={{width:"85%"}}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={colorTheme === "dark" ? "item-skill-dark" : "item-skill"}>
                    <div className={colorTheme === "dark" ? "info-percentage-skills-dark" : "info-percentage-skills"}>
                        <RiTeamFill className={colorTheme === "dark" ? "icon-skill-dark" : "icon-skill"}/>
                        <span style={{userSelect:"none"}} className={colorTheme === "dark" ? "desc-skill-dark" : "desc-skill"}>TRABALHO EM EQUIPE</span>
                        <span style={{userSelect:"none"}} className={colorTheme === "dark" ? "desc-percentage-dark" : "desc-percentage"}>90%</span>
                    </div>
                    <div className={colorTheme === "dark" ? "container-progress-skills-dark" : "container-progress-skills"}>
                        <div className={colorTheme === "dark" ? "progress-skills-dark" : "progress-skills"}>
                            <div className={colorTheme === "dark" ? "progress-bar-dark" : "progress-bar"} style={{width:"90%"}}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={colorTheme === "dark" ? "item-skill-dark" : "item-skill"}>
                    <div className={colorTheme === "dark" ? "info-percentage-skills-dark" : "info-percentage-skills"}>
                        <MdEmojiPeople className={colorTheme === "dark" ? "icon-skill-dark" : "icon-skill"}/>
                        <span style={{userSelect:"none"}} className={colorTheme === "dark" ? "desc-skill-dark" : "desc-skill"}>LIDERANÇA</span>
                        <span style={{userSelect:"none"}} className={colorTheme === "dark" ? "desc-percentage-dark" : "desc-percentage"}>98%</span>
                    </div>
                    <div className={colorTheme === "dark" ? "container-progress-skills-dark" : "container-progress-skills"}>
                        <div className={colorTheme === "dark" ? "progress-skills-dark" : "progress-skills"}>
                            <div className={colorTheme === "dark" ? "progress-bar-dark" : "progress-bar"} style={{width:"98%"}}>
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