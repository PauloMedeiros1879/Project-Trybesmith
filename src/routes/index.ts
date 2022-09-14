import { Router } from 'express';
import userRouter from './user.route';
import productRouter from './products.route';

const router = Router();

router.use('/users', userRouter);
router.use('/products', productRouter);

export default router;