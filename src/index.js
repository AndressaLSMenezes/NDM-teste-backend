import "express-async-errors";
import "dotenv/config";
import express from "express";
import { startDatabase } from "./database.js";
import { handleAppError } from "./errors/handleAppError.js";
import { teamsRouter } from "./routes/teams.routes.js";
import { playersRouter } from "./routes/players.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/times", teamsRouter);
app.use("/jogadores", playersRouter);
app.use(handleAppError);

export default app.listen(PORT, async () => {
  await startDatabase();
  console.log(`Aplicativo em execução no http://localhost:${PORT}`);
});
