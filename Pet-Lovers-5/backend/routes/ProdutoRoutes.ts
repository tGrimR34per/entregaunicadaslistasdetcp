import { Router } from 'express';
import ProdutoController from '../controllers/ProdutoController';

const router = Router();

// Lista de rotas
router.get('/listar', ProdutoController.listarProdutos); // lista todos
router.post('/cadastrar', ProdutoController.criarProduto);
router.get('/listar/:id', ProdutoController.listarProdutoPorId); // lista especificamente um
router.put('/atualizar/:id', ProdutoController.atualizarProduto);
router.delete('/apagar/:id', ProdutoController.apagarProduto);

export default router;
