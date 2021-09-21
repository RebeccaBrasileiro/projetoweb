import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Header = styled.header`
  display:flex;
  border: 0,5 rem sólido ${colors.rosaclaro};
  align-items: center;

  h1{
    width:100%;
    color:${colors.rosaescuro};
    text-align: center;
    font-size: 3rem;

  }

`