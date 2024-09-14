import * as z from "zod";

const gestorSchema = z.object({
	email: z.string().email("Digite um e-mail válido").toLowerCase(),
	password: z.string().min(8, "A senha precisa conter no mínimo 8 caracteres"),
});

type GestorTS = z.infer<typeof gestorSchema>;

export { gestorSchema };
export type { GestorTS };
