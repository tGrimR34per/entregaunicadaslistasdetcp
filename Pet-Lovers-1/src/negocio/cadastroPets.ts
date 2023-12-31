import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import Pet from "../modelo/pet"
import Cadastro from "./cadastro"

export default class CadastroPets extends Cadastro {
    private pets: Array<Pet>
    private entrada: Entrada
    private cliente: Array<Cliente>
 
    constructor(pets: Array<Pet>, clientes: Array<Cliente>) {
        super()
        this.cliente = clientes
        this.pets = pets
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nIniciando cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor, informe o nome do pet: `)
        let raca = this.entrada.receberTexto(`Por favor, informe a raça do pet: `)
        let genero = this.entrada.receberTexto(`Por favor, informe o genero do pet: `)
        let tipo = this.entrada.receberTexto(`Por favor, informe o tipo do pet: `)

        let cpf = this.entrada.receberTexto(`Por favor, informe o CPF do dono pet: `)
        let cliente = this.cliente.find((c) => c.getCpf.getValor === cpf);

        if (cliente) {
            let pet = new Pet(nome, raca, genero, tipo);
            cliente.adicionarPet(pet);
            console.log(`\nPet cadastrado com sucesso!)\n`);
        } else {
            console.log(`Cliente não encontrado: (\n`);
        }

    }
}