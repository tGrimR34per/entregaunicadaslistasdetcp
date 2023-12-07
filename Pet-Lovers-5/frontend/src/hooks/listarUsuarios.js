import api from "../utils/api";

export async function listarUsuarios() {
    try {
        const usuarios = await api.get('/usuarios/listar') 
        console.log(usuarios)
        return usuarios.data
    } catch (erro) { 
        console.log(erro) 
    }
}