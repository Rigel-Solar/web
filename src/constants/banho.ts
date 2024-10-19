import { BanhoTS } from "../models/banho";

export const banho: BanhoTS = {
	orderId: 123,
	technician: "Gaam",
	name: "Malcolm Lima",
	city: "Jundiaí",
	state: "São Silvestre",
	street: "São Caetano do Sul",
	number: 120,
	neighborhood: "Bairro de São Caetano",
	type: "Individual",
	cellphone: "11 94002-8922",
	imgUrl: [
		"https://via.placeholder.com/1000",
		"https://via.placeholder.com/2000",
		"https://via.placeholder.com/500",
		"https://via.placeholder.com/300",
	],
	inspectionItems: [
		{
			quantity: null,
			description: "Base of the water tank in relation to the slab",
		},
		{
			quantity: null,
			description: "Base of the Boiler in relation to the slab",
		},
		{
			quantity: null,
			description:
				"Distance from the boiler to the hot water distribution connection",
		},
		{
			quantity: "01",
			description:
				'1" valve at the water tank outlet, exclusively for boiler supply',
		},
		{
			quantity: "01",
			description:
				'1" valve on the hot water pipe approximately 1 meter from the boiler',
		},
		{
			quantity: "01",
			description: "20A bipolar circuit breaker for boiler resistance",
		},
	],
};
