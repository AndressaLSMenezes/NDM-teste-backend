import { database } from "../../database";
import { AppError } from "../../errors/appError";
import { responsePlayerSerializer } from "../../serializers/players.serializers";

const createPlayerService = async ({ nome, idade, time_id }) => {
  const result = await database.query(
    `
      SELECT COUNT(*) AS count
      FROM jogadores
      WHERE time_id = $1;
    `,
    [time_id]
  );

  const players = result.rows[0];
  if (!players || players.count >= 5) {
    throw new AppError("Time está cheio");
  }

  const queryResponse = await database.query(
    `
      INSERT INTO jogadores(nome, idade, time_id)
      VALUES ($1, $2, $3)
      RETURNING *;
    `,
    [nome, idade, time_id]
  );

  const returnPlayer = await responsePlayerSerializer.validate(
    queryResponse.rows[0]
  );

  return returnPlayer;
};

export { createPlayerService };
