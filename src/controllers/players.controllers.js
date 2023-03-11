import { createPlayerService } from "../services/players/createPlayer.service";
import { deletePlayerService } from "../services/players/deletePlayer.service";
import { getAllPlayersService } from "../services/players/getAllPlayers.service";

const createPlayerController = async (request, response) => {
  const data = await createPlayerService(request.body);
  return response.status(201).json(data);
};

const getAllPlayersController = async (request, response) => {
  const data = await getAllPlayersService(request.body);
  return response.status(201).json(data);
};

const deletePlayerController = async (request, response) => {
  const data = await deletePlayerService(request.body);
  return response.status(201).json(data);
};

export { createPlayerController, getAllPlayersController, deletePlayerController };
