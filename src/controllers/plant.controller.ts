import { Request, Response } from "express";
import { createPlantSchema, updatePlantSchema } from "../schemas/plant.schema";
import { plantService } from "../services/plant.service";

export interface IPlant {
  id: number;
  name: string;
}

export const getAllPlants = (_req: Request, res: Response) => {
  const plants = plantService.getAll();
  res.json(plants);
};

export const getPlantById = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) return res.status(400).json({ error: "Invalid id" });

  const plant = plantService.getById(id);
  if (!plant) return res.status(404).json({ error: "Plant not found" });

  res.json(plant);
};

export const createPlant = (req: Request, res: Response) => {
  const parse = createPlantSchema.safeParse(req.body);
  if (!parse.success)
    return res.status(400).json({ error: parse.error.issues[0].message });

  const newPlant = plantService.create(parse.data.name.trim());
  res.status(201).json(newPlant);
};

export const updatePlant = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) return res.status(400).json({ error: "Invalid id" });

  const parse = updatePlantSchema.safeParse(req.body);
  if (!parse.success)
    return res.status(400).json({ error: parse.error.issues[0].message });

  const updatedPlant = plantService.update(id, parse.data.name?.trim());
  if (!updatedPlant) return res.status(404).json({ error: "Plant not found" });

  res.json(updatedPlant);
};

export const deletePlant = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) return res.status(400).json({ error: "Invalid id" });

  const deleted = plantService.delete(id);
  if (!deleted) return res.status(404).json({ error: "Plant not found" });

  res.status(204).send();
};
