/* eslint-disable @typescript-eslint/no-explicit-any */
interface Cliente {
	tipo: string;
	nome: string;
	email: string;
	endereco: string;
	latitude: number;
	longitude: number;
}

interface Gestor {
	id: number;
	idUsuario: number;
	idUsuarioNavigation: {
		nome: string;
		email: string;
	};
}

interface Tecnico {
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
	idClienteNavigation: Cliente;
	idGestorNavigation: Gestor;
	idTecnicoNavigation: Tecnico;
	idGestor: number;
	idTecnico: number;
	idCliente: number;
	tipoInstalacao: string;
	solucoes: string;
	pretendeInstalarEm: string;
	valorContaLuz: number;
	comentarios: string;
}
