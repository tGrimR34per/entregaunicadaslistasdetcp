import api from '../utils/api';


export async function procurarUsuarioPorId(id){
    try{
        const resposta = await api.get(`/usuarios/listar/${id}`);
        return resposta.data;
    } catch(erro){
        console.log(erro);
    }
}