import { Request, Response, NextFunction } from 'express';

export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    next(error); // Pass errors to Express error handler
  }
};