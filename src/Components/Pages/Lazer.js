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
            <Img src="https://cdn-icons.flaticon.com/png/512/3456/premium/3456940.png?token=exp=1658175857~hmac=11cca5f89cfd72ef32612e161f64ea9d" alt="Segurança" onClick={openModal}/>
            <p>Lazer</p>
        </ButtonImg>
        
        
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        >
            <Mbutton onClick={closeModal}>close</Mbutton>
            
            <h2  ref={(_subtitle) => (subtitle = _subtitle)}>Com poucos espaços públicos de lazer, periferias de São Paulo contam com projeto de jogos manuais.​</h2>
            <ModalTitle>Apesar de leis sobre direito ao lazer e de condições plenas de desenvolvimento, crianças nas periferias sofrem com ausência de espaços adequados</ModalTitle>

            

            <List>
                <Ul>
                    <li>1.1- Organizar projetos com foco nos locais públicos e realizar atividades em parques, praças, ruas de lazer, e casas culturais nas periferias da Grande São Paulo.</li>
                    <li>1.2- reformar parques locais, das periferia onde os brinquedos não estão em boas condições</li>
                </Ul>
                
            </List>


        </Modal>
    </Card>
</>
)
} 