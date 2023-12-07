import { Router } from 'express';
import ServicoController from '../controllers/ServicoController';

const router = Router();

// Lista de rotas
router.get('/listar', ServicoController.listarServicos); // lista todos
router.post('/cadastrar', ServicoController.criarServico);
router.get('/listar/:id', ServicoController.listarServicoPorId); // lista especificamente um
router.put('/atualizar/:id', ServicoController.atualizarServico);
router.delete('/apagar/:id', ServicoController.apagarServico);

export default router;
