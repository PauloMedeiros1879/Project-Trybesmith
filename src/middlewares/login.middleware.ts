import { Request, Response, NextFunction } from 'express';
import loginSchema from '../schemas/login.schema';
import { IUserLogin } from '../interfaces/user.interface';
import getCustomError from '../helpers/getError';

const validateLogin = (req: Request, _res: Response, next: NextFunction): void => {
  const { username, password }: IUserLogin = req.body;
  const { error } = loginSchema.validate({ username, password });

  if (error) {
    const customError = getCustomError(error);
    return next(customError);
  }

  next();
};

export default validateLogin;