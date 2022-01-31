import { cleanup } from "@testing-library/react";
import { Header, Nav, Main,Footer} from "components";
import { IComentarioData } from "interface/comentario.interface";
import { useEffect,useState } from "react";
import { apiComentario } from "services/data";

const Home = () => {
   const[, setComentario] = useState<IComentarioData[]>()
  useEffect(() =>{
     async function fetchData(){
        const response = await apiComentario.index()
        setComentario(response.data) 
     }
     fetchData()
   }, [])
 return (
    <>
    <Header />
    <Nav />
    <Main />
    <Footer />
    </>
 );
};
export default Home;