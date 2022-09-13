import { Request } from 'express';
import { IUserPayload } from './user.interface';

export interface ICustomRequest extends Request {
  user?: IUserPayload;
}