/* eslint-disable no-unused-vars */
import { useState } from "react";
import BarraNavegacao from "./barraNavegacao"
import ListaCliente from "./listaCliente";
import ListaPets from "./listaPets";
import ListaProdutos from "./listaProdutos";
import ListaServicos from "./listaServicos";
import ListaRanking from "./listaRanking";
//
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroPet from "./formularioCadastroPet";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroServico from "./formularioCadastroServico";
//
import VisualizarCliente from "./visualizarCliente";
import VisualizarPet from "./visualizarPet";
import VisualizarProduto from "./visualizarProduto";
import VisualizarServico from "./visualizarServico";
//
import FormularioEdicaoCliente from "./formularioEdicaoCliente";
import FormularioEdicaoPet from "./formularioEdicaoPet";
import FormularioEdicaoProduto from "./formularioEdicaoProduto";
import FormularioEdicaoServico from "./formularioEdicaoServico";

export default function Roteador() {

    const [paginaAtual, setPaginaAtual] = useState({
        pagina: 'Clientes',
        clienteSelecionado: 'Cliente 1'
    });

    const selecionarView = (valor, clienteSelecionado, e) => {
        e.preventDefault();
        setPaginaAtual({
            pagina: valor,
            clienteSelecionado: clienteSelecionado,
        });
    };


    const construirView = () => {
        if (paginaAtual.pagina === 'Clientes') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pets', 'Produtos', 'Serviços', 'Ranking']} />
                    <ListaCliente tema="#e3f2fd" setPaginaAtual={setPaginaAtual} />
                </>
            );
        } else if (paginaAtual.pagina === 'Pets') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pets', 'Produtos', 'Serviços', 'Ranking']} />
                    <ListaPets tema="#e3f2fd" setPaginaAtual={setPaginaAtual} />
                </>
            )
        } else if (paginaAtual.pagina === 'Produtos') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pets', 'Produtos', 'Serviços', 'Ranking']} />
                    <ListaProdutos tema="#e3f2fd" setPaginaAtual={setPaginaAtual} />
                </>
            )
        } else if (paginaAtual.pagina === 'Serviços') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pets', 'Produtos', 'Serviços', 'Ranking']} />
                    <ListaServicos tema="#e3f2fd" setPaginaAtual={setPaginaAtual} />
                </>
            )
        } else if (paginaAtual.pagina === 'Cadastro Cliente') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pets', 'Produtos', 'Serviços', 'Ranking']} />
                    <FormularioCadastroCliente tema="#e3f2fd" setPaginaAtual={setPaginaAtual} />
                </>
            )
        } else if (paginaAtual.pagina === 'Cadastro Pet') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pets', 'Produtos', 'Serviços', 'Ranking']} />
                    <FormularioCadastroPet tema="#e3f2fd" setPaginaAtual={setPaginaAtual} />
                </>
            )
        } else if (paginaAtual.pagina === 'Cadastro Serviço') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pets', 'Produtos', 'Serviços', 'Ranking']} />
                    <FormularioCadastroServico tema="#e3f2fd" setPaginaAtual={setPaginaAtual} />
                </>
            )
        } else if (paginaAtual.pagina === 'Cadastro Produto') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pets', 'Produtos', 'Serviços', 'Ranking']} />
                    <FormularioCadastroProduto tema="#e3f2fd" setPaginaAtual={setPaginaAtual} />
                </>
            )
        } else if (paginaAtual.pagina === 'Visualizar Cliente') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pets', 'Produtos', 'Serviços', 'Ranking']} />
                    <VisualizarCliente tema="#e3f2fd" setPaginaAtual={setPaginaAtual} clienteSelecionado={paginaAtual.clienteSelecionado} />
                </>
            )
        } else if (paginaAtual.pagina === 'Visualizar Pet') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pets', 'Produtos', 'Serviços', 'Ranking']} />
                    <VisualizarPet tema="#e3f2fd" setPaginaAtual={setPaginaAtual} clienteSelecionado={paginaAtual.clienteSelecionado} />
                </>
            )
        } else if (paginaAtual.pagina === 'Visualizar Produto') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pets', 'Produtos', 'Serviços', 'Ranking']} />
                    <VisualizarProduto tema="#e3f2fd" setPaginaAtual={setPaginaAtual} clienteSelecionado={paginaAtual.clienteSelecionado} />
                </>
            )
        } else if (paginaAtual.pagina === 'Visualizar Serviço') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pets', 'Produtos', 'Serviços', 'Ranking']} />
                    <VisualizarServico tema="#e3f2fd" setPaginaAtual={setPaginaAtual} clienteSelecionado={paginaAtual.clienteSelecionado} />
                </>
            )
        } else if (paginaAtual.pagina === 'Atualizar Cliente') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pets', 'Produtos', 'Serviços', 'Ranking']} />
                    <FormularioEdicaoCliente tema="#e3f2fd" setPaginaAtual={setPaginaAtual} clienteSelecionado={paginaAtual.clienteSelecionado} />
                </>
            )
        } else if (paginaAtual.pagina === 'Atualizar Pet') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pets', 'Produtos', 'Serviços', 'Ranking']} />
                    <FormularioEdicaoPet tema="#e3f2fd" setPaginaAtual={setPaginaAtual} clienteSelecionado={paginaAtual.clienteSelecionado} />
                </>
            )
        } else if (paginaAtual.pagina === 'Atualizar Produto') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pets', 'Produtos', 'Serviços', 'Ranking']} />
                    <FormularioEdicaoProduto tema="#e3f2fd" setPaginaAtual={setPaginaAtual} clienteSelecionado={paginaAtual.clienteSelecionado} />
                </>
            )
        } else if (paginaAtual.pagina === 'Atualizar Serviço') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pets', 'Produtos', 'Serviços', 'Ranking']} />
                    <FormularioEdicaoServico tema="#e3f2fd" setPaginaAtual={setPaginaAtual} clienteSelecionado={paginaAtual.clienteSelecionado} />
                </>
            )
        } else {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pets', 'Produtos', 'Serviços', 'Ranking']} />
                    <ListaRanking tema="#e3f2fd" setPaginaAtual={setPaginaAtual} />
                </>
            )
        }
    };

    return construirView();
}
