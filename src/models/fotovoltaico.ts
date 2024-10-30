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
	tipoClienteDTO: TipoClienteDto;
	tipoLigacaoDTO: TipoLigacaoDto;
	tipoSuperficieDTO: TipoSuperficieDto;
	id: number;
	vistoriaDTO: VistoriaDto;
	fotos?: Foto[];
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

interface TipoClienteDto {
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
	idClienteNavigation: IdClienteNavigation;
	idGestorNavigation: IdGestorNavigation;
}

interface IdClienteNavigation {
	tipo: string;
	nome: string;
	email: string;
	endereco: string;
	latitude: number;
	longitude: number;
}

interface IdGestorNavigation {
	id: number;
	idUsuario: number;
	idUsuarioNavigation: IdUsuarioNavigation;
}

interface IdUsuarioNavigation {
	nome: string;
	email: string;
	senha: string;
}

interface Foto {
	id: number;
	foto: string;
}
