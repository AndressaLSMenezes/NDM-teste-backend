import { database } from "../../database";

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

  return { message: "Jogador excluído com sucesso" };
};

export { deletePlayerService };