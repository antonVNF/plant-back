// src/services/plant.service.ts
import { IPlant } from "../controllers/plant.controller";
import { PLANTS } from "../data/plant.data";

export const plantService = {
    getAll: (): IPlant[] => {
        return PLANTS;
    },

    getById: (id: number): IPlant | undefined => {
        return PLANTS.find(plant => plant.id === id);
    },

    create: (name: string): IPlant => {
        const id = PLANTS.length ? Math.max(...PLANTS.map(p => p.id)) + 1 : 1;
        const newPlant: IPlant = { id, name };
        PLANTS.push(newPlant);
        return newPlant;
    },

    update: (id: number, name: string): IPlant | null => {
        const index = PLANTS.findIndex(plant => plant.id === id);
        if (index === -1) return null;

        const updatedPlant: IPlant = { id, name };
        PLANTS[index] = updatedPlant;
        return updatedPlant;
    },

    delete: (id: number): boolean => {
        const index = PLANTS.findIndex(plant => plant.id === id);
        if (index === -1) return false;

        PLANTS.splice(index, 1);
        return true;
    }
};
