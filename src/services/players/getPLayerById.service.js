import { database } from "../../database.js";
import { responsePlayerSerializer } from "../../serializers/players.serializers.js";

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
