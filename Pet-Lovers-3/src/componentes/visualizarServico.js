import React, { useState } from "react";

export default function VisualizarServico(props) {
  const { tema, clienteSelecionado } = props;

  const [nome, setNome] = useState(clienteSelecionado);

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
            onChange={(event) => setNome(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
}
