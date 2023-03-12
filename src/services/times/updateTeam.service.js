import { database } from "../../database";
import { responseTeamSerializer } from "../../serializers/teams.serializers";

const updateTeamService = async (id, data) => {
  const values = Object.values(data);

  const queryResponse = await database.query(
    `
  UPDATE times SET nome = $1
  WHERE id = $2 RETURNING *;
  `,
    [values[0], id]
  );

  const returnTeam = await responseTeamSerializer.validate(
    queryResponse.rows[0]
  );

  return returnTeam;
};

export { updateTeamService };
