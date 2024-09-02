import { User } from "./user";

export interface Client extends User {
	type: string;
  address: {
    street: string;
    number: string;
    city: string;
    neighbourhood: string;
    zipCode: string;
  };
  latitude: string;
  longitude: string;
}
