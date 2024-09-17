interface poolItem {
	name: string | null;
	value: string;
}

export interface Piscina {
	orderId: number;
	technician: string;
	name: string;
	city: string;
	state: string;
	street: string;
	number: number;
	imgUrl: Array<string>;
	neighborhood: string;
  date: string;
	type: string;
	cellphone: string;
	poolItems: poolItem[];
}
