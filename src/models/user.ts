import Database from '../services/database';

const db = Database.getInstance();
const bookshelf = db.getBookshelf();

export default class User extends bookshelf.Model<User> {
  get tableName() {
    return 'users';
  }

  get hasTimestamps() {
    return true;
  }
}
