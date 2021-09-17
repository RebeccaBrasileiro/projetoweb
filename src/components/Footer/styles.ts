import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Footer =styled.footer`
border: 0.5rem solid${colors.rosa};
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-color: ${colors.rosa};
picture{
    img{
        width:100%;
    }
}
`