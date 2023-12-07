import React from "react";

export default function ListaProdutos(props) {
    const tema = props.tema;

    const handleClienteClick = (nomeProduto) => {
        props.setPaginaAtual({
            pagina: 'Visualizar Produto',
            clienteSelecionado: nomeProduto,
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

    const handleSolicitarClick = (nomeCliente) => {
        const cpf = prompt("Digite o número do CPF do cliente:");
        if (cpf !== null) {
            const confirmarExclusao = window.alert(`Produto solicitado para ${cpf}!`);
            if (confirmarExclusao) {
                const clientesAtualizados = props.clientes.filter(
                    (cliente) => cliente.nome !== nomeCliente
                );
                props.setClientes(clientesAtualizados);
            }
        }
    };

    return (

        <div className="container-fluid">

            <div className="row">
                <div className="col-md-12 mb-4">
                    <button className="btn btn-primary" type="button"
                        onClick={() => props.setPaginaAtual({
                            pagina: 'Cadastro Produto',
                            clienteSelecionado: 'Cliente 0',
                        })}>
                        <i className="fas fa-plus"></i> Cadastrar Novo Produto
                    </button>
                </div>
            </div>

            <div className="list-group">

                <div className="btn-group">
                    <a href="#" className="list-group-item list-group-item-action" onClick={() => handleClienteClick('Produto 1')}>
                        Produto 1
                    </a>
                    <div className="btn-group ml-auto" role="group">
                        <button type="button" className="btn btn-success btn-sm ms-3" onClick={() => handleSolicitarClick("Cliente 1")}>Solicitar</button>

                        <button type="button" className="btn btn-primary btn-sm ms-3" onClick={() => props.setPaginaAtual({
                            pagina: 'Atualizar Produto',
                            clienteSelecionado: 'Cliente 0',
                        })}>Editar</button>

                        <button type="button" className="btn btn-danger btn-sm ms-3" onClick={() => handleExcluirClick("Cliente 1")}>Excluir</button>
                    </div>
                </div>

                <div className="btn-group mt-2">
                    <a href="#" className="list-group-item list-group-item-action" onClick={() => handleClienteClick('Produto 2')}>
                        Produto 2
                    </a>
                    <div className="btn-group ml-auto" role="group">
                        <button type="button" className="btn btn-success btn-sm ms-3" onClick={() => handleSolicitarClick("Cliente 1")}>Solicitar</button>

                        <button type="button" className="btn btn-primary btn-sm ms-3" onClick={() => props.setPaginaAtual({
                            pagina: 'Atualizar Produto',
                            clienteSelecionado: 'Cliente 0',
                        })}> Editar</button>

                        <button type="button" className="btn btn-danger btn-sm ms-3" onClick={() => handleExcluirClick("Cliente 1")}>Excluir</button>
                    </div>
                </div>

                <div className="btn-group mt-2">
                    <a href="#" className="list-group-item list-group-item-action" onClick={() => handleClienteClick('Produto 3')}>
                        Produto 3
                    </a>
                    <div className="btn-group ml-auto" role="group">
                        <button type="button" className="btn btn-success btn-sm ms-3" onClick={() => handleSolicitarClick("Cliente 1")}>Solicitar</button>

                        <button type="button" className="btn btn-primary btn-sm ms-3" onClick={() => props.setPaginaAtual({
                            pagina: 'Atualizar Produto',
                            clienteSelecionado: 'Cliente 0',
                        })}>Editar</button>
                        
                        <button type="button" className="btn btn-danger btn-sm ms-3" onClick={() => handleExcluirClick("Cliente 1")}>Excluir</button>
                    </div>
                </div>

                <div className="btn-group mt-2">
                    <a href="#" className="list-group-item list-group-item-action" onClick={() => handleClienteClick('Produto 4')}>
                        Produto 4
                    </a>
                    <div className="btn-group ml-auto" role="group">
                        <button type="button" className="btn btn-success btn-sm ms-3" onClick={() => handleSolicitarClick("Cliente 1")}>Solicitar</button>
                        <button type="button" className="btn btn-primary btn-sm ms-3"onClick={() => props.setPaginaAtual({
                            pagina: 'Atualizar Produto',
                            clienteSelecionado: 'Cliente 0',
                        })}>Editar</button>
                        <button type="button" className="btn btn-danger btn-sm ms-3" onClick={() => handleExcluirClick("Cliente 1")}>Excluir</button>
                    </div>
                </div>

                <div className="btn-group mt-2">
                    <a href="#" className="list-group-item list-group-item-action" onClick={() => handleClienteClick('Produto 5')}>
                        Produto 5
                    </a>
                    <div className="btn-group ml-auto" role="group">
                        <button type="button" className="btn btn-success btn-sm ms-3" onClick={() => handleSolicitarClick("Cliente 1")}>Solicitar</button>
                        <button type="button" className="btn btn-primary btn-sm ms-3" onClick={() => props.setPaginaAtual({
                            pagina: 'Atualizar Produto',
                            clienteSelecionado: 'Cliente 0',
                        })}>Editar</button>
                        <button type="button" className="btn btn-danger btn-sm ms-3" onClick={() => handleExcluirClick("Cliente 1")}>Excluir</button>
                    </div>
                </div>

                <div className="btn-group mt-2">
                    <a href="#" className="list-group-item list-group-item-action" onClick={() => handleClienteClick('Produto 6')}>
                        Produto 6
                    </a>
                    <div className="btn-group ml-auto" role="group">
                        <button type="button" className="btn btn-success btn-sm ms-3" onClick={() => handleSolicitarClick("Cliente 1")}>Solicitar</button>
                        <button type="button" className="btn btn-primary btn-sm ms-3"onClick={() => props.setPaginaAtual({
                            pagina: 'Atualizar Produto',
                            clienteSelecionado: 'Cliente 0',
                        })}>Editar</button>
                        <button type="button" className="btn btn-danger btn-sm ms-3" onClick={() => handleExcluirClick("Cliente 1")}>Excluir</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
