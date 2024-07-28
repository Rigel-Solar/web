import { User } from "./user";

export interface Client extends User {
	type: string;
  address: string;
  latitude: string;
  longitude: string;
}
