import { Router } from "express";
import { ensureTeamIdMiddleware } from "../middlewares/ensureTeamId.middleware";
import { validatedDataMiddleware } from "../middlewares/validatedData.middlewares";
import { createTeamController, getAllTeamsController } from "../controllers/teams.controllers";
import { requestTeamSerializer } from "../serializers/teams.serializers";

const teamsRouter = Router();

teamsRouter.post("", validatedDataMiddleware(requestTeamSerializer), createTeamController);
teamsRouter.get("", getAllTeamsController);
// teamsRouter.get("/:id", ensureTeamIdMiddleware);
// teamsRouter.patch("/:id", ensureTeamIdMiddleware);
// teamsRouter.delete("/:id", ensureTeamIdMiddleware);

export { teamsRouter };
