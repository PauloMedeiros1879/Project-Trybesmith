import { Pool, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { IOrders, IBaseOrder } from '../interfaces/orders.interface';

class OrdersModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrders[]> {
    const query = `
      SELECT ord.id, ord.userId, p.id AS productId
      FROM Trybesmith.Orders AS ord
      INNER JOIN Trybesmith.Products AS p ON p.orderId = ord.id
    `;
    const [orders] = await this.connection.execute(query);

    return orders as IOrders[];
  }

  public async create(userId: number): Promise<IBaseOrder> {
    const query = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [userId]);

    return {
      id: insertId,
      userId,
    };
  }
}

export default OrdersModel;