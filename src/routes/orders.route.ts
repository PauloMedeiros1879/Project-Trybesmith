import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';

const router = Router();

const ordersController = new OrdersController();

router.get('/', ordersController.getAll.bind(ordersController));
router.post('/', ordersController.create.bind(ordersController));

export default router;