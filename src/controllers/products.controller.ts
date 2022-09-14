import { Request, Response, NextFunction } from 'express';
import ProductService from '../services/products.service';
import { IProduct } from '../interfaces/products.interface';

class ProductController {
  private service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  public async getAll(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const product: IProduct[] = await this.service.getAll();

      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }
}

export default ProductController;