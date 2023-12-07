/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = {
    tema: string
}

export default class ListaServicos extends Component<props>{
    render() {
        let tema = this.props.tema
        return (

            <div className="container-fluid">

                <div className="row">
                    <div className="col-md-12 mb-4">
                        <button className="btn btn-primary" type="button">
                            <i className="fas fa-plus"></i> Cadastrar Novo Serviço
                        </button>
                    </div>
                </div>

                <div className="list-group">

                    <div className="btn-group">
                        <a href="#" className="list-group-item list-group-item-action">
                            Serviço 1
                        </a>
                        <div className="btn-group ml-auto" role="group">
                            <button type="button" className="btn btn-success btn-sm ms-3">Solicitar</button>
                            <button type="button" className="btn btn-primary btn-sm ms-3">Editar</button>
                            <button type="button" className="btn btn-danger btn-sm ms-3">Excluir</button>
                        </div>
                    </div>

                    <div className="btn-group mt-2">
                        <a href="#" className="list-group-item list-group-item-action">
                            Serviço 2
                        </a>
                        <div className="btn-group ml-auto" role="group">
                            <button type="button" className="btn btn-success btn-sm ms-3">Solicitar</button>
                            <button type="button" className="btn btn-primary btn-sm ms-3">Editar</button>
                            <button type="button" className="btn btn-danger btn-sm ms-3">Excluir</button>
                        </div>
                    </div>

                    <div className="btn-group mt-2">
                        <a href="#" className="list-group-item list-group-item-action">
                            Serviço 3
                        </a>
                        <div className="btn-group ml-auto" role="group">
                            <button type="button" className="btn btn-success btn-sm ms-3">Solicitar</button>
                            <button type="button" className="btn btn-primary btn-sm ms-3">Editar</button>
                            <button type="button" className="btn btn-danger btn-sm ms-3">Excluir</button>
                        </div>
                    </div>

                    <div className="btn-group mt-2">
                        <a href="#" className="list-group-item list-group-item-action">
                            Serviço 4
                        </a>
                        <div className="btn-group ml-auto" role="group">
                            <button type="button" className="btn btn-success btn-sm ms-3">Solicitar</button>
                            <button type="button" className="btn btn-primary btn-sm ms-3">Editar</button>
                            <button type="button" className="btn btn-danger btn-sm ms-3">Excluir</button>
                        </div>
                    </div>

                    <div className="btn-group mt-2">
                        <a href="#" className="list-group-item list-group-item-action">
                            Serviço 5
                        </a>
                        <div className="btn-group ml-auto" role="group">
                            <button type="button" className="btn btn-success btn-sm ms-3">Solicitar</button>
                            <button type="button" className="btn btn-primary btn-sm ms-3">Editar</button>
                            <button type="button" className="btn btn-danger btn-sm ms-3">Excluir</button>
                        </div>
                    </div>

                    <div className="btn-group mt-2">
                        <a href="#" className="list-group-item list-group-item-action">
                            Serviço 6
                        </a>
                        <div className="btn-group ml-auto" role="group">
                            <button type="button" className="btn btn-success btn-sm ms-3">Solicitar</button>
                            <button type="button" className="btn btn-primary btn-sm ms-3">Editar</button>
                            <button type="button" className="btn btn-danger btn-sm ms-3">Excluir</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}