import { Request, Response, NextFunction } from 'express';
import { INewUser } from '../interfaces/user.interface';
import userSchema from '../schemas/user.schema';
import getCustomError from '../helpers/getError';

const validateUser = (req: Request, _res: Response, next: NextFunction): void => {
  const { username, classe, level, password }: INewUser = req.body;
  const { error } = userSchema.validate({ username, classe, level, password });

  if (error) {
    const customError = getCustomError(error);
    return next(customError);
  }

  next();
};

export default validateUser;