import * as z from "zod";

const orderSchema = z.object({
	client: z.string(),
});

type OrderTS = z.infer<typeof orderSchema>;

export { orderSchema };
export type { OrderTS };
