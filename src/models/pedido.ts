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
	idUsuarioNavigation: null;
}

interface Tecnico {
	crea: string;
	usuario: {
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
	clienteDTO: Cliente;
	gestorDTO: Gestor;
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
