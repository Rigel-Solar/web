import * as z from "zod";

const tecnicoSchema = z.object({
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
});

type tecnicoTS = z.infer<typeof tecnicoSchema>;

export { tecnicoSchema };
export type { tecnicoTS };
