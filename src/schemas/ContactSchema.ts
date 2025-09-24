import { z } from "zod";

export const contactSchema = z.object({
  title: z
    .string()
    .min(1, "O título é obrigatório")
    .max(50, "O título deve ter no máximo 50 caracteres"),
  //   email: z.email("O email é inválido").min(1, "O email é obrigatório"),
  name: z
    .string()
    .min(1, "O nome é obrigatório")
    .max(50, "O nome deve ter no máximo 50 caracteres"),
  message: z
    .string()
    .min(1, "A mensagem é obrigatória")
    .max(1000, "A mensagem deve ter no máximo 1000 caracteres"),
});
