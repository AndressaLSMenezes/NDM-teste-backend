import { database } from "../../database.js";
import { AppError } from "../../errors/appError.js";

const getAllPlayersService = async () => {
  const queryResponse = await database.query(
    `  SELECT 
        *
        FROM 
        jogadores;
    `
  );
  return queryResponse.rows
};

export { getAllPlayersService };
