import { database } from "../database";
import { AppError } from "../errors/appError";

const ensureTeamIdMiddleware = async (req, res, next) => {
  try {
    const id = req.params.id || req.body.time_id;
    const findTeam = await database.query(
      `
        SELECT
          *
        FROM
          times
        WHERE
          id = $1;
        `,
      [id]
    );

    if (!findTeam.rows.length) {
      throw new AppError("Time não encontrado");
    }
    next();
  } catch (err) {
    next(err);
  }
};

export { ensureTeamIdMiddleware };
