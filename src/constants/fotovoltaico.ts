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
		tipoidClienteNavigation: { tipo: 'Residencial' },
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
      idClienteNavigation: {
        tipo: 'Pessoa Física',
        nome: 'João da Silva',
        email: 'joao.silva@email.com',
        endereco: 'Franco da Rocha, Bairro Tal, Rua das Palmeiras, 123, 07809-060',
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
          nome: 'John Doe',
          email: 'malcolm@gmail.com',
          id: '3'
        }
      }
    },
		fotos: [
			{
				foto1: 'https://www.portalsolar.com.br/_next/image?url=https%3A%2F%2Fportalsolar-images.s3.us-east-2.amazonaws.com%2Flegacy.portalsolar.com.br%2FContent%2FEditorImages%2Fimages%2Ftemperatura-e-potencia-do-painel-solar.jpg&w=3840&q=100', id: 1,
				idFichaBanho: 0,
				idFichaPiscina: 0,
				idFichaFotovoltaico: 0
			},
			{
				foto1: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXfJWCrFIS38KRtakPgdqIMgRSH7gvJv-uaT-BsefiWWG0o0cRnU082pj1DEtAfxpjDhw1rCURMOUainMLiPJjZZ4p4IJ3oan7S3bTiY_RaIW_nuzZA1VnCMAMM3AnhmH5-T65SQD-8HfuC-GUd_85I4_g?key=weGRFNbl8v-yoK7Oj2zR8A', id: 2,
				idFichaBanho: 0,
				idFichaPiscina: 0,
				idFichaFotovoltaico: 0
			},
		],
	},
];
