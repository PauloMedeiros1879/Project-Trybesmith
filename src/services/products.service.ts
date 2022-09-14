import { IProduct } from '../interfaces/products.interface';
import ProductModel from '../models/products.model';

class ProductService {
  private model: ProductModel;

  constructor() {
    this.model = new ProductModel();
  }

  public async getAll(): Promise<IProduct[]> {
    const product: IProduct[] = await this.model.getAll();

    return product;
  }
}

export default ProductService;