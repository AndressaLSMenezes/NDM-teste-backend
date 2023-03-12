import { Router } from "express";
import { ensureTeamIdMiddleware } from "../middlewares/ensureTeamId.middleware.js";
import { validatedDataMiddleware } from "../middlewares/validatedData.middlewares.js";
import {
  createTeamController,
  deleteTeamController,
  getAllTeamsController,
  getTeamByIdController,
  updateTeamController,
} from "../controllers/teams.controllers.js";
import { requestTeamSerializer } from "../serializers/teams.serializers.js";

const teamsRouter = Router();

teamsRouter.post(
  "",
  validatedDataMiddleware(requestTeamSerializer),
  createTeamController
);
teamsRouter.get("", getAllTeamsController);
teamsRouter.get("/:id",  ensureTeamIdMiddleware, getTeamByIdController);
teamsRouter.patch(
  "/:id",
  ensureTeamIdMiddleware,
  validatedDataMiddleware(requestTeamSerializer),
  updateTeamController
);
teamsRouter.delete("/:id", ensureTeamIdMiddleware, deleteTeamController);

export { teamsRouter };
