import api from '../utils/api';

export async function atualizarUsuario(id, data){
    try{
        const resposta = await api.put(`/usuarios/atualizar/${id}`, {data});
        return resposta.data;
    } catch(erro){
        console.log(erro);
    }
}