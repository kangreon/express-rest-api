import { BaseApplication } from '../app/base-application';
import express from 'express';

export const initModule = <T extends BaseApplication>(req: express.Request, module: new(req: express.Request) => T): T => {
  return new module(req);
};
