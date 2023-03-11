import { database } from "../database";
import { AppError } from "../errors/appError";

const ensurePlayerIdMiddleware = async (req, res, next) => {
  try {
    const id = req.params.id
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
    ).rows[0];
    if (!findPlayer) {
      throw new AppError("Jogador não encontrado", 404);
    }
    next();
  } catch (err) {
    next(err);
  }
};

export { ensurePlayerIdMiddleware };
