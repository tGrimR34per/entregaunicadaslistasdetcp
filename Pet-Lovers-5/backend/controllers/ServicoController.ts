import { Request, Response } from 'express';
import Servico from '../models/Servico';

export default class ServicoController {

    // Controller da rota para criar Serviço -- (POST) localhost:3000/servicos/cadastrar
    public static async criarServico(req: Request, res: Response): Promise<Response> {
        const data = req.body;

        console.log(data);

        // Verificando integridade dos dados
        if (!data.nomeServico) {
            return res.status(500).json({ mensagem: "Por favor, adicione um nome!", status: 500 });

        } else if (!data.precoServico) {
            return res.status(500).json({ mensagem: "Por favor, adicione um preço!", status: 500 });

        } 

        // Checando se Serviço já está cadastrado
        try {
            const servico = {
                nomeServico: data.nomeServico,
                precoServico: data.precoServico
            };

            // Criando novo Servico
            await Servico.create(servico);
            return res.status(201).json({ mensagem: "Serviço cadastrado com sucesso!", status: 201 });
        } catch (erro) {
            return res.status(500).json(erro);
        }
    }

    // Controller da rota para atualizar o Serviço -- (PUT) localhost:3000/servicos/atualizar/:id
    public static async atualizarServico(req: Request, res: Response): Promise<Response> {
        const idServico = req.params.id

        const data = req.body;

        console.log(idServico);
        console.log(data);

        // Verificando integridade dos dados
        if (!data.nomeServico) {
            return res.status(500).json({ mensagem: "Por favor, adicione um nome!", status: 500 });

        } else if (!data.precoServico) {
            return res.status(500).json({ mensagem: "Por favor, adicione um preço!", status: 500 });
        }

        // Tentando atualizar Serviço
        try {
            await Servico.update({
                nomeServico: data.nomeServico,
                precoServico: data.precoServico
            }, {
                where: {
                    idServico: idServico
                }
            });

            return res.status(200).json({ message: "Serviço atualizado com sucesso!" });
        } catch (erro) {
            return res.status(500).json(erro);
        }
    }

    // Controller da rota para ler Serviços -- (GET) localhost:3000/servicos/listar
    public static async listarServicos(req: Request, res: Response): Promise<Response> {
        try {
            const todosServicos = await Servico.findAll();

            return res.status(201).json(todosServicos);
        } catch (erro) {
            return res.status(500).json(erro);
        }
    }

    // Controller para listar um Serviço especifico pelo Id -- (GET) localhost:3000/servicos/listar/:id
    public static async listarServicoPorId(req: Request, res: Response): Promise<Response> {
        const idServico = req.params.id;

        try {
            const servico = await Servico.findByPk(idServico);

            if (servico) {
                return res.json(servico);
            } else {
                return res.status(404).json({ mensagem: 'Serviço não encontrado' });
            }
        } catch (erro) {
            return res.status(500).json(erro);
        }
    }

    // Controller para apagar um Serviço especifico pelo Id -- (DELETE) localhost:3000/servicos/apagar/:id
    public static async apagarServico(req: Request, res: Response): Promise<Response> {
        const idServico = req.params.id;

        try {
            const servico = await Servico.findByPk(idServico);

            if (servico) {
                await servico.destroy();
                return res.json({ mensagem: 'Serviço apagado com sucesso' });
            } else {
                return res.status(404).json({ mensagem: 'Serviço não encontrado' });
            }
        } catch (erro) {
            return res.status(500).json(erro);
        }
    }
}
