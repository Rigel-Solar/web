import { VistoriaTS } from "./vistoria";

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

export interface IPiscina {
	comprimento: number;
	largura: number;
	profundidade: number;
	temperaturaAgua: number;
	usoCapaTermica: string;
	regiao: string;
	ambiente: string;
	idVistoria: number;
	id: number;
	vistoriaDTO: VistoriaTS;
	imgUrl?: Array<string>;
	area?: number;
	volume?: number;
}
