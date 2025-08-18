
import {Router} from "express"
import {getAllPlants, getPlantById} from "../controllers/plant.controller";

const router = Router()


router.get("/plants", getAllPlants)
router.get("/plants/:id", getPlantById)

export default router