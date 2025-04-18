import { NextFunction, Request, Response } from "express";

type AsyncFunction = (req: Request, res: Response, next: NextFunction) => Promise<any>;

const catchAsync = (fn: AsyncFunction) => {
  return async (req: any, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

export default catchAsync;
