import { User } from "./user";

export interface Client extends User {
  id: string;
	tipo: string;
  nome: string;
  endereco: string;
  latitude: string;
  longitude: string;
}
