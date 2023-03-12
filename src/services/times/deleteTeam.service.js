import { database } from "../../database";

const deleteTeamService = async (id) => {
  const queryResponse = await database.query(
    `
        DELETE
        FROM
            times 
        WHERE 
            id = $1;
    `,
    [id]
  );

  return queryResponse;
};

export { deleteTeamService };
