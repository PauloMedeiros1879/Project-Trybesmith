import { Router } from 'express';
import UserController from '../controllers/user.controller';
import validateUser from '../middlewares/use.middlewares';

const router = Router();

const userController = new UserController();

router.post('/', validateUser, userController.create.bind(userController));
router.post('/', validateLogin, userController.login.bind(userController));

export default router;