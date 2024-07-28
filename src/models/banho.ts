interface ItemDeVistoria {
  quantidade: string | null;
  descricao: string;
}

export interface Banho {
	pedidoId: number;
	tecnico: string;
	nome: string;
	cidade: string;
	estado: string;
	rua: string;
	numero: number;
	bairro: string;
	tipo: string;
	celular: string;
	itensDeVistoria: ItemDeVistoria[];
}
