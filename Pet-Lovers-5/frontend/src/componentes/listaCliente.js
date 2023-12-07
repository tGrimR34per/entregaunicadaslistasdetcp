import React, { useState, useEffect } from "react";
import { listarUsuarios } from "../hooks/listarUsuarios";

export default function ListaCliente(props) {
    const tema = props.tema;

    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
        async function fetchUsuarios() {
            const dadosUsuarios = await listarUsuarios();
            setUsuarios(dadosUsuarios);
        }
        fetchUsuarios();
    }, []);

    console.log("usuarios: ", usuarios);

    const handleClienteClick = (nomeCliente) => {
        props.setPaginaAtual({
            pagina: "Visualizar Cliente",
            clienteSelecionado: nomeCliente,
        });
    };

    const handleExcluirClick = (nomeCliente) => {
        const confirmarExclusao = window.confirm("Deseja excluir?");
        if (confirmarExclusao) {
            const clientesAtualizados = props.clientes.filter(
                (cliente) => cliente.nome !== nomeCliente
            );
            props.setClientes(clientesAtualizados);
        }
        window.location.reload();
    };

    const handleEditarClick = (idUsuario) => {
        props.setPaginaAtual({
            pagina: "Atualizar Cliente",
            clienteSelecionado: idUsuario,
        });
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
                                pagina: "Cadastro Cliente",
                                clienteSelecionado: "Cliente 0",
                            })
                        }
                    >
                        <i className="fas fa-plus"></i> Cadastrar Novo Usuário
                    </button>
                </div>
            </div>
            
            <div className="list-group">
                {usuarios.map((usuario) => (
                    <div className="btn-group" key={usuario.nomeUsuario}>
                        <a
                            href="#"
                            className="list-group-item list-group-item-action"
                            onClick={() => handleClienteClick(usuario.nomeUsuario)}
                        >
                            {usuario.nomeUsuario}
                        </a>
                        <div className="btn-group ml-auto" role="group">
                            <button
                                type="button"
                                className="btn btn-success btn-sm"
                                onClick={() => handleEditarClick(usuario.idUsuario)}
                            >
                                Editar
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger btn-sm"
                                onClick={() => handleExcluirClick(usuario.nomeUsuario)}
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
