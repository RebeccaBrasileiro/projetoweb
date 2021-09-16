import {createGlobalStyle} from "styled-components"



export const colors = {
  rosa: "#EFB3D7",
  rosaescuro: "#D334A7",
  rosaclaro: "#FFD7EF"
}

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    max-width:1024px;
    box-sizing: border-box;
    font-family: "Rajdhani";
    background-color: ${colors.rosaclaro}
  }
`