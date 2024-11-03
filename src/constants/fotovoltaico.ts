import { IFotovoltaico } from '../models/fotovoltaico';

export const Fotovoltaicos: IFotovoltaico[] = [
	{
		quantidadeSf: 10,
		potenciaSf: 5.5,
		dimensoesSf: 1.6,
		areaOcupacaoSf: 16,
		modeloInversorSf: 'Inversor X2000',
		quantidadeInversorSf: 2,
		concessionariaEnergiaPe: 'Concessionária XYZ',
		demandaContratadaPe: 100,
		dimensaoCaixaPadraoPe: '60x40x20',
		aterramentoPe: true,
		disjuntorPadraoEntradaPe: '60A',
		bitolaCondutorPe: 16,
		antesDisjuntorPe: 50,
		disjuntorQuadroPrincipalQpe: '80A',
		dimensoesQpe: 1.2,
		areaOcupacaoQpe: 1.5,
		modeloInversorQpe: 'Inversor Y3000',
		quantidadeInversorQpe: 3,
		larguraDcp: 1.8,
		comprimentoDcp: 1.8,
		profundidadeDcp: 0.6,
		larguraSolo: 15,
		comprimentoSolo: 20,
		tipoTelha: 'Cerâmica',
		distanciaRipasTelhado: 0.5,
		distanciaCaibrosTelhado: 1.0,
		distanciaTercasTelhado: 1.2,
		distanciaEmpenaTelhado: 1.5,
		condicaoPadraoEntradaDTO: { condicao: 'Boa' },
		condicaoQuadroPrincipalDTO: { condicao: 'Regular' },
		condicaoVigaDTO: { condicao: 'Ótima' },
		idadeTelhadoDTO: { idade: 10 },
		localInstalacaoModuloDTO: { local: 'Cobertura' },
		materialVigasTelhadoDTO: { condicao: 'Madeira Tratada' },
		modeloRelogioDTO: { modelo: 'Digital ABC' },
		nivelamentoSoloDTO: { nivelamento: 'Adequado' },
		telhadoAcessoDTO: { acesso: 'Escada' },
		tensaoNominalDTO: { tensao: '220V' },
		tipoClienteDTO: { tipo: 'Residencial' },
		tipoLigacaoDTO: { tipo: 'Monofásico' },
		tipoSuperficieDTO: { tipo: 'Plana' },
		id: 12345,
		vistoriaDTO: {
      idGestor: 1,
      idCliente: 100,
      tipoInstalacao: 'Fotovoltaico Padrão',
      solucoes: 'Eficiência Energética',
      pretendeInstalarEm: 'Próximo semestre',
      valorContaLuz: 350,
      comentarios: 'Cliente interessado em economia',
      id: 56789,
      clienteDTO: {
        tipo: 'Pessoa Física',
        nome: 'João da Silva',
        email: 'joao.silva@email.com',
        endereco: 'Rua das Palmeiras, 123',
        latitude: -23.5505,
        longitude: -46.6333,
      },
      gestorDTO: {
        id: 1,
        idUsuario: 101,
        usuarioDTO: {
          nome: 'Carlos Gestor',
          email: 'carlos.gestor@email.com',
          senha: 'senhaSegura123',
        },
      },
      tecnicoDTO: {
        crea: '0931093',
        usuario: {
          nome: 'Malcolm',
          email: 'malcolm@gmail.com',
          id: '3'
        }
      }
    },
		fotos: [
			{ foto: 'https://example.com/foto1.jpg', id: 1 },
			{ foto: 'https://example.com/foto2.jpg', id: 2 },
		],
	},
];
