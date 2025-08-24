import { logger } from "./utils/logger";
import { connectDB } from "./utils/db";
import app from "./app";

const PORT = process.env.PORT || 4200;

connectDB().then(() => {
  app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
  });
});
