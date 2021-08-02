import { BaseApplication } from './base-application';
import { RestApplication } from './rest-application';
import User from '../models/user';
import user from '../routes/user';

export type UserType = {
  email?: string;
  password?: string;
  password_hash?: string;
};

export class UserService extends BaseApplication implements RestApplication<UserType> {
  async create(record: UserType): Promise<any> {
    try {
      const result = new User({ email: record.email });
      console.log(result);
    } catch (error) {

    }
  }

  delete(recordId: number): Promise<void> {
    return Promise.resolve(undefined);
  }

  list(): Promise<UserType[]> {
    return Promise.resolve([]);
  }

  read(recordId: UserType): Promise<UserType> {
    throw this.returnNotFound();
  }

  update(recordId: number, record: UserType): Promise<UserType> {
    return Promise.resolve(undefined);
  }

}
