import * as z from "zod";

const clientSchema = z.object({
	nome: z
		.string()
		.min(3, "O nome precisa conter no mínimo 3 caracteres")
		.transform((name) => {
			return name
				.trim()
				.split(" ")
				.map((word) => {
					return word[0].toLocaleUpperCase().concat(word.substring(1));
				})
				.join(" ");
		}),

	email: z.string().email("Digite um e-mail válido").toLowerCase(),
	tipo: z.string(),
	endereco: z.object({
		street: z.string().min(5, "A rua precisa conter 5 caracteres"),
		number: z.string().min(1, "O número precisa conter 1 caracter"),
		city: z.string().min(3, "A cidade precisa conter 3 caracteres"),
		neighbourhood: z.string().min(2, "O bairro precisa conter 3 caracteres"),
		zipCode: z.string().min(8, "O CEP precisa conter 8 caracteres"),
	}),
});

type ClientTS = z.infer<typeof clientSchema>;

export { clientSchema };
export type { ClientTS };
