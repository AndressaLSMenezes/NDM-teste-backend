import { database } from "../../database.js";
import { responsePlayerSerializer } from "../../serializers/players.serializers.js";

const updatePlayerService = async (id, data) => {
  let query = "UPDATE jogadores SET ";

  const keys = Object.keys(data);
  const values = Object.values(data);

  keys.forEach((key, index) => {
    query += `${key} = \$${(index += 1)}, `;
  });

  query = query.slice(0, -2);

  query += ` WHERE id = \$${(keys.length += 1)} RETURNING *;`;

  const queryResponse = await database.query(query, [...values, id]);

  const returnPlayer = await responsePlayerSerializer.validate(
    queryResponse.rows[0]
  );

  return returnPlayer;
};

export { updatePlayerService };
