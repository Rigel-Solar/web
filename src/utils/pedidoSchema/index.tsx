import * as z from "zod";

const orderSchema = z.object({
	idCliente: z.string(),
	idTecnico: z.string(),
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
