import express from 'express';
import * as Joi from 'joi';
import { initModule } from '../services/init-module';
import { UserService } from '../app/user-service';

const createUserBodySchema = Joi.object({
  email: Joi.string().required().min(3),
  password: Joi.string().required().min(3),
});

const updateUserBodySchema = Joi.object({
  email: Joi.string().required().min(3),
  password: Joi.string().required().min(3),
});

const userParamsSchema = Joi.object({
  user_id: Joi.number().integer().min(1).required(),
});

export const create = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const record = await createUserBodySchema.validateAsync(req.body);
    const result = await initModule(req, UserService).create(record);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const read = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const { user_id: userId } = await userParamsSchema.validateAsync(req.params);
    const result = await initModule(req, UserService).read(userId);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const update = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const record = await updateUserBodySchema.validateAsync(req.body);
    const { user_id: userId } = await userParamsSchema.validateAsync(req.params);
    const result = await initModule(req, UserService).update(userId, record);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const destroy = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const { user_id: userId } = await userParamsSchema.validateAsync(req.params);
    await initModule(req, UserService).delete(userId);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export const list = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    await initModule(req, UserService).list();
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
