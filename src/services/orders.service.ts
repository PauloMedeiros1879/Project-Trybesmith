import OrderModel from '../models/orders.model';
import ProductModel from '../models/products.model';
import { IOrder, INewOrder } from '../interfaces/orders.interface';
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

  public async create(productsIds: number[], userId: number): Promise<INewOrder> {
    const { id } = await this.model.create(userId);
    const productModel = new ProductModel();
    const upPromises = productsIds
      .map((productId) => productModel.update(productId, id));

    await Promise.all(upPromises);

    return {
      userId,
      productsIds,
    };
  }
}

export default OrdersService;