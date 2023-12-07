import React, { useState } from "react";
import { cadastrarServico } from "../hooks/cadastrarServico";

export default function FormularioCadastroServico(props) {
    const { tema } = props;

    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = {
                nomeServico: nome,
                precoServico: preco,
            };
            const servico = await cadastrarServico(data);
            console.log("Resposta do Usuário", servico.mensagem);
            alert("Serviço cadastrado com sucesso");
        } catch (erro) {
            alert("Erro ao cadastrar serviço");
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
