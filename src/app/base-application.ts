import express from 'express';
import { throwError } from '../middlewares/handle-error';

export class BaseApplication {
  protected request: express.Request;

  constructor(req: express.Request) {
    this.request = req;
    this.doCreate();
  }

  protected doCreate() {

  }

  returnError(code: number, message: string): void {
    throwError({
      status: code,
      message: message,
    })
  }

  returnNotFound(message = 'Record(s) not found!'): void {
    this.returnError(404, message);
  }
}
