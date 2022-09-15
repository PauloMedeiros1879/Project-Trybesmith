import { Router } from 'express';
import UserController from '../controllers/user.controller';
import validateLogin from '../middlewares/login.middleware';

const router = Router();

const userController = new UserController();

router.post('/', validateLogin, userController.login.bind(userController));

export default router;