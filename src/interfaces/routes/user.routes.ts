import express from 'express';
import { UserController } from '../controllers/user.controller';

const router = express.Router();
const userController = new UserController();

router.post('/', userController.createUser);
router.get('/:id', userController.getUser);
router.get('/', userController.getAllUsers);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;