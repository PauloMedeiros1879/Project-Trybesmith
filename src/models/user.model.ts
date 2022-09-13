import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/user.model';
import connection from './connection';

class UserModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async create(user: IUser): Promise<IUser> {
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
}

export default UserModel;