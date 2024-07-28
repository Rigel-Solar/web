import * as z from "zod";

const clientSchema = z.object({
	name: z
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
	password: z.string().min(8, "A senha precisa conter no mínimo 8 caracteres"),
	type: z.string().toLowerCase(),
	address: z.object({
		street: z.string().min(5, "O nome da rua precisa conter 5 caracteres"),
		number: z.string().min(1, "O número precisa conter no mínimo 1 caracter"),
		city: z.string().min(3, "O nome da cidade precisa conter 3 caracteres"),
		state: z.string().min(2, "O nome do estado precisa conter 2 caracteres"),
		zipCode: z.string().min(8, "O CEP precisa conter 8 caracteres"),
	}),
});

type ClientTS = z.infer<typeof clientSchema>;

export { clientSchema };
export type { ClientTS };
