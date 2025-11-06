import * as z from "zod";

const orderSchema = z.object({
	idCliente: z.string(),
	idClienteNome: z.string(),
	idClienteEmail: z.string().email("Digite um e-mail válido").toLowerCase(),
	idTecnicoNome: z.string(),
	idTecnico: z.string().nullable(),
	tipoInstalacao: z.string(),
	solucoes: z.string(),
	pretendeInstalarEm: z.string(),
	valorContaLuz: z.number(),
	concessionaria: z.string(),
	comentarios: z.string(),
});

type OrderTS = z.infer<typeof orderSchema>;

export { orderSchema };
export type { OrderTS };

