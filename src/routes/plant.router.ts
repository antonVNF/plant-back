import { Router } from "express";
import {
  createPlant,
  getAllPlants,
  getPlantById,
  updatePlant,
  deletePlant,
} from "../controllers/plant.controller";
import { validateIdParam } from "../middleware/validate.middleware";

const plantRouter = Router();

plantRouter.get("/", getAllPlants);
plantRouter.get("/:id", validateIdParam, getPlantById);
plantRouter.post("/", createPlant);
plantRouter.put("/:id", validateIdParam, updatePlant);
plantRouter.delete("/:id", validateIdParam, deletePlant);

export default plantRouter;
