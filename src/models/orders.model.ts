import { Pool } from 'mysql2/promise';
import connection from './connection';
import { IOrders } from '../interfaces/orders.interface';

class OrdersModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrders[]> {
    const query = 'SELECT * FROM Trybesmith.Orders';
    const [orders] = await this.connection.execute(query);

    return orders as IOrders[];
  }
}

export default OrdersModel;