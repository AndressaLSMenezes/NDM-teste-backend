import { responseTeamSerializer } from "../../serializers/teams.serializers";
import { database } from "../../database";
import { responseTeamSerializer } from "../../serializers/teams.serializers";

import { database } from "../../database";
const getTeamByIdService = async (id) => {
  const queryResponse = await database.query(
    `
SELECT times.id AS time_id, times.nome AS time_nome, jogadores.id AS jogador_id, jogadores.nome AS jogador_nome, jogadores.idade AS jogador_idade FROM times LEFT JOIN jogadores ON times.id = jogadores.time_id WHERE times.id = $1;
`,
    [id]
  );
  const team = {
    id: null,
    nome: null,
    jogadores: [],
  };
  queryResponse.rows.forEach((row) => {
    if (!team.id) {
      team.id = row.time_id;
      team.nome = row.time_nome;
    }

    if (row.jogador_id) {
      const jogador = {
        id: row.jogador_id,
        nome: row.jogador_nome,
        idade: row.jogador_idade,
      };
      team.jogadores.push(jogador);
    }
  });
  return team;
};
export { getTeamByIdService };
