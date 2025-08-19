import {Request, Response} from "express"
import {createPlantSchema, updatePlantSchema} from "../schemas/plant.schema";

export interface IPlant {
    id: number,
    name: string
}

export const PLANTS: IPlant[] = [
    { id: 1, name: "Saphina" },
    { id: 2, name: "Afina" }
];

let nextId = 3

export const getAllPlants = (req: Request, res: Response): void => {
    res.json(PLANTS);
};

export const getPlantById = async (req: Request, res: Response): Promise<void> => {
    const id: number = Number(req.params.id);
    const plant: IPlant | undefined = PLANTS.find(plant => plant.id === id);

    if (!plant) {
        res.status(404).json({ error: "Plant not found" });
        return;
    }

    res.json(plant);
};

export const  createPlant = async (req: Request, res: Response) => {
    const parse = createPlantSchema.safeParse(req.body)
    if(!parse.success){
    res.status(400).json({error: "name is required"})
        return
    }
    console.log(parse)
    const name = parse.data.name.trim();

    const id = PLANTS.length ? Math.max(...PLANTS.map(p => p.id)) + 1 : 1;

    const newPlant: IPlant = {
        id,
        name
    }
    PLANTS.push(newPlant)
    res.status(201).json(newPlant)
}


export const updatePlant = (req: Request, res: Response): void => {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
        res.status(400).json({ error: "Invalid id" });
        return;
    }

    const parse = updatePlantSchema.safeParse(req.body);
    if (!parse.success) {
        const msg = parse.error.errors[0]?.message || "Invalid body";
        res.status(400).json({ error: msg });
        return;
    }

    const idx = PLANTS.findIndex(p => p.id === id);
    if (idx === -1) {
        res.status(404).json({ error: "Plant not found" });
        return;
    }

    const current = PLANTS[idx];
    const incomingName = parse.data.name;
    const name = typeof incomingName === "string" ? incomingName.trim() : current.name;

    if (typeof name !== "string" || name.length === 0) {
        res.status(400).json({ error: "name is required" });
        return;
    }

    const updatedPlant: IPlant = { ...current, name };
    PLANTS[idx] = updatedPlant;

    res.status(200).json(updatedPlant);
};

export const deletePlant = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
        res.status(400).json({ error: "Invalid id" });
        return;
    }

    const idx = PLANTS.findIndex(plant => plant.id === id);
    if (idx === -1) {
        res.status(404).json({ error: "Plant not found" });
        return;
    }

    PLANTS.splice(idx, 1);

    res.status(204).send(); // No Content
};
