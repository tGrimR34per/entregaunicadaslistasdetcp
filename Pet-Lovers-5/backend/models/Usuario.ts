import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import Pet from './Pet'

interface UsuarioAttributes {
  idUsuario: number;
  nomeUsuario: string;
  nomeSocialUsuario: string;
  cpfUsuario: number;
  emissaoCpf: Date;
  rgUsuario: string;
  emissaoRg: Date;
  telefoneUsuario: number;
  emailUsuario: string;
}

interface UsuarioCreationAttributes extends Optional<UsuarioAttributes, 'idUsuario'> { }

class Usuario extends Model<UsuarioAttributes, UsuarioCreationAttributes> implements UsuarioAttributes {
  public idUsuario!: number;
  public nomeUsuario!: string;
  public nomeSocialUsuario!: string;
  public cpfUsuario!: number;
  public emissaoCpf!: Date;
  public rgUsuario!: string;
  public emissaoRg!: Date;
  public telefoneUsuario!: number;
  public emailUsuario!: string;

  public static initialize(sequelize: Sequelize): void {
    Usuario.init(
      {
        idUsuario: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        nomeUsuario: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        nomeSocialUsuario: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        cpfUsuario: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        emissaoCpf: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        rgUsuario: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        emissaoRg: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        telefoneUsuario: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        emailUsuario: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'Usuario',
      }
    );

    // Criando dependencias
    Usuario.hasMany(Pet, {
      foreignKey: 'idUsuario',
      as: 'pet',
    });

    console.log('Modelo Usuario inicializado');
  }
}

export default Usuario;
