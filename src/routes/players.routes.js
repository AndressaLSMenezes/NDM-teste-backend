import { Router } from "express";
import { ensurePlayerIdMiddleware } from "../middlewares/ensurePlayerId.middleware";
import { ensureTeamIdMiddleware } from "../middlewares/ensureTeamId.middleware";
import {
  createPlayerController,
  getAllPlayersController,
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
playersRouter.get("/:id", ensurePlayerIdMiddleware);
playersRouter.patch(
  "/:id",
  validatedDataMiddleware(updatePlayerSerializer),
  ensurePlayerIdMiddleware
);
playersRouter.delete("/:id", ensurePlayerIdMiddleware);

export { playersRouter };
