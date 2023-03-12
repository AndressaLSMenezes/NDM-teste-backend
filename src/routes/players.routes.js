import { Router } from "express";
import { ensurePlayerIdMiddleware } from "../middlewares/ensurePlayerId.middleware.js";
import { ensureTeamIdMiddleware } from "../middlewares/ensureTeamId.middleware.js";
import {
  createPlayerController,
  deletePlayerController,
  getAllPlayersController,
  getPlayerByIdController,
  updatePlayerController,
} from "../controllers/players.controllers.js";
import {
  requestPlayerSerializer,
  updatePlayerSerializer,
} from "../serializers/players.serializers.js";
import { validatedDataMiddleware } from "../middlewares/validatedData.middlewares.js";

const playersRouter = Router();

playersRouter.post(
  "",
  validatedDataMiddleware(requestPlayerSerializer),
  ensureTeamIdMiddleware,
  createPlayerController
);
playersRouter.get("", getAllPlayersController);
playersRouter.get("/:id", ensurePlayerIdMiddleware, getPlayerByIdController);
playersRouter.patch(
  "/:id",
  validatedDataMiddleware(updatePlayerSerializer),
  ensurePlayerIdMiddleware,
  updatePlayerController
);
playersRouter.delete("/:id", ensurePlayerIdMiddleware, deletePlayerController);

export { playersRouter };
