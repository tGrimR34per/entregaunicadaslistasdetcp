import express from 'express';
import bodyParser from 'body-parser';
import { initializeSequelize } from './db/conexao';

// Importando Modelos
import Usuario from './models/Usuario';
import Pet from './models/Pet'
import Servico from './models/Servico';
import Produto from './models/Produto';

// Importando Rotas
import UsuarioRotas from './routes/UsuarioRoutes';
import PetRotas from './routes/PetRoutes';
import ServicoRotas from './routes/ServicoRoutes';
import ProdutoRotas from './routes/ProdutoRoutes';

const app = express();
const router = express.Router();
const cors = require('cors')

// Body Parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORS - Axios
app.use(cors({ credentials: false, origin: 'http://localhost:5000' }));

// Usando routes
app.use('/usuarios', UsuarioRotas);
app.use('/pets', PetRotas);
app.use('/servicos', ServicoRotas);
app.use('/produtos', ProdutoRotas);

// Conectando com banco de dados
initializeSequelize()
    .then((sequelize) => {
        console.log('Sequelize inicializado com sucesso');
        // Iniciando as tabelas
        Pet.initialize(sequelize);
        Produto.initialize(sequelize);
        Servico.initialize(sequelize);
        Usuario.initialize(sequelize);
        return sequelize.sync();
    })
    .then(() => {
        console.log('Modelos sincronizados com o banco de dados');
        // Ouvindo a porta 3000
        app.listen(3000, () => {
            console.log(`Servidor rodando na porta 3000`);
        });
    })
    .catch((error) => {
        console.error('Erro ao iniciar o servidor:', error);
    });
