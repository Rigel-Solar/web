import * as z from "zod";

const orderSchema = z.object({
	client: z.object({
		name: z.string(),
		email: z.string().email(),
		type: z.string(),
		address: z.object({
			street: z.string(),
			number: z.string(),
			city: z.string(),
			neighbourhood: z.string(),
			zipCode: z.string(),
		}),
	}),
	type_person: z.string(),
	type_order: z.string(),
	time: z.string(),
	light_cost: z.number(),
	comments: z.string(),
});

type OrderTS = z.infer<typeof orderSchema>;

export { orderSchema };
export type { OrderTS };
