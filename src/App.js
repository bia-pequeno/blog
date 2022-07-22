import React from 'react' 
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import Header from './Components/Header'

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
`
export default function App() {
  return (
    <>
    <GlobalStyle/>
    <Header/>
    </>
  )
}