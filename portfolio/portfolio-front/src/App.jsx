//REACT
import { useEffect, useContext } from 'react'

import MainMenu from './components/MainMenu/MainMenu'
import PersonalRecord from './components/PersonalRecord/PersonalRecord'
import Skills from './components/Skills/Skills'
import Formations from './components/Formations/Formations'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
// CONTEXT
import { Context_Themes } from './context/ThemesContext'
//CSS
import './App.css'

function App() {

  const { colorTheme,setColorTheme } = useContext(Context_Themes)
  const body = document.body

  useEffect(() => {
    if (colorTheme === "clear")
    body.classList.remove("dark-theme")
    else if (colorTheme === "dark")
    body.classList.add("dark-theme")
  },[colorTheme])

  return (

    <div className='App'>
      <MainMenu/>
      <PersonalRecord/>
      <Skills/>
      <Formations/>
      <Projects/>
      <Footer/>
    </div>

  )
}

export default App
