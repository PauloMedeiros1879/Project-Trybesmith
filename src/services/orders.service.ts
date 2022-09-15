import OrderModel from '../models/orders.model';
import { IOrder } from '../interfaces/orders.interface';
import regularOrders from '../helpers/regularOrders';

class OrdersService {
  private model: OrderModel;

  constructor() {
    this.model = new OrderModel();
  }

  public async getAll(): Promise<IOrder[]> {
    const orders = await this.model.getAll();
    const regOrders = regularOrders(orders);

    return regOrders;
  }
}

export default OrdersService;