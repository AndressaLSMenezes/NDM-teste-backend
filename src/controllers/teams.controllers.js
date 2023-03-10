import { createTeamService } from "../services/times/createTeam.service.js";
import { deleteTeamService } from "../services/times/deleteTeam.service.js";
import { getAllTeamsService } from "../services/times/getAllTeams.service.js";
import { getTeamByIdService } from "../services/times/getTeamById.service.js";
import { updateTeamService } from "../services/times/updateTeam.service.js";

const createTeamController = async (request, response) => {
  const data = await createTeamService(request.body);
  return response.status(201).json(data);
};

const getAllTeamsController = async (request, response) => {
  const data = await getAllTeamsService(request.body);
  return response.status(200).json(data);
};

const getTeamByIdController = async (request, response) => {
  const data = await getTeamByIdService(request.params.id);
  return response.status(200).json(data);
};

const updateTeamController = async (request, response) => {
  const data = await updateTeamService(request.params.id, request.body);
  return response.status(200).json(data);
};

const deleteTeamController = async (request, response) => {
  const data = await deleteTeamService(request.params.id);
  return response.status(204).send();
};

export {
  createTeamController,
  getAllTeamsController,
  getTeamByIdController,
  updateTeamController,
  deleteTeamController,
};
