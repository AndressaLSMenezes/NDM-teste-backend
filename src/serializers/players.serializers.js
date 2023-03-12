import * as yup from "yup";
import { database } from "../database.js";

const requestPlayerSerializer = yup.object().shape({
  nome: yup.string().required("O nome do jogador é obrigatório."),
  idade: yup.number().integer().required("A idade do jogador é obrigatória."),
  time_id: yup
    .number()
    .integer()
    .required("O time_id é obrigatório.")
    .test(
      "time-id-exists",
      "O time_id fornecido não existe na tabela de times.",
      async (value) => {
        const { rows } = await database.query(
          `SELECT * FROM "times" WHERE id = $1`,
          [value]
        );
        return rows.length > 0;
      }
    ),
});

const updatePlayerSerializer = yup.object().shape({
  nome: yup.string(),
  idade: yup.number().integer(),
  time_id: yup.number().integer(),
});

const responsePlayerSerializer = yup.object().shape({
  id: yup.number().integer().required(),
  nome: yup.string().required("O nome do jogador é obrigatório."),
  idade: yup.number().integer().required("A idade do jogador é obrigatória."),
  time_id: yup.number().integer().required("O time_id é obrigatório."),
});

const listPlayersSerializer = yup.array().of(responsePlayerSerializer);

export {
  requestPlayerSerializer,
  updatePlayerSerializer,
  responsePlayerSerializer,
  listPlayersSerializer,
};
