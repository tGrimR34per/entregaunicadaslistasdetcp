import api from '../utils/api';

export async function cadastrarPet(data){
    try{
        const dados = await api.post('/pets/cadastrar', data);
        return dados.data;
    } catch(erro){
        const msgErro = erro.response.data.mensagem;
        console.log(erro);
    }
}