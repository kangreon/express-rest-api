import knex from 'knex';
import Bookshelf from 'bookshelf';

export default class Database {
  private static instance: Database = new Database();

  protected knex: knex<any, unknown[]> = null;
  protected bookshelf: any = null;

  private constructor() {
    this.knex = knex({
      client: 'pg',
      connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'Asdf1234!',
        database: 'postgres',
        charset: 'utf8',
      },
    });

    this.bookshelf = Bookshelf(this.knex);

    Database.instance = this;
  }

  public static getInstance(): Database {
    return Database.instance;
  }

  public getKnex(): knex {
    return this.knex;
  }

  public getBookshelf(): Bookshelf {
    return this.bookshelf;
  }
}
