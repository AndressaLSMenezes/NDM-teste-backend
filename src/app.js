import express from "express";
import "express-async-errors";
import { handleAppError } from "./errors/handleAppError";
import { teamsRouter } from "./routes/teams.routes";
import { playersRouter } from "./routes/players.routes";

const app = express();

app.use(express.json());
app.use("/times", teamsRouter);
app.use("/jogadores", playersRouter);
app.use(handleAppError);

export { app };
