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
            <Img src="https://cdn-icons.flaticon.com/png/512/4284/premium/4284931.png?token=exp=1658191157~hmac=e783ff39cd64721679b20daefb5aeccc" alt="postes de luz" onClick={openModal}/>
            <p>Iluminação Publica</p>
        </ButtonImg>
        
        
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        >
            <Mbutton onClick={closeModal}>close</Mbutton>
            
            <h2  ref={(_subtitle) => (subtitle = _subtitle)}>A falta de Iluminação nas periferias</h2>
            <ModalTitle>à falta de iluminação, gera insegurança nos moradores da periferia</ModalTitle>

            

            <List>
                <Ul>
                    <li>1.1- Adicionar mais postes de energias em pontos onibus, pois ruas escuras são mais propensas a terem assaltantes </li>
                    <li>1.2- Luz no lado de fora de escolas, pois muitas possuem estudantes no periodo da noite</li>
                    <li>1.3- ruas escuras também estão propensas a terem mais acidentes de carro</li>
                </Ul>
                
            </List>


        </Modal>
    </Card>
</>
)
} 