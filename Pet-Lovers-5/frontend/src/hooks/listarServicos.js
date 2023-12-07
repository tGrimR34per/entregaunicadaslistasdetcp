import api from "../utils/api";

export async function listarServicos() {
    try {
        const servicos = await api.get('/servicos/listar') 
        console.log(servicos)
        return servicos.data
    } catch (erro) { 
        console.log(erro) 
    }
}