import { ReactNode } from "react";

export interface Icomentario {
    children: ReactNode
}

export interface IComentarioData {
    id: number
    comentario: string
    user: {
        email: string
    }
}
