import React, { Component } from "react";

type Props = {
    tema: string;
};
export default class FormularioCadastroCliente extends Component<Props> {
    render() {
        const { tema } = this.props;
        return (

            <div className="container-fluid">
                <form>

                    <div className="form-group">
                        <label htmlFor="data">Nome: </label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="data">Nome Social: </label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="data">CPF: </label>
                        <input type="text" className="form-control" />
                        <label htmlFor="data">Data de Emissão:</label>
                        <input type="date" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="data">RG: </label>
                        <input type="text" className="form-control" />
                        <label htmlFor="data">Data de Emissão:</label>
                        <input type="date" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="data">Telefone: </label>
                        <input type="tel" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="data">E-mail: </label>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{ background: tema }}>@</span>
                            </div>
                            <input type="email" className="form-control" />
                        </div>
                    </div>

                    <div className="form-group">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                    </div>
                    
                </form>
            </div>
        );
    }
}
