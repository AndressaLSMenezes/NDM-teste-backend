import { createTeamService } from "../services/times/createTeam.service";
import { deleteTeamService } from "../services/times/deleteTeam.service";
import { getAllTeamsService } from "../services/times/getAllTeams.service";

const createTeamController = async (request, response) => {
  const data = await createTeamService(request.body);
  return response.status(201).json(data);
};

const getAllTeamsController = async (request, response) => {
  const data = await getAllTeamsService(request.body);
  return response.status(200).json(data);
};

const deleteTeamController = async (request, response) => {
  const data = await deleteTeamService(request.body);
  return response.status(204).json(data);
};

export { createTeamController, getAllTeamsController, deleteTeamController };
