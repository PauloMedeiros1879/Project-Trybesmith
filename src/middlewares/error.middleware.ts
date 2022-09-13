import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import CustomError from '../errors/custom.error';

export default (err: ErrorRequestHandler, _req: Request, res: Response, _next: NextFunction)
: Response => {
  if (err instanceof CustomError) {
    return res.status(err.code).json({ message: err.message });
  }

  console.error(err);
  return res.status(500).json({ message: 'Internal server error' });
};