import { Secret, SignOptions } from 'jsonwebtoken';
import 'dotenv/config';

export const secret: Secret = process.env.SECRET || 'somesecret';

export const options: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '1d',
};