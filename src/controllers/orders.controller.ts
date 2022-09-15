import { Request, Response, NextFunction } from 'express';
import OrdersService from '../services/orders.service';
import { ICustomRequest } from '../interfaces/standard.interface';
import { IProductsOrder } from '../interfaces/orders.interface';

class OrdersController {
  private service: OrdersService;

  constructor() {
    this.service = new OrdersService();
  }

  public async getAll(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const orders = await this.service.getAll();

      res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  }

  public async create(req: ICustomRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const { productsIds }: IProductsOrder = req.body;

      if (req.user) {
        const { userId } = req.user;
        const orders = await this.service.create(productsIds, userId);

        res.status(201).json(orders);
      }
    } catch (error) {
      next(error);
    }
  }
}

export default OrdersController;