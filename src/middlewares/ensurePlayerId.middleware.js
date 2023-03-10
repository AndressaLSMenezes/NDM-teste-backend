import { database } from "../database.js";
import { AppError } from "../errors/appError.js";

const ensurePlayerIdMiddleware = async (req, res, next) => {
  const id = req.params.id;
  const findPlayer = await database.query(
    `
        SELECT
            *
        FROM
            jogadores
        WHERE
            id = $1;
        `,
    [id]
  );
  if (!findPlayer.rows[0]) {
    throw new AppError("Jogador não encontrado", 404);
  }
  next();
};

export { ensurePlayerIdMiddleware };
