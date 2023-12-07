import React from "react";

export default function ListaCliente(props) {
    const tema = props.tema;

    const handleClienteClick = (nomeCliente) => {
        props.setPaginaAtual({
            pagina: 'Visualizar Cliente',
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

    return (

        <div className="container-fluid">

            <div className="row">
                <div className="col-md-12 mb-4">
                    <button className="btn btn-primary" type="button"
                        onClick={() => props.setPaginaAtual({
                            pagina: 'Cadastro Cliente',
                            clienteSelecionado: 'Cliente 0',
                        })}>
                        <i className="fas fa-plus"></i> Cadastrar Novo Usuário
                    </button>
                </div>
            </div>

            <div className="list-group">

                <div className="btn-group">
                    <a href="#" className="list-group-item list-group-item-action" onClick={() => handleClienteClick('Cliente 1')}>
                        Cliente 1
                    </a>
                    <div className="btn-group ml-auto" role="group">
                        <button type="button" className="btn btn-success btn-sm"
                            onClick={() => props.setPaginaAtual({
                                pagina: 'Atualizar Cliente',
                                clienteSelecionado: 'Cliente 0',
                            })}>
                            Editar
                        </button>

                        <button type="button" className="btn btn-danger btn-sm" onClick={() => handleExcluirClick("Cliente 1")}>
                            Excluir
                        </button>
                    </div>
                </div>

                <div className="btn-group mt-2">
                    <a href="#" className="list-group-item list-group-item-action" onClick={() => handleClienteClick('Cliente 2')}>
                        Cliente 2
                    </a>
                    <div className="btn-group ml-auto" role="group">
                        <button type="button" className="btn btn-success btn-sm"
                            onClick={() => props.setPaginaAtual({
                                pagina: 'Atualizar Cliente',
                                clienteSelecionado: 'Cliente 0',
                            })}>
                            Editar
                        </button>
                        <button type="button" className="btn btn-danger btn-sm" onClick={() => handleExcluirClick("Cliente 2")}>
                            Excluir
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
