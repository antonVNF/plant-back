import { z } from "zod";

export const createPlantSchema = z.object({
  name: z.string().min(1, "name is required"),
});

export const updatePlantSchema = z.object({
  name: z.string().min(1, "name is required"),
});

export type CreatePlantDTO = z.infer<typeof createPlantSchema>;
export type UpdatePlantDTO = z.infer<typeof updatePlantSchema>;
