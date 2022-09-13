import { Request, Response, NextFunction } from 'express';
import IUser from '../interfaces/user.model';
import UserService from '../services/user.service';

class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { username, classe, level, password }: IUser = req.body;
      const token = await this.service.create({ username, classe, level, password });

      res.status(201).json({ token });
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;