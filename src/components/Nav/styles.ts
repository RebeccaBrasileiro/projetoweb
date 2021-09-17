import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Nav = styled.nav`

  border: 0,5 rem sólido ${colors.rosaclaro};
  align-items: center;
  ul {
      display: flex;
      flex-direction: row ;
      border: 0.3rem solid ${colors.rosaescuro};
      border-left-width: 0;
      border-left: 0;
      background-color:${colors.rosa};
      font-family: Rajdhani;
      font-size: 2rem;
      li{
      list-style: none;
       padding: 2rem;
      border: 0.2rem solid ${colors.rosa};
      border-top-width: 0 ;
      padding: 2rem;
         &:hover{
        text-decoration: none;
        color: ${colors.rosaescuro} ;
        a{
         text-decoration: none;
         color: ${colors.rosaescuro} ;
        }
       }
     }
     input#menu-toggle{
      display:none;
     }
    }
  h3{ font-family: Rajdhani ;
    font-size: 2.5rem;
    color: ${colors.rosaescuro};
    width:70%
    }
`