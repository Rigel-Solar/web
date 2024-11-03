import { Foto } from "./foto";
import { VistoriaTS } from "./vistoria";

interface InspectionItem {
	quantity: string | null;
	description: string;
}

export interface BanhoTS {
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

export interface IBanho {
	baseCaixa: number;
	baseBoiler: number;
	distanciaBoiler: number;
	registroCaixa: number;
	registroBarrilete: number;
	disjuntorBipolar: number;
	idVistoria: number;
	id: number;
	vistoriaDTO: VistoriaTS;
	fotos?: Array<Foto>;
}