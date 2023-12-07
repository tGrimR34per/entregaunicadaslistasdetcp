import { Router } from 'express';
import PetController from '../controllers/PetController';

const router = Router();

// Lista de rotas
router.get('/listar', PetController.listarPets); // lista todos
router.post('/cadastrar', PetController.criarPet);
router.get('/listar/:id', PetController.listarPetPorId); // lista especificamente um
router.put('/atualizar/:id', PetController.atualizarPet);
router.delete('/apagar/:id', PetController.apagarPet);

export default router;
