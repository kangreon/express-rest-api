import express from "express";

export type ThrowError = {
  status?: number;
  message?: string;
};

class AppError extends Error {
  status: number;
}

export const throwError = (options: ThrowError) => {
  const message = options.message || 'Unexpected error!';
  const status = options.status || 500;
  const error = new AppError(message);
  error.message = message;
  error.status = status;
  throw error;
}

export const errorHandler = (
  err: AppError,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  res
    .status(err.status || 500)
    .json({
      error: true,
      message: err.message,
    })
    .send()
};
