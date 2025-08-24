import { Request, Response, NextFunction } from "express";

export const validateIdParam = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }
  next();
};
