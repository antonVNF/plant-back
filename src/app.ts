import express from "express";
import plantRouter from "./routes/plant.router";
import { errorHandler } from "./middleware/error.middleware";

const app = express();
app.use(express.json());

app.use("/plants", plantRouter);

app.use(errorHandler);

export default app;
