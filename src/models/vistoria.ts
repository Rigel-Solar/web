/* eslint-disable @typescript-eslint/no-explicit-any */
interface ClienteNavigation {
	tipo: string;
	nome: string;
	email: string;
	endereco: string;
	latitude: number;
	longitude: number;
}

interface GestorNavigation {
	id: number;
	idUsuario: number;
	idUsuarioNavigation: null;
}

interface TecnicoNavigation {
	crea: string;
	usuario: {
		nome: string;
		email: string;
		id: string;
	};
}

export interface VistoriaTS {
	id: number;
	fichaBanhos: any[];
	fichaFotovoltaicos: any[];
	fichaPiscinas: any[];
	idClienteNavigation: ClienteNavigation;
	idGestorNavigation: GestorNavigation;
	idTecnicoNavigation: TecnicoNavigation;
	idGestor: number;
	idTecnico: number;
	idCliente: number;
	tipoInstalacao: string;
	solucoes: string;
	pretendeInstalarEm: string;
	valorContaLuz: number;
	comentarios: string;
}
