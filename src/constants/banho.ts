import { Banho } from "../models/banho";

export const banho: Banho = {
	pedidoId: 142,
	tecnico: "Gaam",
	nome: "Malcolm Lima",
	cidade: "Jundiaí",
	estado: "São Silvestre",
	rua: "São Caetano do Sul",
	numero: 120,
	bairro: "Bairro de São Caetano",
	tipo: "Pessoa Física",
	celular: "11 94002-8922",
	itensDeVistoria: [
		{
			quantidade: null,
			descricao: "Base da caixa d'agua em relação a laje",
		},
		{
			quantidade: null,
			descricao: "Base do Boiler em relação a laje",
		},
		{
			quantidade: null,
			descricao:
				"Distância do boiler para conexão de distribuição de água quente",
		},
		{
			quantidade: "01",
			descricao:
				"Registro de 1\" na saída da caixa d'agua, exclusivo para alimentação do boiler",
		},
		{
			quantidade: "01",
			descricao:
				'Registro de 1" no barrilete de água quente a + ou - 1 metro do boiler',
		},
		{
			quantidade: "01",
			descricao: "Disjuntor bipolar de 20A para resistência (Boiler)",
		},
	],
};
