import api from '../utils/api';

export async function cadastrarServico(data){
    try{
        const dados = await api.post('/servicos/cadastrar', data);
        return dados.data;
    } catch(erro){
        const msgErro = erro.response.data.mensagem;
        console.log(erro);
    }
}