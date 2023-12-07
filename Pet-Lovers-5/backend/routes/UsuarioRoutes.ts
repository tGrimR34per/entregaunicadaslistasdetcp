import { Router } from 'express';
import UsuarioController from '../controllers/UsuarioController';

const router = Router();

// Lista de rotas
router.get('/listar', UsuarioController.listarUsuarios); // lista todos
router.post('/cadastrar', UsuarioController.criarUsuario);
router.get('/listar/:id', UsuarioController.listarUsuarioPorId); // lista especificamente um
router.put('/atualizar/:id', UsuarioController.atualizarUsuario);
router.delete('/apagar/:id', UsuarioController.apagarUsuario);

export default router;
