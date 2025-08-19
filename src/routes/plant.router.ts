import { Router } from "express";
import { getAllPlants, getPlantById } from "../controllers/plant.controller";

const plantRouter = Router();

plantRouter.get("/", getAllPlants);
plantRouter.get("/:id", getPlantById);

export default plantRouter;