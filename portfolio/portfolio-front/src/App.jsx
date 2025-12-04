//REACT
import MainMenu from './components/MainMenu/MainMenu'
import PersonalRecord from './components/PersonalRecord/PersonalRecord'
import Skills from './components/Skills/Skills'
import Formations from './components/Formations/Formations'
import Projects from './components/Projects/Projects'
//CSS
import './App.css'

function App() {

  return (

    <div className='App'>
      <MainMenu/>
      <PersonalRecord/>
      <Skills/>
      <Formations/>
      <Projects/>
    </div>

  )
}

export default App
