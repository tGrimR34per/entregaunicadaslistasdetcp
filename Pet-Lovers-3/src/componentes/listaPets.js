import React from "react";

export default function ListaPets(props) {
    const tema = props.tema;

    const handleClienteClick = (nomePet) => {
        props.setPaginaAtual({
            pagina: 'Visualizar Pet',
            clienteSelecionado: nomePet,
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

    return (

        <div className="container-fluid">

            <div className="row">
                <div className="col-md-12 mb-4">
                    <button className="btn btn-primary" type="button"
                        onClick={() => props.setPaginaAtual({
                            pagina: 'Cadastro Pet',
                            clienteSelecionado: 'Cliente 0',
                        })}>
                        <i className="fas fa-plus"></i> Cadastrar Novo Pet
                    </button>
                </div>
            </div>

            <div className="list-group">

                <div className="btn-group">
                    <a href="#" className="list-group-item list-group-item-action" onClick={() => handleClienteClick('Pet 1')}>
                        Pet 1
                    </a>
                    <div className="btn-group ml-auto" role="group">
                        <button type="button" className="btn btn-success btn-sm"
                            onClick={() => props.setPaginaAtual({
                                pagina: 'Atualizar Pet',
                                clienteSelecionado: 'Cliente 0',
                            })}>
                            Editar
                        </button>
                        <button type="button" className="btn btn-danger btn-sm" onClick={() => handleExcluirClick("Cliente 1")}>Excluir</button>
                    </div>
                </div>

                <div className="btn-group mt-2">
                    <a href="#" className="list-group-item list-group-item-action" onClick={() => handleClienteClick('Pet 2')}>
                        Pet 2
                    </a>
                    <div className="btn-group ml-auto" role="group">
                        <button type="button" className="btn btn-success btn-sm"
                            onClick={() => props.setPaginaAtual({
                                pagina: 'Atualizar Pet',
                                clienteSelecionado: 'Cliente 0',
                            })}>
                            Editar
                        </button>
                        <button type="button" className="btn btn-danger btn-sm" onClick={() => handleExcluirClick("Cliente 2")}>Excluir</button>
                    </div>
                </div>

                <div className="btn-group mt-2">
                    <a href="#" className="list-group-item list-group-item-action" onClick={() => handleClienteClick('Pet 3')}>
                        Pet 3
                    </a>
                    <div className="btn-group ml-auto" role="group">
                        <button type="button" className="btn btn-success btn-sm"
                            onClick={() => props.setPaginaAtual({
                                pagina: 'Atualizar Pet',
                                clienteSelecionado: 'Cliente 0',
                            })}>
                            Editar
                        </button>
                        <button type="button" className="btn btn-danger btn-sm" onClick={() => handleExcluirClick("Cliente 3")}>Excluir</button>
                    </div>
                </div>

                <div className="btn-group mt-2">
                    <a href="#" className="list-group-item list-group-item-action" onClick={() => handleClienteClick('Pet 4')}>
                        Pet 4
                    </a>
                    <div className="btn-group ml-auto" role="group">
                        <button type="button" className="btn btn-success btn-sm"
                            onClick={() => props.setPaginaAtual({
                                pagina: 'Atualizar Pet',
                                clienteSelecionado: 'Cliente 0',
                            })}>
                            Editar
                        </button>
                        <button type="button" className="btn btn-danger btn-sm" onClick={() => handleExcluirClick("Cliente 4")}>Excluir</button>
                    </div>
                </div>

                <div className="btn-group mt-2">
                    <a href="#" className="list-group-item list-group-item-action" onClick={() => handleClienteClick('Pet 5')}>
                        Pet 5
                    </a>
                    <div className="btn-group ml-auto" role="group">
                        <button type="button" className="btn btn-success btn-sm"
                            onClick={() => props.setPaginaAtual({
                                pagina: 'Atualizar Pet',
                                clienteSelecionado: 'Cliente 0',
                            })}>
                            Editar
                        </button>
                        <button type="button" className="btn btn-danger btn-sm" onClick={() => handleExcluirClick("Cliente 5")}>Excluir</button>
                    </div>
                </div>

                <div className="btn-group mt-2">
                    <a href="#" className="list-group-item list-group-item-action" onClick={() => handleClienteClick('Pet 6')}>
                        Pet 6
                    </a>
                    <div className="btn-group ml-auto" role="group">
                        <button type="button" className="btn btn-success btn-sm"
                            onClick={() => props.setPaginaAtual({
                                pagina: 'Atualizar Pet',
                                clienteSelecionado: 'Cliente 0',
                            })}>
                            Editar
                        </button>
                        <button type="button" className="btn btn-danger btn-sm" onClick={() => handleExcluirClick("Cliente 6")}>Excluir</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
