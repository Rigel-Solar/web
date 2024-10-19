import * as z from "zod";

const tecnicoSchema = z.object({
	crea: z.string().min(3, "O crea precisa conter no mínimo 3 caracteres"),
	usuario: z.object({
		nome: z
			.string()
			.min(3, "O nome precisa conter no mínimo 3 caracteres")
			.transform((nome) => {
				return nome
					.trim()
					.split(" ")
					.map((word) => {
						return word[0].toLocaleUpperCase().concat(word.substring(1));
					})
					.join(" ");
			}),
		email: z.string().email("Digite um e-mail válido").toLowerCase(),
		senha: z.string().min(8, "A senha precisa conter no mínimo 8 caracteres"),
	}),
});

type TecnicoTS = z.infer<typeof tecnicoSchema>;

export { tecnicoSchema };
export type { TecnicoTS };
