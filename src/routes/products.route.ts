import { Router } from 'express';
import ProductController from '../controllers/products.controller';
import validateProduct from '../middlewares/product.middleware';

const router = Router();

const productController = new ProductController();

router.get('/', productController.getAll.bind(productController));
router.post('/', validateProduct, productController.create.bind(productController));

export default router;