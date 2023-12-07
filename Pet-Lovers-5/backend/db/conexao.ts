import { Sequelize } from 'sequelize';
import mysql from 'mysql2/promise';

const createDatabase = async () => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    // !! Troque aqui por sua senha do MySQL !!
    password: 'root',
  });

  await connection.query('CREATE DATABASE IF NOT EXISTS petlovers');

  console.log('Banco de dados Petlovers criado com sucesso e pronto para uso');

  await connection.end();
};

export const initializeSequelize = async () => {
  await createDatabase();

  const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    // !! Troque aqui por sua senha do MySQL !!
    password: 'root',
    database: 'petlovers',
    define: {
      timestamps: true,
      freezeTableName: true,
    },
  });

  await sequelize.authenticate();
  console.log('Conexão com o banco de dados estabelecida com sucesso');

  return sequelize;
};
