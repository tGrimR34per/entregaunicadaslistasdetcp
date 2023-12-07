import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

interface ProdutoAttributes {
  idProduto: number;
  nomeProduto: string;
  precoProduto: number;
}

interface ProdutoCreationAttributes extends Optional<ProdutoAttributes, 'idProduto'> {}

class Produto extends Model<ProdutoAttributes, ProdutoCreationAttributes> implements ProdutoAttributes {
  public idProduto!: number;
  public nomeProduto!: string;
  public precoProduto!: number;

  public static initialize(sequelize: Sequelize): void {
    Produto.init(
      {
        idProduto: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        nomeProduto: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        precoProduto: {
          type: DataTypes.FLOAT,
          allowNull: false,
        }
      },
      {
        sequelize,
        modelName: 'Produto',
      }
    );
    console.log('Modelo Produto inicializado');
  }
}

export default Produto;
