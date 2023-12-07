import React, { useState, useEffect } from "react";

import { listarPets } from "../hooks/listarPets";

export default function ListaPets(props) {
    const tema = props.tema;

    const [pets, setPets] = useState([]);
    useEffect(() => {
        async function fetchPets() {
            const dadosPets = await listarPets();
            setPets(dadosPets);
        }
        fetchPets();
    }, []);

    const handleClienteClick = (nomePet) => {
        props.setPaginaAtual({
            pagina: 'Visualizar Pet',
            clienteSelecionado: nomePet,
        });
    };

    const handleExcluirClick = (nomeCliente) => {
        const confirmarExclusao = window.confirm("Deseja excluir?");
        if (confirmarExclusao) {
            const petsAtualizados = pets.filter(
                (pet) => pet.nomePet !== nomeCliente
            );
            setPets(petsAtualizados);
        }
        window.location.reload();
    };

    return (

        <div className="container-fluid">
            <div className="row">

                <div className="col-md-12 mb-4">
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={() =>
                            props.setPaginaAtual({
                                pagina: 'Cadastro Pet',
                                clienteSelecionado: 'Cliente 0',
                            })
                        }
                    >
                        <i className="fas fa-plus"></i> Cadastrar Novo Pet
                    </button>
                </div>
            </div>
            
            <div className="list-group">
                {pets.map((pet, index) => (
                    <div className="btn-group mt-2" key={index}>
                        <a
                            href="#"
                            className="list-group-item list-group-item-action"
                            onClick={() => handleClienteClick(pet.nomePet)}
                        >
                            {pet.nomePet}
                        </a>
                        <div className="btn-group ml-auto" role="group">
                            <button
                                type="button"
                                className="btn btn-success btn-sm"
                                onClick={() =>
                                    props.setPaginaAtual({
                                        pagina: 'Atualizar Pet',
                                        clienteSelecionado: 'Cliente 0',
                                    })
                                }
                            >
                                Editar
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger btn-sm"
                                onClick={() => handleExcluirClick(pet.nomePet)}
                            >
                                Excluir
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
