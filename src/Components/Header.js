import React from 'react' 
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, Link, Routes, Route} from "react-router-dom"
import Wallpaper from './assets/Slytherin.jpg'
import Main from './Main'
import Conteudo from './Conteudo'
import AboutMe from './AboutMe'

const GlobalStyle = createGlobalStyle`
*{
  @import url('https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@300;900&family=Montserrat+Alternates:ital,wght@0,500;1,200&family=Montserrat:ital,wght@0,200;1,600&family=Raleway:ital,wght@0,100;0,400;1,200;1,400&display=swap');
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: black;
  text-decoration: none;
  font-family: 'Montserrat Alternates', sans-serif;
}
body{
  background-image:url('${Wallpaper}');
  background-size: cover;
  background-repeat: no-repeat;
  
}
`
const Section = styled.section`
  display: flex;
  justify-content: space-between;
`
const Navigation = styled.nav`
  display: flex;
  margin-right:2vw;
  p{
    margin-left:2vw;
    text-align: center;
    font-size: 2em;
    text-decoration: none;
  } 
`

export default function App() {
  return (
    <Router>
    <GlobalStyle/>
    <Section>
      <div>
        <Navigation>
          <Link to='/'><p>Inicio</p></Link>
          <Link to='Work'><p>Work</p></Link>
          <Link to="AboutMe"><p>About Me</p></Link>
        </Navigation>
      </div>
      
    </Section>
    <Routes>
      <Route path='Work' element={<Main/>}/>
      <Route path='/' element={<Conteudo/>}/>
      <Route path='AboutMe' element={<AboutMe/>}/>
    </Routes>
    </Router>
  )
}