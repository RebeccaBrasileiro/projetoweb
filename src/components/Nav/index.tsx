import { Link } from "react-router-dom";
import * as S from "./styles";

const Nav = () => {
    return(
 <S.Nav>
   <ul>        
      <li>
        <Link to="/DicasGuia">DICAS</Link>
     </li>
        
      <li>
      <Link to="">AUTOMAQUIAGEM </Link>
     </li>
        
      <li> 
      <Link to="">RESENHAS</Link>
     </li>
        
      <li>
      <Link to="">INSPIRAÇÕES</Link>
     </li>       
   </ul>
   <h3>Aqui você encontra tudo sobre maquiagem.</h3>
   <h3>Venha conhecer os melhores truques e dicas.</h3>
 </S.Nav>
    );
};

export default Nav;