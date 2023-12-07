import React, { useState, useEffect } from "react";
import { listarProdutos } from "../hooks/listarProdutos";

export default function ListaProdutos(props) {
    const tema = props.tema;
    
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function fetchProdutos() {
            const dadosProdutos = await listarProdutos();
            setProdutos(dadosProdutos);
        }
        fetchProdutos();
    }, []);

    const handleProdutoClick = (nomeProduto) => {
        props.setPaginaAtual({
            pagina: 'Visualizar Produto',
            clienteSelecionado: nomeProduto,
        });
    };

    const handleExcluirClick = (nomeProduto) => {
        const confirmarExclusao = window.confirm("Deseja excluir?");
        if (confirmarExclusao) {
            const produtosAtualizados = produtos.filter(
                (produto) => produto.nomeProduto !== nomeProduto
            );
            setProdutos(produtosAtualizados);
        }
        window.location.reload();
    };

    const handleSolicitarClick = (nomeProduto) => {
        const cpf = prompt("Digite o número do CPF do cliente:");
        if (cpf !== null) {
            const confirmarExclusao = window.alert(`Produto solicitado para ${cpf}!`);
            if (confirmarExclusao) {
                const produtosAtualizados = produtos.filter(
                    (produto) => produto.nomeProduto !== nomeProduto
                );
                setProdutos(produtosAtualizados);
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
                                pagina: "Cadastro Produto",
                                clienteSelecionado: "Cliente 0",
                            })
                        }
                    >
                        <i className="fas fa-plus"></i> Cadastrar Novo Produto
                    </button>
                </div>

            </div>
            
            <div className="list-group">
                {produtos.map((produto, index) => (
                    <div className="btn-group mt-2" key={index}>
                        <a
                            href="#"
                            className="list-group-item list-group-item-action"
                            onClick={() => handleProdutoClick(produto.nomeProduto)}
                        >
                            {produto.nomeProduto}
                        </a>
                        <div className="btn-group ml-auto" role="group">
                            <button
                                type="button"
                                className="btn btn-success btn-sm ms-3"
                                onClick={() => handleSolicitarClick(produto.nomeProduto)}
                            >
                                Solicitar
                            </button>

                            <button
                                type="button"
                                className="btn btn-primary btn-sm ms-3"
                                onClick={() =>
                                    props.setPaginaAtual({
                                        pagina: "Atualizar Produto",
                                        clienteSelecionado: "Cliente 0",
                                    })
                                }
                            >
                                Editar
                            </button>

                            <button
                                type="button"
                                className="btn btn-danger btn-sm ms-3"
                                onClick={() => handleExcluirClick(produto.nomeProduto)}
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
