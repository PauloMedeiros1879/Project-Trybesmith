import { Router } from 'express';
import userRouter from './user.route';
import productRouter from './products.route';
import orderRouter from './orders.route';

const router = Router();

router.use('/users', userRouter);
router.use('/products', productRouter);
router.use('/orders', orderRouter);

export default router;