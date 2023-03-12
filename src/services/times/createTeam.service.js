import { database } from "../../database.js";
import { AppError } from "../../errors/appError.js";
import { responseTeamSerializer } from "../../serializers/teams.serializers.js";

const createTeamService = async ({ nome }) => {
  try {
    const queryResponse = await database.query(
      `
      INSERT INTO times(nome)
      VALUES ($1)
      RETURNING *;
      `,
      [nome]
    );

    const returnTeam = await responseTeamSerializer.validate(
      queryResponse.rows[0]
    );

    return returnTeam;
  } catch (error) {
    throw new AppError(error.message);
  }
};

export { createTeamService };
