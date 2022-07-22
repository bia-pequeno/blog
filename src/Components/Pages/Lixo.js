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
            <Img src="https://cdn-icons.flaticon.com/png/512/3256/premium/3256319.png?token=exp=1658190201~hmac=6118a344158dc92b7076379e74da3769" alt="Caminhão de lixo" onClick={openModal}/>
            <p>Coleta</p>
        </ButtonImg>
        
        
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        >
            <h2  ref={(_subtitle) => (subtitle = _subtitle)}>Coleta de Lixo</h2>
            <Mbutton onClick={closeModal}>close</Mbutton>
            
            <ModalTitle>A cidade gera, em média, 18 mil toneladas de lixo diariamente (lixo residencial, de saúde, restos de feiras, podas de árvores, entulho, etc.). Só de resíduos domiciliares são coletados quase 10 mil toneladas por dia.</ModalTitle>

            

            <List>
                <Ul>
                    <li>1.1- Uso de tecnologia pra mapear o tipo de lixo produzido pela população, e assim criar soluções para reciclagem inteligente de materiais.</li>
                    <li>1.2- Campanhas de educação pra minimizar a produção de lixo, também para a importância da coleta seletiva e da reciclagem de materiais.</li>
                    <li>1.3- Financiamento público para uso e instalação de trituradores de orgânicos nas pias de cozinha, redirecionando pra um container(ou estação de coleta) que produzirá abudo, e que será recolhido pela prefeitura.</li>
                </Ul>
                
            </List>


        </Modal>
    </Card>
</>
)
} 