import { styled } from 'styled-components'


const ButtonContainer = styled.button`
        font-family: "Montserrat", sans-serif;
        font-size: 20px;
        color: black;
        text-decoration: none;
        border-radius: 5px;
        border-width: 1px;
        cursor: pointer;
        padding: 3px;
`

export function Button({children, ...props}){
        return(
                <ButtonContainer {...props}> 
                {children}
                </ButtonContainer>
                
        )
}

