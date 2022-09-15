import { Response, NextFunction } from 'express';
import { ICustomRequest } from '../interfaces/standard.interface';
import Unauthorized from '../errors/unauthorized.error';
import tokenVerification from '../helpers/tokenVerification';

const validateToken = (req: ICustomRequest, _res: Response, next: NextFunction): void => {
  try {
    const { authorization: token } = req.headers;

    if (!token) {
      return next(new Unauthorized('Token not found'));
    }

    const payload = tokenVerification(token);

    req.user = payload;

    next();
  } catch (error) {
    next(new Unauthorized('Invalid token'));
  }
};

export default validateToken;