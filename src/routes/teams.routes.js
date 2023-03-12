import { Router } from "express";
import { ensureTeamIdMiddleware } from "../middlewares/ensureTeamId.middleware";
import { validatedDataMiddleware } from "../middlewares/validatedData.middlewares";
import {
  createTeamController,
  deleteTeamController,
  getAllTeamsController,
  getTeamByIdController,
  updateTeamController,
} from "../controllers/teams.controllers";
import { requestTeamSerializer } from "../serializers/teams.serializers";

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
