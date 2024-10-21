import * as z from "zod";

const orderSchema = z.object({
	id: z.string().nullable(),
	idCliente: z.string(),
	idTecnico: z.string().nullable(),
	tipoInstalacao: z.string(),
	solucoes: z.string(),
	pretendeInstalarEm: z.string(),
	valorContaLuz: z.number(),
	concessionarias: z.string(),
	comentarios: z.string(),
});

type OrderTS = z.infer<typeof orderSchema>;

export { orderSchema };
export type { OrderTS };
