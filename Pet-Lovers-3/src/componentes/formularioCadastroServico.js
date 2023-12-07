import React from "react";

export default function FormularioCadastroServico(props) {
    const { tema } = props;

    return (

        <div className="container-fluid">
            <form>

                <div className="form-group">
                    <label htmlFor="data">Nome: </label>
                    <input type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="data">Preço: </label>
                    <input type="text" className="form-control" />
                </div>

                <div className="form-group mt-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                </div>
                
            </form>
        </div>
    );
}
