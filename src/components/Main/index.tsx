import * as S from "./styles"
import maquiagemolho from "assets/img/make1.svg"
import pinceis from "assets/img/pinceis.svg"
import maquiagemrosa from "assets/img/make2.svg"
const Main = () => {
    return(
        <S.Main>
          <div>
                 <img src= {maquiagemolho} alt="maquiagem olho rosa"/>
   
                 <img src= {pinceis} alt="pinceis maquiagem"/>

                 <img src= {maquiagemrosa} alt="maquiagem rosa"/>
         </div>
     
        </S.Main>
    )
}

export default Main