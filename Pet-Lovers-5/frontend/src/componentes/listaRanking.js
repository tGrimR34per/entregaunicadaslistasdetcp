import React from "react";

export default function ListaRanking(props) {
    const tema = props.tema;

    return (

        <div className="container-fluid">
            <div className="row">

                <div className="col-md-6 mb-4">
                    <h4 className="mb-3">Top 5 produtos ou serviços em quantidade:</h4>
                    <ul className="list-group">
                        <li className="list-group-item">Cliente 1</li>
                        <li className="list-group-item">Cliente 2</li>
                        <li className="list-group-item">Cliente 3</li>
                        <li className="list-group-item">Cliente 4</li>
                        <li className="list-group-item">Cliente 5</li>
                    </ul>
                </div>

                <div className="col-md-6 mb-4">
                    <h4 className="mb-3">Top 5 produtos mais consumidos:</h4>
                    <ul className="list-group">
                        <li className="list-group-item">Serviço/Produto 1</li>
                        <li className="list-group-item">Serviço/Produto 2</li>
                        <li className="list-group-item">Serviço/Produto 3</li>
                        <li className="list-group-item">Serviço/Produto 4</li>
                        <li className="list-group-item">Serviço/Produto 5</li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h4 className="mb-3">Top 5 serviços ou produtos por tipo e raça de pets:</h4>
                    <ul className="list-group">
                        <li className="list-group-item">Serviço/Produto para Tipo/Raça 1</li>
                        <li className="list-group-item">Serviço/Produto para Tipo/Raça 2</li>
                        <li className="list-group-item">Serviço/Produto para Tipo/Raça 3</li>
                        <li className="list-group-item">Serviço/Produto para Tipo/Raça 4</li>
                        <li className="list-group-item">Serviço/Produto para Tipo/Raça 5</li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h4 className="mb-3">Top 5 produtos ou serviços em valor:</h4>
                    <ul className="list-group">
                        <li className="list-group-item">Cliente 1</li>
                        <li className="list-group-item">Cliente 2</li>
                        <li className="list-group-item">Cliente 3</li>
                        <li className="list-group-item">Cliente 4</li>
                        <li className="list-group-item">Cliente 5</li>
                    </ul>
                </div>
                
            </div>
        </div>
    );
}
