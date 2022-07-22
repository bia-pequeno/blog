import React from "react"
import styled from "styled-components"
import Me from './assets/me.jpeg'

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
  flex-direction: column;
  p{
    font-size: 1.5em;
    width: 35vw;
    margin-left: 15vw;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`

export default function App(){
    return(
        <>
        <Section2>
            <Profile>
                <BoxPic>
                    <Photo src={Me} alt='me'/>
                </BoxPic>
                <Paragraph>
                    <p>I'm Beatriz Pequeno, I like to read, draw and listen to music.</p>
                    <p>I'm 17 years old and I live in the city of São Paulo, studying to be a Developer</p>
                    <p>I'm always trying to learn more and I love to learn new things</p>
                </Paragraph>
            </Profile>
        </Section2>
        </>
    )
}