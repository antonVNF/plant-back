import {Request, Response} from "express"

export interface IPlant {
    id: number,
    name: string
}

const PLANTS: IPlant[] = [
    { id: 1, name: "Saphina" },
    { id: 2, name: "Afina" }
];

export const getAllPlants = (req: Request, res: Response): void => {
    res.json(PLANTS);
};

export const getPlantById = async (req: Request, res: Response): Promise<void> => {
    const id: number = Number(req.params.id);
    const plant: IPlant | undefined = PLANTS.find(plant => plant.id === id);

    if (!plant) {
        res.status(404).json({ error: "Plant not found" });
        return; // 🔑 важно остановить дальнейшее выполнение
    }

    res.json(plant);
};
