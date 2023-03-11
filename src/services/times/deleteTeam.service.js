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

  return { message: "Jogador excluído com sucesso" };
};

export { deleteTeamService };
