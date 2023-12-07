import { Request, Response } from 'express';
import Produto from '../models/Produto';

export default class ProdutoController {

    // Controller da rota para criar Produto -- (POST) localhost:3000/produtos/cadastrar
    public static async criarProduto(req: Request, res: Response): Promise<Response> {
        const data = req.body;

        console.log(data);

        // Verificando integridade dos dados
        if (!data.nomeProduto) {
            return res.status(500).json({ mensagem: "Por favor, adicione um nome!", status: 500 });

        } else if (!data.precoProduto) {
            return res.status(500).json({ mensagem: "Por favor, adicione um preço!", status: 500 });

        } 

        // Checando se Produto já está cadastrado
        try {
            const produto = {
                nomeProduto: data.nomeProduto,
                precoProduto: data.precoProduto
            };

            // Criando novo Produto
            await Produto.create(produto);
            return res.status(201).json({ mensagem: "Produto cadastrado com sucesso!", status: 201 });
        } catch (erro) {
            return res.status(500).json(erro);
        }
    }

    // Controller da rota para atualizar o Produto -- (PUT) localhost:3000/produtos/atualizar/:id
    public static async atualizarProduto(req: Request, res: Response): Promise<Response> {
        const idProduto = req.params.id

        const data = req.body;

        console.log(idProduto);
        console.log(data);

        // Verificando integridade dos dados
        if (!data.nomeProduto) {
            return res.status(500).json({ mensagem: "Por favor, adicione um nome!", status: 500 });

        } else if (!data.precoProduto) {
            return res.status(500).json({ mensagem: "Por favor, adicione um preço!", status: 500 });
        }

        // Tentando atualizar Produto
        try {
            await Produto.update({
                nomeProduto: data.nomeProduto,
                precoProduto: data.precoProduto
            }, {
                where: {
                    idProduto: idProduto
                }
            });

            return res.status(200).json({ message: "Produto atualizado com sucesso!" });
        } catch (erro) {
            return res.status(500).json(erro);
        }
    }

    // Controller da rota para ler Produtos -- (GET) localhost:3000/produtos/listar
    public static async listarProdutos(req: Request, res: Response): Promise<Response> {
        try {
            const todosprodutos = await Produto.findAll();

            return res.status(201).json(todosprodutos);
        } catch (erro) {
            return res.status(500).json(erro);
        }
    }

    // Controller para listar um Produto especifico pelo Id -- (GET) localhost:3000/produtos/listar/:id
    public static async listarProdutoPorId(req: Request, res: Response): Promise<Response> {
        const idProduto = req.params.id;

        try {
            const produto = await Produto.findByPk(idProduto);

            if (produto) {
                return res.json(produto);
            } else {
                return res.status(404).json({ mensagem: 'Produto não encontrado' });
            }
        } catch (erro) {
            return res.status(500).json(erro);
        }
    }

    // Controller para apagar um Produto especifico pelo Id -- (DELETE) localhost:3000/produtos/apagar/:id
    public static async apagarProduto(req: Request, res: Response): Promise<Response> {
        const idProduto = req.params.id;

        try {
            const produto = await Produto.findByPk(idProduto);

            if (produto) {
                await produto.destroy();
                return res.json({ mensagem: 'Produto apagado com sucesso' });
            } else {
                return res.status(404).json({ mensagem: 'Produto não encontrado' });
            }
        } catch (erro) {
            return res.status(500).json(erro);
        }
    }
}
