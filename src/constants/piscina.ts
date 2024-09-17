import { Piscina } from "../models/piscina";

export const piscina: Piscina = {
  orderId: 123,
  technician: "Gaam",
  name: "Malcolm Lima",
  city: "Jundiaí",
  state: "São Silvestre",
  street: "São Caetano do Sul",
  number: 120,
  neighborhood: "Bairro de São Caetano",
  type: "Individual",
  cellphone: "11 94002-8922",
  imgUrl: [
    "https://via.placeholder.com/1000",
    "https://via.placeholder.com/2000",
    "https://via.placeholder.com/500",
    "https://via.placeholder.com/300",
  ],
  poolItems: [
    {
      name: "Largura",
      value: "20m",
    },
    {
      name: "Comprimento",
      value: "10m",
    },
    {
      name: "Profundidade Média",
      value: "5m",
    },
    {
      name: "Temperatura desejada",
      value: '5ºC',
    },
    {
      name: "Uso Capa Térmica",
      value: 'Não',
    },
    {
      name: "Ambiente Ab/Fech",
      value: "Aberto",
    },
    {
      name: "Área",
      value: "200m",
    },
    {
      name: "Volume",
      value: "1000m",
    },
  ],
  date: "07/04/2021"
};
