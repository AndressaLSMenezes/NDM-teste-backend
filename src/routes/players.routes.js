import { Router } from "express";
import { ensurePlayerIdMiddleware } from "../middlewares/ensurePlayerId.middleware";
import { ensureTeamIdMiddleware } from "../middlewares/ensureTeamId.middleware";
import {
  createPlayerController,
  deletePlayerController,
  getAllPlayersController,
  getPlayerByIdController,
  updatePlayerController,
} from "../controllers/players.controllers";
import {
  requestPlayerSerializer,
  updatePlayerSerializer,
} from "../serializers/players.serializers";
import { validatedDataMiddleware } from "../middlewares/validatedData.middlewares";

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
