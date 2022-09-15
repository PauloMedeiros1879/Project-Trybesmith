import OrdersModel from '../models/orders.model';
import { IOrders } from '../interfaces/orders.interface';

class OrdersService {
  private model: OrdersModel;

  constructor() {
    this.model = new OrdersModel();
  }

  public async getAll(): Promise<IOrders[]> {
    const orders: IOrders[] = await this.model.getAll();

    return orders;
  }
}

export default OrdersService;