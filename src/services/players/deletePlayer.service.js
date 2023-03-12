import { database } from "../../database.js";

const deletePlayerService = async (id) => {
  const queryResponse = await database.query(
    `
        DELETE
        FROM
            jogadores 
        WHERE 
            id = $1;
        `,
    [id]
  );
  return queryResponse
};

export { deletePlayerService };
