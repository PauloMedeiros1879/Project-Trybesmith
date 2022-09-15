import jwt from 'jsonwebtoken';
import { secret } from '../jwt';
import { IUserPayload } from '../interfaces/user.interface';

const tokenVerification = (token: string): IUserPayload => {
  const payload = jwt.verify(token, secret);

  return payload as IUserPayload;
};

export default tokenVerification;