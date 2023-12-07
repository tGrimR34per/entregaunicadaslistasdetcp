import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

interface ServicoAttributes {
  idServico: number;
  nomeServico: string;
  precoServico: number;
}

interface ServicoCreationAttributes extends Optional<ServicoAttributes, 'idServico'> {}

class Servico extends Model<ServicoAttributes, ServicoCreationAttributes> implements ServicoAttributes {
  public idServico!: number;
  public nomeServico!: string;
  public precoServico!: number;

  public static initialize(sequelize: Sequelize): void {
    Servico.init(
      {
        idServico: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        nomeServico: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        precoServico: {
          type: DataTypes.FLOAT,
          allowNull: false,
        }
      },
      {
        sequelize,
        modelName: 'Servico',
      }
    );
    console.log('Modelo Servico inicializado');
  }
}

export default Servico;
