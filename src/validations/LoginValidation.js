import { z } from "zod";

const CPF = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;

const ValidacaoFormularioLogin = z.object({
  cpf: z.string().regex(CPF, "Número de CPF inválido"),
  email: z
    .string()
    .nonempty("O e-mail é obrigatório")
    .email("Formato de e-mail é inválido")
    .toLowerCase(),
  nome: z
    .string()
    .nonempty("Este campo não pode ficar vazio")
    .transform((name) => {
      return name
        .trim()
        .toLocaleLowerCase()
        .split(" ")
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        })
        .join(" ");
    }),
});

export default ValidacaoFormularioLogin;
