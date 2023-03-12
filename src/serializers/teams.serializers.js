import * as yup from "yup";
import { listPlayersSerializer } from "./players.serializers.js";
const requestTeamSerializer = yup.object().shape({
  nome: yup.string().required("O nome do time é obrigatório."),
});

const responseTeamSerializer = yup.object().shape({
  id: yup.string().required(),
  nome: yup.string().required("O nome do time é obrigatório."),
  jogadores: listPlayersSerializer,
});

const listTeamsSerializer = yup.array().of(responseTeamSerializer);

export { requestTeamSerializer, responseTeamSerializer, listTeamsSerializer };
