import { Foto } from "./foto";

export interface IFotovoltaico {
	quantidadeSf: number;
	potenciaSf: number;
	dimensoesSf: number;
	areaOcupacaoSf: number;
	modeloInversorSf: string;
	quantidadeInversorSf: number;
	concessionariaEnergiaPe: string;
	demandaContratadaPe: number;
	dimensaoCaixaPadraoPe: string;
	aterramentoPe: boolean;
	disjuntorPadraoEntradaPe: string;
	bitolaCondutorPe: number;
	antesDisjuntorPe: number;
	disjuntorQuadroPrincipalQpe: string;
	dimensoesQpe: number;
	areaOcupacaoQpe: number;
	modeloInversorQpe: string;
	quantidadeInversorQpe: number;
	larguraDcp: number;
	comprimentoDcp: number;
	profundidadeDcp: number;
	larguraSolo: number;
	comprimentoSolo: number;
	tipoTelha: string;
	distanciaRipasTelhado: number;
	distanciaCaibrosTelhado: number;
	distanciaTercasTelhado: number;
	distanciaEmpenaTelhado: number;
	condicaoPadraoEntradaDTO: CondicaoPadraoEntradaDto;
	condicaoQuadroPrincipalDTO: CondicaoQuadroPrincipalDto;
	condicaoVigaDTO: CondicaoVigaDto;
	idadeTelhadoDTO: IdadeTelhadoDto;
	localInstalacaoModuloDTO: LocalInstalacaoModuloDto;
	materialVigasTelhadoDTO: MaterialVigasTelhadoDto;
	modeloRelogioDTO: ModeloRelogioDto;
	nivelamentoSoloDTO: NivelamentoSoloDto;
	telhadoAcessoDTO: TelhadoAcessoDto;
	tensaoNominalDTO: TensaoNominalDto;
	tipoidClienteNavigation: TipoidClienteNavigation;
	tipoLigacaoDTO: TipoLigacaoDto;
	tipoSuperficieDTO: TipoSuperficieDto;
	id: number;
	vistoriaDTO: VistoriaDto;
	fotos?: Array<Foto>;
}

interface CondicaoPadraoEntradaDto {
	condicao: string;
}

interface CondicaoQuadroPrincipalDto {
	condicao: string;
}

interface CondicaoVigaDto {
	condicao: string;
}

interface IdadeTelhadoDto {
	idade: number;
}

interface LocalInstalacaoModuloDto {
	local: string;
}

interface MaterialVigasTelhadoDto {
	condicao: string;
}

interface ModeloRelogioDto {
	modelo: string;
}

interface NivelamentoSoloDto {
	nivelamento: string;
}

interface TelhadoAcessoDto {
	acesso: string;
}

interface TensaoNominalDto {
	tensao: string;
}

interface TipoidClienteNavigation {
	tipo: string;
}

interface TipoLigacaoDto {
	tipo: string;
}

interface TipoSuperficieDto {
	tipo: string;
}

interface VistoriaDto {
	idGestor: number;
	idCliente: number;
	tipoInstalacao: string;
	solucoes: string;
	pretendeInstalarEm: string;
	valorContaLuz: number;
	comentarios: string;
	id: number;
	idClienteNavigation: idClienteNavigation;
	gestorDTO: GestorDTO;
	tecnicoDTO: TecnicoDTO
}

interface idClienteNavigation {
	tipo: string;
	nome: string;
	email: string;
	endereco: string;
	latitude: number;
	longitude: number;
}

interface GestorDTO {
	id: number;
	idUsuario: number;
	usuarioDTO: UsuarioDTO;
}

interface UsuarioDTO {
	nome: string;
	email: string;
	senha: string;
}

interface TecnicoDTO {
	crea: string;
	usuario: {
		nome: string;
		email: string;
		id: string;
	};
}