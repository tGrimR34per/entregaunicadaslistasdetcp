import React, { useState, useEffect } from "react";
import { procurarUsuarioPorId } from "../hooks/procurarCliente";
import { atualizarUsuario } from "../hooks/atualizarUsuario";

export default function FormularioEdicaoCliente(props) {
    const { tema, clienteSelecionado } = props;

    const [usuario, setUsuario] = useState({});
    useEffect(() => {
        async function fetchUsuario() {
            const dadosUsuario = await procurarUsuarioPorId(clienteSelecionado);
            setUsuario(dadosUsuario);
        }
        fetchUsuario();
    }, [clienteSelecionado]);

    const [idUsuario, setIdUsuario] = useState("");
    const [nome, setNomeCliente] = useState("");
    const [nomeSocial, setNomeSocial] = useState("");
    const [cpf, setCpf] = useState("");
    const [dataEmissaoCpf, setDataEmissaoCpf] = useState("");
    const [rg, setRg] = useState("");
    const [dataEmissaoRg, setDataEmissaoRg] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        setIdUsuario(usuario.idUsuario || "");
        setNomeCliente(usuario.nomeUsuario || "");
        setNomeSocial(usuario.nomeSocialUsuario || "");
        setCpf(usuario.cpfUsuario || "");
        setDataEmissaoCpf(usuario.emissaoCpf || "");
        setRg(usuario.rgUsuario || "");
        setDataEmissaoRg(usuario.emissaoRg || "");
        setTelefone(usuario.telefoneUsuario || "");
        setEmail(usuario.emailUsuario || "");
    }, [usuario]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const id = idUsuario;
            const data = {
                nomeUsuario: nome,
                nomeSocialUsuario: nomeSocial,
                cpfUsuario: cpf,
                dataEmissaoCpf: dataEmissaoCpf,
                rgUsuario: rg,
                dataEmissaoRg: dataEmissaoRg,
                telefoneUsuario: telefone,
                emailUsuario: email,
            };
            const usuarioAtualizado = await atualizarUsuario(id, data);
            console.log("Resposta do Usuario", usuarioAtualizado.mensagem);
            alert("Usuário atualizado com sucesso");
        } catch (erro) {
            alert("Erro ao atualizar usuário");
        }
    };

    return (

        <div className="container-fluid">
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="data">Nome: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={nome}
                        onChange={(event) => setNomeCliente(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="data">Nome Social: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={nomeSocial}
                        onChange={(event) => setNomeSocial(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="data">CPF: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={cpf}
                        onChange={(event) => setCpf(event.target.value)}
                    />
                    <label htmlFor="data">Data de Emissão:</label>
                    <input
                        type="date"
                        className="form-control"
                        value={dataEmissaoCpf}
                        onChange={(event) => setDataEmissaoCpf(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="data">RG: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={rg}
                        onChange={(event) => setRg(event.target.value)}
                    />
                    <label htmlFor="data">Data de Emissão:</label>
                    <input
                        type="date"
                        className="form-control"
                        value={dataEmissaoRg}
                        onChange={(event) => setDataEmissaoRg(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="data">Telefone: </label>
                    <input
                        type="tel"
                        className="form-control"
                        value={telefone}
                        onChange={(event) => setTelefone(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="data">E-mail: </label>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" style={{ background: tema }}>
                                @
                            </span>
                        </div>
                        <input
                            type="email"
                            className="form-control"
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
                        Atualizar
                    </button>
                </div>
                
            </form>
        </div>
    );
}
