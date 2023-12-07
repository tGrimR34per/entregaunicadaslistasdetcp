/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import { Link } from "react-router-dom";

type props = {
    tema: string
}

export default class ListaPets extends Component<props>{
    render() {
        let tema = this.props.tema
        return (

            <div className="container-fluid">

                <div className="row">
                    <div className="col-md-12 mb-4">
                        <Link to="/cadastrar-pet" className="btn btn-primary" type="button">
                            <i className="fas fa-plus"></i> Cadastrar Novo Pet
                        </Link>
                    </div>
                </div>

                <div className="list-group">

                    <div className="btn-group">
                        <a href="#" className="list-group-item list-group-item-action">Pet 1</a>
                        <div className="btn-group ml-auto" role="group">
                            <button type="button" className="btn btn-success btn-sm">Editar</button>
                            <button type="button" className="btn btn-danger btn-sm">Excluir</button>
                        </div>
                    </div>

                    <div className="btn-group mt-2">
                        <a href="#" className="list-group-item list-group-item-action">Pet 2</a>
                        <div className="btn-group ml-auto" role="group">
                            <button type="button" className="btn btn-success btn-sm">Editar</button>
                            <button type="button" className="btn btn-danger btn-sm">Excluir</button>
                        </div>
                    </div>

                    <div className="btn-group mt-2">
                        <a href="#" className="list-group-item list-group-item-action">Pet 3</a>
                        <div className="btn-group ml-auto" role="group">
                            <button type="button" className="btn btn-success btn-sm">Editar</button>
                            <button type="button" className="btn btn-danger btn-sm">Excluir</button>
                        </div>
                    </div>

                    <div className="btn-group mt-2">
                        <a href="#" className="list-group-item list-group-item-action">Pet 4</a>
                        <div className="btn-group ml-auto" role="group">
                            <button type="button" className="btn btn-success btn-sm">Editar</button>
                            <button type="button" className="btn btn-danger btn-sm">Excluir</button>
                        </div>
                    </div>

                    <div className="btn-group mt-2">
                        <a href="#" className="list-group-item list-group-item-action">Pet 5</a>
                        <div className="btn-group ml-auto" role="group">
                            <button type="button" className="btn btn-success btn-sm">Editar</button>
                            <button type="button" className="btn btn-danger btn-sm">Excluir</button>
                        </div>
                    </div>

                    <div className="btn-group mt-2">
                        <a href="#" className="list-group-item list-group-item-action">Pet 6</a>
                        <div className="btn-group ml-auto" role="group">
                            <button type="button" className="btn btn-success btn-sm">Editar</button>
                            <button type="button" className="btn btn-danger btn-sm">Excluir</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}