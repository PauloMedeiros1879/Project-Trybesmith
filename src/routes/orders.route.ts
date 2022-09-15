import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';
import orderAuthentication from '../middlewares/authentication.middleware';
import orderValidate from '../middlewares/order.middleware';

const router = Router();

const ordersController = new OrdersController();

router.get('/', ordersController.getAll.bind(ordersController));
router.post(
  '/',
  orderAuthentication,
  orderValidate,
  ordersController.create.bind(ordersController),
);

export default router;