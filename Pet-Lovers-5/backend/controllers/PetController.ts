import { Request, Response } from 'express';
import Usuario from '../models/Usuario';
import Pet from '../models/Pet';

export default class PetController {
    // Controller da rota para criar Pet -- (POST) localhost:3000/pets/cadastrar
    public static async criarPet(req: Request, res: Response): Promise<Response> {
        const data = req.body;

        console.log(data);

        // Verificando integridade dos dados
        if (!data.nomePet) {
            return res.status(500).json({ mensagem: "Por favor, adicione um nome!", status: 500 });
        } else if (!data.tipoPet) {
            return res.status(500).json({ mensagem: "Por favor, adicione um tipo!", status: 500 });
        } else if (!data.racaPet) {
            return res.status(500).json({ mensagem: "Por favor, adicione uma raça!", status: 500 });
        } else if (!data.generoPet) {
            return res.status(500).json({ mensagem: "Por favor, adicione um gênero!", status: 500 });
        } else if (!data.cpfDono) {
            return res.status(500).json({ mensagem: "Por favor, adicione um CPF!", status: 500 });
        }

        try {
            // Checando se o dono do pet está cadastrado
            const donoExistente = await Usuario.findOne({
                where: { cpfUsuario: data.cpfDono },
            });

            if (!donoExistente) {
                return res.status(500).json({ mensagem: "O CPF do dono não está cadastrado! Por favor, cadastre o cliente!", status: 500 });
            }

            // Criando novo pet
            const pet = await Pet.create({
                nomePet: data.nomePet,
                tipoPet: data.tipoPet,
                racaPet: data.racaPet,
                generoPet: data.generoPet,
                cpfDono: data.cpfDono,
                idUsuario: donoExistente.idUsuario,
            });

            return res.status(201).json({ mensagem: "Pet cadastrado com sucesso!", status: 201 });
        } catch (erro) {
            return res.status(500).json(erro);
        }
    }

    // Controller da rota para atualizar o Pet -- (PUT) localhost:3000/pets/atualizar/:id
    public static async atualizarPet(req: Request, res: Response): Promise<Response> {
        const idPet = req.params.id;

        const data = req.body;

        console.log(idPet);
        console.log(data);

        // Verificando integridade dos dados
        if (!data.nomePet) {
            return res.status(500).json({ mensagem: "Por favor, adicione um nome!", status: 500 });
        } else if (!data.tipoPet) {
            return res.status(500).json({ mensagem: "Por favor, adicione um tipo!", status: 500 });
        } else if (!data.racaPet) {
            return res.status(500).json({ mensagem: "Por favor, adicione uma raça!", status: 500 });
        } else if (!data.generoPet) {
            return res.status(500).json({ mensagem: "Por favor, adicione um gênero!", status: 500 });
        } else if (!data.cpfDono) {
            return res.status(500).json({ mensagem: "Por favor, adicione um CPF!", status: 500 });
        }

        try {
            // Checando se o dono do pet está cadastrado
            const donoExistente = await Usuario.findOne({
                where: { cpfUsuario: data.cpfDono },
            });

            if (!donoExistente) {
                return res.status(500).json({ mensagem: "O CPF do dono não está cadastrado! Por favor, cadastre o cliente!", status: 500 });
            }

            // Atualizando pet
            await Pet.update(
                {
                    nomePet: data.nomePet,
                    tipoPet: data.tipoPet,
                    racaPet: data.racaPet,
                    generoPet: data.generoPet,
                    cpfDono: data.cpfDono,
                    idUsuario: donoExistente.idUsuario,
                },
                {
                    where: {
                        idPet: idPet,
                    },
                }
            );

            return res.status(200).json({ mensagem: "Pet atualizado com sucesso!" });
        } catch (erro) {
            return res.status(500).json(erro);
        }
    }

    // Controller da rota para listar Pets -- (GET) localhost:3000/pets/listar
    public static async listarPets(req: Request, res: Response): Promise<Response> {
        try {
            const todosPets = await Pet.findAll();

            return res.status(201).json(todosPets);
        } catch (erro) {
            return res.status(500).json(erro);
        }
    }

    // Controller para listar um Pet especifico pelo Id -- (GET) localhost:3000/pets/listar/:id
    public static async listarPetPorId(req: Request, res: Response): Promise<Response> {
        const idPet = req.params.id;

        try {
            const pet = await Pet.findByPk(idPet);

            if (pet) {
                return res.json(pet);
            } else {
                return res.status(404).json({ mensagem: 'Pet não encontrado' });
            }
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    // Controller para apagar um Pet especifico pelo Id -- (DELETE) localhost:3000/pets/apagar/:id
    public static async apagarPet(req: Request, res: Response): Promise<Response> {
        const idPet = req.params.id;

        try {
            const pet = await Pet.findByPk(idPet);

            if (pet) {
                await pet.destroy();
                return res.json({ mensagem: 'Pet apagado com sucesso' });
            } else {
                return res.status(404).json({ mensagem: 'Pet não encontrado' });
            }
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}
