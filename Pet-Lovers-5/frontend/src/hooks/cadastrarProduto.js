import api from '../utils/api';

export async function cadastrarProduto(data){
    try{
        const dados = await api.post('/produtos/cadastrar', data);
        return dados.data;
    } catch(erro){
        const msgErro = erro.response.data.mensagem;
        console.log(erro);
    }
}