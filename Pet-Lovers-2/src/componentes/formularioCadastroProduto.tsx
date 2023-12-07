import React, { Component } from "react";

type Props = {
    tema: string;
};

export default class FormularioCadastroProduto extends Component<Props> {
    render() {
        const { tema } = this.props;
        return (

            <div className="container-fluid">
                <form>

                    <div className="form-group">
                        <label htmlFor="data">Nome: </label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="form-group mt-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                    </div>
                    
                </form>
            </div>
        );
    }
}
