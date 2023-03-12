import { createPlayerService } from "../services/players/createPlayer.service";
import { deletePlayerService } from "../services/players/deletePlayer.service";
import { getAllPlayersService } from "../services/players/getAllPlayers.service";
import { getPlayerByIdService } from "../services/players/getPLayerById.service";
import { updatePlayerService } from "../services/players/updatePlayer.service";

const createPlayerController = async (request, response) => {
  const data = await createPlayerService(request.body);
  return response.status(201).json(data);
};

const getAllPlayersController = async (request, response) => {
  const data = await getAllPlayersService(request.body);
  return response.status(201).json(data);
};

const getPlayerByIdController = async (request, response) => {
  const data = await getPlayerByIdService(request.params.id);
  return response.status(200).json(data);
};

const updatePlayerController = async (request, response) => {
  const data = await updatePlayerService(request.params.id, request.body);
  return response.status(200).json(data);
};

const deletePlayerController = async (request, response) => {
  const data = await deletePlayerService(request.params.id);
  return response.status(204).send();
};

export {
  createPlayerController,
  getAllPlayersController,
  getPlayerByIdController,
  updatePlayerController,
  deletePlayerController,
};
