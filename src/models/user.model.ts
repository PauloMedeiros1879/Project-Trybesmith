import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser, INewUser, IUserLogin } from '../interfaces/user.interface';
import connection from './connection';

class UserModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async create(user: INewUser): Promise<IUser> {
    const { username, classe, level, password } = user;
    const query = `
      INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)
    `;
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(query, [username, classe, level, password]);

    return {
      id: insertId,
      username,
      classe,
      level,
      password,
    };
  }

  public async login(user: IUserLogin): Promise<IUser> {
    const { username, password } = user;
    const query = 'SELECT * FROM Trybesmith.Users WHERE username=? AND password=?';
    const [result] = await this.connection.execute(query, [username, password]);
    const [registeredUser] = result as IUser[];

    return registeredUser;
  }
}

export default UserModel;