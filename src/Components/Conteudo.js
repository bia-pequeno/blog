import React from 'react' 
import styled from 'styled-components'
import Me from './assets/me.jpeg'
import instagram from './assets/insta.png'
import github from './assets/github.png'

const Section2 = styled.section`
  display: flex;
  justify-content: center;
`
const Profile = styled.div`
   display: flex;
   align-items: center;
   margin-top: 25vh;
   
`
const BoxPic = styled.div`
  display: flex;
`
const Photo = styled.img`
  width: 23vw;
  border-radius: 50%;
`
const Paragraph = styled.div`
  display: flex;
  
  h1{
    font-size: 2em;
    width: 35vw;
    margin-left: 3vw;
    font-family: 'Courier New', Courier, monospace;
  }
`
const Footer = styled.div`
   display: flex;
   justify-content: end;
   margin-top: 14vh;
`
const Img = styled.img`
  width: 3vw;
  margin-left: 0.4vw;
`
const NavImg = styled.nav`
  display: flex;
  margin-right: 2vw;
`


export default function App() {
    return (
      <>
      <Section2>
        <Profile>
          <BoxPic>
            <Photo src={Me} alt='me'/>
          </BoxPic>
          <Paragraph>
            <h1>Meu nome é Beatriz Pequeno, bem-vindo ao meu blog</h1>
          </Paragraph>
        </Profile>
      </Section2>
      <Footer>
        <NavImg>
          <a href='https://www.instagram.com/b.triizz/' target='_blank'><Img src={instagram} alt='instagram'/></a>
          <a href='https://github.com/bia-pequeno' target='_blank'><Img src={github} alt='GitHub'/></a>
        </NavImg>
      </Footer>
      </>
    )
  }