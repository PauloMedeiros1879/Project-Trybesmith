import jwt from 'jsonwebtoken';
import { secret, options } from '../jwt';

const generateToken = (username: string, userId: number): string => {
  const token = jwt.sign({ username, userId }, secret, options);

  return token;
};

export default generateToken;