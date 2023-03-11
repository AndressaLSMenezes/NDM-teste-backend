import { app } from "./app";
import "dotenv/config";
import "express-async-errors";
import { startDatabase } from "./database";

const PORT = process.env.PORT || 8000;

export default app.listen(PORT, async () => {
  await startDatabase();
  console.log(`Aplicativo em execução no http://localhost:${PORT}`);
});
