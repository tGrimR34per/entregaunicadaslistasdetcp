import React, { useState } from "react";

import { cadastrarUsuario } from "../hooks/cadastrarUsuario";

export default function FormularioCadastroCliente(props) {
    const { tema } = props;

    const [nome, setNome] = useState("");
    const [nomeSocial, setNomeSocial] = useState("");
    const [cpf, setCpf] = useState("");
    const [emissaoCpf, setEmissaoCpf] = useState("");
    const [rg, setRg] = useState("");
    const [emissaoRg, setEmissaoRg] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const data = {
                nomeUsuario: nome,
                nomeSocialUsuario: nomeSocial,
                cpfUsuario: cpf,
                emissaoCpf: emissaoCpf,
                rgUsuario: rg,
                emissaoRg: emissaoRg,
                telefoneUsuario: telefone,
                emailUsuario: email,
            };
            const usuario = await cadastrarUsuario(data);
            console.log("Resposta do Usuario", usuario.mensagem);
            alert('Usuário cadastrado com sucesso');
        } catch (erro) {
            alert('Erro ao cadastrar usuário');
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
                    <label htmlFor="nomeSocial">Nome Social: </label>
                    <input
                        type="text"
                        className="form-control"
                        id="nomeSocial"
                        value={nomeSocial}
                        onChange={(event) => setNomeSocial(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="cpf">CPF: </label>
                    <input
                        type="text"
                        className="form-control"
                        id="cpf"
                        value={cpf}
                        onChange={(event) => setCpf(event.target.value)}
                    />
                    <label htmlFor="emissaoCpf">Data de Emissão:</label>
                    <input
                        type="date"
                        className="form-control"
                        id="emissaoCpf"
                        value={emissaoCpf}
                        onChange={(event) => setEmissaoCpf(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="rg">RG: </label>
                    <input
                        type="text"
                        className="form-control"
                        id="rg"
                        value={rg}
                        onChange={(event) => setRg(event.target.value)}
                    />
                    <label htmlFor="emissaoRg">Data de Emissão:</label>
                    <input
                        type="date"
                        className="form-control"
                        id="emissaoRg"
                        value={emissaoRg}
                        onChange={(event) => setEmissaoRg(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="telefone">Telefone: </label>
                    <input
                        type="tel"
                        className="form-control"
                        id="telefone"
                        value={telefone}
                        onChange={(event) => setTelefone(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">E-mail: </label>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" style={{ background: tema }}>
                                @
                            </span>
                        </div>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                </div>

                <div className="form-group">
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
