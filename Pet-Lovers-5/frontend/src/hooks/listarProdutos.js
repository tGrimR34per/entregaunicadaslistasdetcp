import api from "../utils/api";

export async function listarProdutos() {
    try {
        const produtos = await api.get('/produtos/listar') 
        console.log(produtos)
        return produtos.data
    } catch (erro) { 
        console.log(erro) 
    }
}