import { OrderTS } from "../utils/pedidoSchema";

const orders: OrderTS[] = Array.from({ length: 30 }, (_, i) => ({
	idCliente: `${i + 1}`,
	idTecnico: `${i + 1}`,
	tipoInstalacao: i % 2 === 0 ? "Residência" : "Empresa",
	solucoes:
		i % 3 === 0
			? "Fotovoltaico Residencial"
			: i % 3 === 1
				? "Aquecedor Banho"
				: "Aquecedor Piscina",
	pretendeInstalarEm: `3 meses`,
	valorContaLuz: 100 + i * 10,
	concessionarias: `Concessionária ${i + 1}`,
	comentarios: `Comentário do pedido ${i + 1}`,
}));

export { orders };
