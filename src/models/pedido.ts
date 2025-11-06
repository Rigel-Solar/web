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
		id: string;
	};
}

interface Tecnico {
	crea: string;
	idUsuarioNavigation: {
		nome: string;
		email: string;
		id: string;
	};
}

export interface PedidoTS {
	id: number;
	fichaBanhos: any[];
	fichaFotovoltaicos: any[];
	fichaPiscinas: any[];
	idClienteNavigation: Cliente;
	gestorDTO: Gestor;
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
