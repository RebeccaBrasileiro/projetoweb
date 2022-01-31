import { IComentarioData } from "interface/comentario.interface";
import api from "services/api";

class ComentarioData {
    index(){
        return api.get<IComentarioData[]>('/comentarios')
    }
}

export default new ComentarioData()