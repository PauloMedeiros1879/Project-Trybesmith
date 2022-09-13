import UserModel from '../models/user.model';
import { INewUser } from '../interfaces/user.interface';
import Token from '../helpers/token';

class UserService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  public async create(user: INewUser): Promise<string> {
    const { username, id } = await this.model.create(user);
    const token = Token(username, id);

    return token;
  }
}

export default UserService;