import { database } from "../../database";
import { responsePlayerSerializer } from "../../serializers/players.serializers";

const getPlayerByIdService = async (id) => {
  const queryResponse = await database.query(
    `
    SELECT * FROM jogadores 
    WHERE id = $1;
    `, 
    [id]
  );

  const returnPlayer = responsePlayerSerializer.validate(queryResponse.rows[0]);

  return returnPlayer;
};

export { getPlayerByIdService };
