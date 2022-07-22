import React from "react"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import Segurança from './Pages/Segurança'
import Lazer from './Pages/Lazer'
import Coleta from './Pages/Lixo'
import Iluminação from './Pages/Luz'

const GlobalStyle = createGlobalStyle`
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    background-color: white;
    
}
`
const Head = styled.section`
  display: flex;
  justify-content: center;
`
const Title = styled.div`
   display: flex;
   flex-direction: column;
   width: 55vw;
   font-family: 'Courier New', Courier, monospace;
   h1{
    margin-top: 8vh;
    margin-bottom: 5vh;
   }
`
const CardS = styled.section`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
`

export default function App(){
    return(
        <>
        <GlobalStyle/>
        <Head>
            <Title>
                <h1>Os Objetivos de Desenvolvimento Sustentável em Guaianazes</h1>
            </Title>
        </Head>
        <CardS>
           <Segurança/>
           <Lazer/>
           <Coleta/>
           <Iluminação/>
        </CardS>
        </>
    )
} 