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
    box-sizing: border-box;
    background-color: ${colors.rosaclaro}
  }
  body{
    width: 100%;
    max-width:1024;
    margin: 0 auto;
  }
`