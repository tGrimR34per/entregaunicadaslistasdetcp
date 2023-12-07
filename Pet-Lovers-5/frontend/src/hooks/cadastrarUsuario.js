import api from '../utils/api';

export async function cadastrarUsuario(data){
    try{
        const dados = await api.post('/usuarios/cadastrar', data);
        return dados.data;
    } catch(erro){
        const msgErro = erro.response.data.mensagem;
        console.log(erro);
    }
}