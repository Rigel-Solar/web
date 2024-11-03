import { Foto } from "./foto";
import { VistoriaTS } from "./vistoria";

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
	fotos?: Array<Foto>;
	area?: number;
	volume?: number;
}
