import { Request, Response, NextFunction } from 'express';
import { INewUser, IUserLogin } from '../interfaces/user.interface';
import UserService from '../services/user.service';

class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { username, classe, level, password }: INewUser = req.body;
      const token = await this.service.create({ username, classe, level, password });

      res.status(201).json({ token });
    } catch (error) {
      next(error);
    }
  }

  public async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { username, password }: IUserLogin = req.body;
      const token = await this.service.login({ username, password });

      res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;