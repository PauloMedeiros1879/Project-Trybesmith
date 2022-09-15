import { Request, Response, NextFunction } from 'express';
import OrdersService from '../services/orders.service';
import { IOrders } from '../interfaces/orders.interface';

class OrdersController {
  private service: OrdersService;

  constructor() {
    this.service = new OrdersService();
  }

  public async getAll(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const orders: IOrders[] = await this.service.getAll();

      res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  }
}

export default OrdersController;