import React, { useState } from "react";
import { cadastrarProduto } from "../hooks/cadastrarProduto";

export default function FormularioCadastroProduto(props) {
    const { tema } = props;

    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = {
                nomeProduto: nome,
                precoProduto: preco,
            };
            const produto = await cadastrarProduto(data);
            console.log("Resposta do Usuário", produto.mensagem);
            alert("Produto cadastrado com sucesso");
        } catch (erro) {
            alert("Erro ao cadastrar produto");
        }
    };

    return (

        <div className="container-fluid">
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="nome">Nome: </label>
                    <input
                        type="text"
                        className="form-control"
                        id="nome"
                        value={nome}
                        onChange={(event) => setNome(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="preco">Preço: </label>
                    <input
                        type="text"
                        className="form-control"
                        id="preco"
                        value={preco}
                        onChange={(event) => setPreco(event.target.value)}
                    />
                </div>

                <div className="form-group mt-3">
                    <button
                        className="btn btn-outline-secondary"
                        type="submit"
                        style={{ background: tema }}
                    >
                        Cadastrar
                    </button>
                </div>
                
            </form>
        </div>
    );
}
