import { database } from "../../database.js";

const getAllTeamsService = async () => {
  const queryResponse = await database.query(`
  SELECT
    times.id AS time_id,
    times.nome AS time_nome,
    jogadores.id AS jogador_id,
    jogadores.nome AS jogador_nome,
    jogadores.idade AS jogador_idade
  FROM
    times
    LEFT JOIN jogadores ON times.id = jogadores.time_id;
`);

  const teams = [];
  const teamMap = new Map();

  queryResponse.rows.forEach((row) => {
    const teamId = row.time_id;
    const team = teamMap.get(teamId) ?? {
      id: teamId,
      nome: row.time_nome,
      jogadores: [],
    };

    if (row.jogador_id) {
      const jogador = {
        id: row.jogador_id,
        nome: row.jogador_nome,
        idade: row.jogador_idade,
      };

      team.jogadores.push(jogador);
    }

    teamMap.set(teamId, team);
  });

  teamMap.forEach((team) => {
    teams.push(team);
  });

  return teams;
};

export { getAllTeamsService };
