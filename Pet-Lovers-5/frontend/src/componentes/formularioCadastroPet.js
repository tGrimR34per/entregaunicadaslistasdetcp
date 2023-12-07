import React, { useState } from "react";

import { cadastrarPet } from "../hooks/cadastrarPet";

export default function FormularioCadastroPet(props) {
    const { tema } = props;

    const [nome, setNome] = useState("");
    const [tipo, setTipo] = useState("");
    const [raca, setRaca] = useState("");
    const [genero, setGenero] = useState("");
    const [cpfDono, setCpfDono] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const data = {
                nomePet: nome,
                tipoPet: tipo,
                racaPet: raca,
                generoPet: genero,
                cpfDono: cpfDono,
            };

            const pet = await cadastrarPet(data);
            console.log("Resposta do Usuario", pet.mensagem);
            alert('Pet cadastrado com sucesso');
        } catch (erro) {
            alert('Erro ao cadastrar pet');
        }
    };

    return (

        <div className="container-fluid">
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" className="form-control" value={nome} onChange={(event) => setNome(event.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="tipo">Tipo:</label>
                    <input type="text" className="form-control" value={tipo} onChange={(event) => setTipo(event.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="raca">Raça:</label>
                    <input type="text" className="form-control" value={raca} onChange={(event) => setRaca(event.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="genero">Gênero:</label>
                    <input type="text" className="form-control" value={genero} onChange={(event) => setGenero(event.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="cpfDono">CPF do Dono:</label>
                    <input type="tel" className="form-control" value={cpfDono} onChange={(event) => setCpfDono(event.target.value)} />
                </div>

                <div className="form-group">
                    <button className="btn btn-outline-secondary" type="submit" style={{ background: tema }}>
                        Cadastrar
                    </button>
                </div>
                
            </form>
        </div>
    );
}
