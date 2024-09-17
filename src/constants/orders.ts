import { OrderTS } from "../utils/pedidoSchema";

const orders: OrderTS[] = Array.from({ length: 30 }, (_, i) => ({
	client: {
		name: `Malcolm Lima`,
		email: `malcolm@email.com`,
		type: i % 2 === 0 ? 'Pessoa Física' : 'Pessoa Jurídica',
		address: {
			street: `Rua ${i + 1}`,
			number: `${100 + i}`,
			city: 'Cidade Exemplo',
			neighbourhood: `Bairro ${i + 1}`,
			zipCode: `00000-00${i + 1}`,
		},
	},
	technician: i % 2 === 0 ? "Gaam" : null,
	type_person: i % 2 === 0 ? 'Física' : 'Jurídica',
	type_order: i % 3 === 0 ? 'Ordem A' : i % 3 === 1 ? 'Ordem B' : 'Ordem C',
	time: `2024-09-1${i + 1}T12:00:00Z`,
	light_cost: 100 + i * 10,
	concessionaires: `Concessionária ${i + 1}`,
	comments: `Comentário do pedido ${i + 1}`,
}));

export { orders };
