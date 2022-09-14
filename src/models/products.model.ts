import { Pool, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { IProduct, INewProduct } from '../interfaces/products.interface';

class ProductModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getAll(): Promise<IProduct[]> {
    const query = 'SELECT * FROM Trybesmith.Products';
    const [products] = await this.connection.execute(query);

    return products as IProduct[];
  }

  public async create(product: INewProduct): Promise<IProduct> {
    const { name, amount } = product;
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [name, amount]);

    return {
      id: insertId,
      name,
      amount,
    };
  }
}

export default ProductModel;