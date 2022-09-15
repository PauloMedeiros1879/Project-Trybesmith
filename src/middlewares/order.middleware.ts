import { Request, Response, NextFunction } from 'express';
import getCustomError from '../helpers/getError';
import { IProductsOrder } from '../interfaces/orders.interface';
import orderSchema from '../schemas/orders.schemas';

const validateOrder = (req: Request, _res: Response, next: NextFunction): void => {
  const { productsIds }: IProductsOrder = req.body;
  const { error } = orderSchema.validate({ productsIds });

  if (error) {
    const customError = getCustomError(error);
    return next(customError);
  }

  next();
};

export default validateOrder;