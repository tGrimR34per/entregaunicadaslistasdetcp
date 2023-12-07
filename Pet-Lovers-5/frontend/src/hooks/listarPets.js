import api from "../utils/api";

export async function listarPets() {
    try {
        const pets = await api.get('/pets/listar') 
        console.log(pets)
        return pets.data
    } catch (erro) { 
        console.log(erro) 
    }
}