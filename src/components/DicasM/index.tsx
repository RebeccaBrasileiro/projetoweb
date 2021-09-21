import * as S from "./styles"
import dicadelineado from "assets/img/dica delineado.svg"
import dicabatom from "assets/img/dica batom.svg"
import dicablush from "assets/img/dica blush.svg"
import dicacontorno from "assets/img/dica contorno.svg"
import funcaopinceis from "assets/img/função pinceis.svg"
import dicaprodutos from "assets/img/dica produtos.svg"


const DicasM = () => {
    return(
        <S.DicasM>
         <div>
                 <img src={dicadelineado} alt="Dica fazer delineado"/>
                 <img src={dicabatom} alt="Dica passar batom"/>
                 <img src={dicablush} alt="Dica cores blush"/>
          </div>
         <div>
                 <img src={dicacontorno} alt="Dica fazer Contorno"/>
                 <img src={funcaopinceis} alt="Função pinceis de maquiagem"/>
                 <img src={dicaprodutos} alt="Dicas produtos"/>
         </div>
        </S.DicasM>
    )
}

export default DicasM