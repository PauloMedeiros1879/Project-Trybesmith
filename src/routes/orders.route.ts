import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';
import OrderValidate from '../middlewares/order.middleware';

const router = Router();

const ordersController = new OrdersController();

router.get('/', ordersController.getAll.bind(ordersController));
router.post('/', OrderValidate, ordersController.create.bind(ordersController));

export default router;