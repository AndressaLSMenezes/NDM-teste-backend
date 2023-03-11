import { database } from "../../database";
import { AppError } from "../../errors/appError";

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
