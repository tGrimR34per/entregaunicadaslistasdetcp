import React from "react";

export default function FormularioCadastroPet(props) {
    const { tema } = props;

    return (

        <div className="container-fluid">
            <form>

                <div className="form-group">
                    <label htmlFor="data">Nome: </label>
                    <input type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="data">Tipo: </label>
                    <input type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="data">Raça: </label>
                    <input type="text" className="form-control" />
                </div>
                
                <div className="form-group">
                    <label htmlFor="data">Gênero: </label>
                    <input type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="data">CPF do Dono: </label>
                    <input type="tel" className="form-control" />
                </div>

                <div className="form-group">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                </div>
                
            </form>
        </div>
    );
}
