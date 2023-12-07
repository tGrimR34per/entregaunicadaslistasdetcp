import React, { useState } from "react";

export default function VisualizarCliente(props) {
  const { tema, clienteSelecionado } = props;

  const [nome, setNomeCliente] = useState(clienteSelecionado);
  const [nomeSocial, setNomeSocial] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataEmissaoCpf, setDataEmissaoCpf] = useState("");
  const [rg, setRg] = useState("");
  const [dataEmissaoRg, setDataEmissaoRg] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

  return (

    <div className="container-fluid">
      <form>

        <div className="form-group">
          <label htmlFor="nome">Nome: </label>
          <input
            type="text"
            className="form-control"
            id="nome"
            value={nome}
            onChange={(event) => setNomeCliente(event.target.value)}
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
          <label htmlFor="dataEmissaoCpf">Data de Emissão:</label>
          <input
            type="date"
            className="form-control"
            id="dataEmissaoCpf"
            value={dataEmissaoCpf}
            onChange={(event) => setDataEmissaoCpf(event.target.value)}
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
          <label htmlFor="dataEmissaoRg">Data de Emissão:</label>
          <input
            type="date"
            className="form-control"
            id="dataEmissaoRg"
            value={dataEmissaoRg}
            onChange={(event) => setDataEmissaoRg(event.target.value)}
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
              <span
                className="input-group-text"
                style={{ background: tema }}
              >
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
        
      </form>
    </div>
  );
}
