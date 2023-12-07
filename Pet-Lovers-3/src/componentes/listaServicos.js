import React from "react";

export default function ListaServicos(props) {
    const tema = props.tema;

    const handleServicoClick = (nomeServico) => {
        props.setPaginaAtual({
            pagina: 'Visualizar Serviço',
            servicoSelecionado: nomeServico,
        });
    };

    const handleExcluirClick = (nomeServico) => {
        const confirmarExclusao = window.confirm("Deseja excluir?");
        if (confirmarExclusao) {
            const servicosAtualizados = props.servicos.filter(
                (servico) => servico.nome !== nomeServico
            );
            props.setServicos(servicosAtualizados);
        }
        window.location.reload();
    };

    const handleSolicitarClick = (nomeServico) => {
        const cpf = prompt("Digite o número do CPF do cliente:");
        if (cpf !== null) {
            const confirmarExclusao = window.alert(`Serviço solicitado para ${cpf}!`);
            if (confirmarExclusao) {
                const servicosAtualizados = props.servicos.filter(
                    (servico) => servico.nome !== nomeServico
                );
                props.setServicos(servicosAtualizados);
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

                <div className="btn-group">
                    <a
                        href="#"
                        className="list-group-item list-group-item-action"
                        onClick={() => handleServicoClick("Serviço 1")}
                    >
                        Serviço 1
                    </a>
                    <div className="btn-group ml-auto" role="group">
                        <button
                            type="button"
                            className="btn btn-success btn-sm ms-3"
                            onClick={() => handleSolicitarClick("Serviço 1")}
                        >
                            Solicitar
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary btn-sm ms-3"
                            onClick={() =>
                                props.setPaginaAtual({
                                    pagina: "Atualizar Serviço",
                                    servicoSelecionado: "Serviço 0",
                                })
                            }
                        >
                            Editar
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger btn-sm ms-3"
                            onClick={() => handleExcluirClick("Serviço 1")}
                        >
                            Excluir
                        </button>
                    </div>
                </div>

                <div className="btn-group mt-2">
                    <a
                        href="#"
                        className="list-group-item list-group-item-action"
                        onClick={() => handleServicoClick("Serviço 2")}
                    >
                        Serviço 2
                    </a>
                    <div className="btn-group ml-auto" role="group">
                        <button
                            type="button"
                            className="btn btn-success btn-sm ms-3"
                            onClick={() => handleSolicitarClick("Serviço 2")}
                        >
                            Solicitar
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary btn-sm ms-3"
                            onClick={() =>
                                props.setPaginaAtual({
                                    pagina: "Atualizar Serviço",
                                    servicoSelecionado: "Serviço 2",
                                })
                            }
                        >
                            Editar
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger btn-sm ms-3"
                            onClick={() => handleExcluirClick("Serviço 2")}
                        >
                            Excluir
                        </button>
                    </div>
                </div>

                <div className="btn-group mt-2">
                    <a
                        href="#"
                        className="list-group-item list-group-item-action"
                        onClick={() => handleServicoClick("Serviço 3")}
                    >
                        Serviço 3
                    </a>
                    <div className="btn-group ml-auto" role="group">
                        <button
                            type="button"
                            className="btn btn-success btn-sm ms-3"
                            onClick={() => handleSolicitarClick("Serviço 3")}
                        >
                            Solicitar
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary btn-sm ms-3"
                            onClick={() =>
                                props.setPaginaAtual({
                                    pagina: "Atualizar Serviço",
                                    servicoSelecionado: "Serviço 3",
                                })
                            }
                        >
                            Editar
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger btn-sm ms-3"
                            onClick={() => handleExcluirClick("Serviço 3")}
                        >
                            Excluir
                        </button>
                    </div>
                </div>

                <div className="btn-group mt-2">
                    <a
                        href="#"
                        className="list-group-item list-group-item-action"
                        onClick={() => handleServicoClick("Serviço 4")}
                    >
                        Serviço 4
                    </a>
                    <div className="btn-group ml-auto" role="group">
                        <button
                            type="button"
                            className="btn btn-success btn-sm ms-3"
                            onClick={() => handleSolicitarClick("Serviço 4")}
                        >
                            Solicitar
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary btn-sm ms-3"
                            onClick={() =>
                                props.setPaginaAtual({
                                    pagina: "Atualizar Serviço",
                                    servicoSelecionado: "Serviço 4",
                                })
                            }
                        >
                            Editar
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger btn-sm ms-3"
                            onClick={() => handleExcluirClick("Serviço 4")}
                        >
                            Excluir
                        </button>
                    </div>
                </div>

                <div className="btn-group mt-2">
                    <a
                        href="#"
                        className="list-group-item list-group-item-action"
                        onClick={() => handleServicoClick("Serviço 5")}
                    >
                        Serviço 5
                    </a>
                    <div className="btn-group ml-auto" role="group">
                        <button
                            type="button"
                            className="btn btn-success btn-sm ms-3"
                            onClick={() => handleSolicitarClick("Serviço 5")}
                        >
                            Solicitar
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary btn-sm ms-3"
                            onClick={() =>
                                props.setPaginaAtual({
                                    pagina: "Atualizar Serviço",
                                    servicoSelecionado: "Serviço 5",
                                })
                            }
                        >
                            Editar
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger btn-sm ms-3"
                            onClick={() => handleExcluirClick("Serviço 5")}
                        >
                            Excluir
                        </button>
                    </div>
                </div>

                <div className="btn-group mt-2">
                    <a
                        href="#"
                        className="list-group-item list-group-item-action"
                        onClick={() => handleServicoClick("Serviço 6")}
                    >
                        Serviço 6
                    </a>
                    <div className="btn-group ml-auto" role="group">
                        <button
                            type="button"
                            className="btn btn-success btn-sm ms-3"
                            onClick={() => handleSolicitarClick("Serviço 6")}
                        >
                            Solicitar
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary btn-sm ms-3"
                            onClick={() =>
                                props.setPaginaAtual({
                                    pagina: "Atualizar Serviço",
                                    servicoSelecionado: "Serviço 6",
                                })
                            }
                        >
                            Editar
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger btn-sm ms-3"
                            onClick={() => handleExcluirClick("Serviço 6")}
                        >
                            Excluir
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
