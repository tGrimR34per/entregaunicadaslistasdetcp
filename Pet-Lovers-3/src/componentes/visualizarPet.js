import React, { useState } from "react";

export default function VisualizarPet(props) {
  const { tema, clienteSelecionado } = props;

  const [nome, setNome] = useState(clienteSelecionado);
  const [tipo, setTipo] = useState('');
  const [raca, setRaca] = useState('');
  const [genero, setGenero] = useState('');
  const [cpfDono, setCpfDono] = useState('');

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

        <div className="form-group">
          <label htmlFor="tipo">Tipo: </label>
          <input
            type="text"
            className="form-control"
            id="tipo"
            value={tipo}
            onChange={(event) => setTipo(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="raca">Raça: </label>
          <input
            type="text"
            className="form-control"
            id="raca"
            value={raca}
            onChange={(event) => setRaca(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="genero">Gênero: </label>
          <input
            type="text"
            className="form-control"
            id="genero"
            value={genero}
            onChange={(event) => setGenero(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="cpfDono">CPF do Dono: </label>
          <input
            type="tel"
            className="form-control"
            id="cpfDono"
            value={cpfDono}
            onChange={(event) => setCpfDono(event.target.value)}
          />
        </div>
        
      </form>
    </div>
  );
}
