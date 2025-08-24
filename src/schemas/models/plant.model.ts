import { Schema, model } from "mongoose";

export interface IPlant {
  name: string;
}

const plantSchema = new Schema<IPlant>(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

export const Plant = model<IPlant>("Plant", plantSchema);
