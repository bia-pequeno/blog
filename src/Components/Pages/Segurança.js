import React from "react"
import styled from "styled-components"
import Modal from 'react-modal'

const Img = styled.img`
   width: 10vw;
   border: 3px solid black;
`
const Card = styled.div`
   display: flex;
   flex-direction: column;
`

const List = styled.div`
   margin-top: 6vh;
   margin-bottom: 4vh;
`
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  li{
   padding-bottom: 5vh;
  }
`
const ButtonImg = styled.div`
   text-align: center;
   width: 10.3vw;
`
const ModalTitle = styled.h4`
   margin-top: 6vh;
`
const Mbutton = styled.button`
   width: 6vw;
   height: 4vh;
   font-size: 1em;
   font-family: Arial, Helvetica, sans-serif;
   float: right;
`
const Info = styled.button`
   float: right;
   width: 6vw;
   height: 4vh;
   font-size: 0.8em;
   font-family: Arial, Helvetica, sans-serif;
`
export default function App(){
    let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
    return(
        <>
        <Card>
        <ButtonImg>
            <Img src="https://cdn-icons-png.flaticon.com/512/1049/1049482.png" alt="Segurança" onClick={openModal}/>
            <p>Segurança</p>
        </ButtonImg>
        
        
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        >
            <Mbutton onClick={closeModal}>close</Mbutton>
            
            <h2  ref={(_subtitle) => (subtitle = _subtitle)}>Segurança</h2>
            <ModalTitle> “A falta de segurança é um dos maiores problemas daqui”</ModalTitle>

            

            <List>
               <Ul>
                  <li>1.1- investir em infraestrutura e zeladoria urbana, especialmente em regiões periféricas, onde o crime acontece e há menos acesso à rede de proteção</li>
                  <li>1.2- Adicionar mais postes de energias em pontos onibus, pois ruas escuras são mais propensas a terem assaltantes </li>
               </Ul>
                
            </List>


        </Modal>
    </Card>
</>
)
} 