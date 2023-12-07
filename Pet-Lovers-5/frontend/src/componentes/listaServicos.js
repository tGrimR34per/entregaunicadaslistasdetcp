import React, { useState, useEffect } from "react";
import { listarServicos } from "../hooks/listarServicos";

export default function ListaServicos(props) {
    const tema = props.tema;
    const [servicos, setServicos] = useState([]);

    useEffect(() => {
        async function fetchServicos() {
            const dadosServicos = await listarServicos();
            setServicos(dadosServicos);
        }
        fetchServicos();
    }, []);

    const handleServicoClick = (nomeServico) => {
        props.setPaginaAtual({
            pagina: 'Visualizar Serviço',
            servicoSelecionado: nomeServico,
        });
    };

    const handleExcluirClick = (nomeServico) => {
        const confirmarExclusao = window.confirm("Deseja excluir?");
        if (confirmarExclusao) {
            const servicosAtualizados = servicos.filter(
                (servico) => servico.nomeServico !== nomeServico
            );
            setServicos(servicosAtualizados);
        }
        window.location.reload();
    };

    const handleSolicitarClick = (nomeServico) => {
        const cpf = prompt("Digite o número do CPF do cliente:");
        if (cpf !== null) {
            const confirmarExclusao = window.alert(`Serviço solicitado para ${cpf}!`);
            if (confirmarExclusao) {
                const servicosAtualizados = servicos.filter(
                    (servico) => servico.nomeServico !== nomeServico
                );
                setServicos(servicosAtualizados);
            }
        }
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
                                pagina: "Cadastro Serviço",
                                servicoSelecionado: "Serviço 0",
                            })
                        }
                    >
                        <i className="fas fa-plus"></i> Cadastrar Novo Serviço
                    </button>
                </div>
            </div>
            <div className="list-group">
                {servicos.map((servico, index) => (
                    <div className="btn-group" key={index}>
                        <a
                            href="#"
                            className="list-group-item list-group-item-action"
                            onClick={() => handleServicoClick(servico.nomeServico)}
                        >
                            {servico.nomeServico}
                        </a>
                        <div className="btn-group ml-auto" role="group">
                            <button
                                type="button"
                                className="btn btn-success btn-sm ms-3"
                                onClick={() => handleSolicitarClick(servico.nomeServico)}
                            >
                                Solicitar
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary btn-sm ms-3"
                                onClick={() =>
                                    props.setPaginaAtual({
                                        pagina: "Atualizar Serviço",
                                        servicoSelecionado: servico.nomeServico,
                                    })
                                }
                            >
                                Editar
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger btn-sm ms-3"
                                onClick={() => handleExcluirClick(servico.nomeServico)}
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
