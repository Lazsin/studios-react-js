import { Button } from "../Button/Button"
import { styled } from "styled-components"
const FooterContainer = styled.footer`
    border-radius: 50px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 10%;
    height: 50px;
    background-color: gray 
`

export default function Footer() {
    return(
        <>
        <FooterContainer>
            <p><strong>Зв'язок з розробником:</strong><br/>
            demchenko.vanya2003@gmail.com</p>
            <Button style={{borderRadius: 10}} onClick={() => console.log('Telegram')}>Telegram</Button>
            <Button style={{borderRadius: 10}} onClick={() => console.log('LinkedIn')}>LinkedIn</Button>
            <Button style={{borderRadius: 10}} onClick={() => console.log('GitHub')}>GitHub</Button>
        </FooterContainer>
        <hr color="gray"></hr>
        </>
    )
    
}