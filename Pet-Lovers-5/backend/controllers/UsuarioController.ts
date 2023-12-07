import { Request, Response } from 'express';
import Usuario from '../models/Usuario';

export default class UsuarioController {

    // Controller da rota para criar Usuario -- (POST) localhost:3000/usuarios/cadastrar
    public static async criarUsuario(req: Request, res: Response): Promise<Response> {
        const data = req.body;

        console.log(data);

        // Verificando integridade dos dados
        if (!data.nomeUsuario) {
            return res.status(500).json({ mensagem: "Por favor, adicione um nome!", status: 500 });

        } else if (!data.cpfUsuario) {
            return res.status(500).json({ mensagem: "Por favor, adicione um CPF!", status: 500 });

        } else if (!data.emissaoCpf) {
            return res.status(500).json({ mensagem: "Por favor, adicione a data de emissão do CPF!", status: 500 });

        } else if (!data.rgUsuario) {
            return res.status(500).json({ mensagem: "Por favor, adicione um RG!", status: 500 });

        } else if (!data.emissaoRg) {
            return res.status(500).json({ mensagem: "Por favor, adicione a data de emissão do RG!", status: 500 });

        } else if (!data.telefoneUsuario) {
            return res.status(500).json({ mensagem: "Por favor, adicione um telefone!", status: 500 });

        } else if (!data.emailUsuario) {
            return res.status(500).json({ mensagem: "Por favor, adicione um e-mail!", status: 500 });
        }

        // Checando se Usuario já está cadastrado
        try {
            const checarSeUsuarioExiste = await Usuario.findOne({
                where: { emailUsuario: data.emailUsuario },
            });

            const checarSeCPFExiste = await Usuario.findOne({
                where: { cpfUsuario: data.cpfUsuario },
            });

            const checarSeRGExiste = await Usuario.findOne({
                where: { rgUsuario: data.rgUsuario },
            });

            if (checarSeCPFExiste) {
                return res.status(500).json({ mensagem: "O CPF já está cadastrado!", status: 500 });

            } else if (checarSeRGExiste) {
                return res.status(500).json({ mensagem: "O RG já está cadastrado!", status: 500 });

            } else if (checarSeUsuarioExiste) {
                return res.status(500).json({ mensagem: "O e-mail já está cadastrado!", status: 500 });
            }

            const usuario = {
                nomeUsuario: data.nomeUsuario,
                nomeSocialUsuario: data.nomeSocialUsuario,
                cpfUsuario: data.cpfUsuario,
                emissaoCpf: data.emissaoCpf,
                rgUsuario: data.rgUsuario,
                emissaoRg: data.emissaoRg,
                telefoneUsuario: data.telefoneUsuario,
                emailUsuario: data.emailUsuario,
            };

            // Criando novo Usuario
            await Usuario.create(usuario);
            return res.status(201).json({ mensagem: "Usuário cadastrado com sucesso!", status: 201 });
        } catch (erro) {
            return res.status(500).json(erro);
        }
    }

    // Controller da rota para atualizar o Usuario -- (PUT) localhost:3000/usuarios/atualizar/:id
    public static async atualizarUsuario(req: Request, res: Response): Promise<Response> {
        const idUsuario = req.params.id

        const data = req.body;

        console.log(idUsuario);
        console.log(data);

        // Verificando integridade dos dados
        if (!data.nomeUsuario) {
            return res.status(500).json({ mensagem: "Por favor, adicione um nome!", status: 500 });

        } else if (!data.cpfUsuario) {
            return res.status(500).json({ mensagem: "Por favor, adicione um CPF!", status: 500 });

        } else if (!data.emissaoCpf) {
            return res.status(500).json({ mensagem: "Por favor, adicione a data de emissão do CPF!", status: 500 });

        } else if (!data.rgUsuario) {
            return res.status(500).json({ mensagem: "Por favor, adicione um RG!", status: 500 });

        } else if (!data.emissaoRg) {
            return res.status(500).json({ mensagem: "Por favor, adicione a data de emissão do RG!", status: 500 });

        } else if (!data.telefoneUsuario) {
            return res.status(500).json({ mensagem: "Por favor, adicione um telefone!", status: 500 });

        } else if (!data.emailUsuario) {
            return res.status(500).json({ mensagem: "Por favor, adicione um e-mail!", status: 500 });
        }

        // Tentando atualizar Usuario
        try {
            await Usuario.update({
                nomeUsuario: data.nomeUsuario,
                nomeSocialUsuario: data.nomeSocialUsuario,
                cpfUsuario: data.cpfUsuario,
                emissaoCpf: data.emissaoCpf,
                rgUsuario: data.rgUsuario,
                emissaoRg: data.emissaoRg,
                telefoneUsuario: data.telefoneUsuario,
                emailUsuario: data.emailUsuario,
            }, {
                where: {
                    idUsuario: idUsuario
                }
            });

            return res.status(200).json({ message: "Usuário atualizado com sucesso!" });
        } catch (erro) {
            return res.status(500).json(erro);
        }
    }

    // Controller da rota para ler Usuarios -- (GET) localhost:3000/usuarios/listar
    public static async listarUsuarios(req: Request, res: Response): Promise<Response> {
        try {
            const todosUsuarios = await Usuario.findAll();

            return res.status(201).json(todosUsuarios);
        } catch (erro) {
            return res.status(500).json(erro);
        }
    }

    // Controller para listar um Usuario especifico pelo Id -- (GET) localhost:3000/usuarios/listar/:id
    public static async listarUsuarioPorId(req: Request, res: Response): Promise<Response> {
        const idUsuario = req.params.id;

        try {
            const usuario = await Usuario.findByPk(idUsuario);

            if (usuario) {
                return res.json(usuario);
            } else {
                return res.status(404).json({ mensagem: 'Usuário não encontrado' });
            }
        } catch (erro) {
            return res.status(500).json(erro);
        }
    }

    // Controller para apagar um Usuario especifico pelo Id -- (DELETE) localhost:3000/usuarios/apagar/:id
    public static async apagarUsuario(req: Request, res: Response): Promise<Response> {
        const idUsuario = req.params.id;

        try {
            const usuario = await Usuario.findByPk(idUsuario);

            if (usuario) {
                await usuario.destroy();
                return res.json({ mensagem: 'Usuário apagado com sucesso' });
            } else {
                return res.status(404).json({ mensagem: 'Usuário não encontrado' });
            }
        } catch (erro) {
            return res.status(500).json(erro);
        }
    }
}
