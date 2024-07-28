interface InspectionItem {
	quantity: string | null;
	description: string;
}

export interface Banho {
	orderId: number;
	technician: string;
	name: string;
	city: string;
	state: string;
	street: string;
	number: number;
	imgUrl: Array<string>;
	neighborhood: string;
	type: string;
	cellphone: string;
	inspectionItems: InspectionItem[];
}
