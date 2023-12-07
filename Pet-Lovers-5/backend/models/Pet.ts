import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

interface PetAttributes {
    idPet: number;
    nomePet: string;
    tipoPet: string;
    racaPet: string;
    generoPet: string;
    cpfDono: number;
    idUsuario: number;
}

interface PetCreationAttributes extends Optional<PetAttributes, 'idPet'> { }

class Pet extends Model<PetAttributes, PetCreationAttributes> implements PetAttributes {
    public idPet!: number;
    public nomePet!: string;
    public tipoPet!: string;
    public racaPet!: string;
    public generoPet!: string;
    public cpfDono!: number;
    public idUsuario!: number;

    public static initialize(sequelize: Sequelize): void {
        Pet.init(
            {
                idPet: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    allowNull: false,
                    primaryKey: true,
                },
                nomePet: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                tipoPet: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                racaPet: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                generoPet: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                cpfDono: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                idUsuario: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
            },
            {
                sequelize,
                modelName: 'Pet',
            }
        );
        console.log('Modelo Pet inicializado');
    }
}

export default Pet;
