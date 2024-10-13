import { ClientTS } from "../utils/clientSchema";

export const clients: ClientTS[] = [
	{
		nome: "Alice Johnson",
		email: "alice.johnson@example.com",
		tipo: "cliente",
		endereco: {
			street: "Main Street",
			number: "123",
			city: "Cityville",
			neighbourhood: "Downtown",
			zipCode: "12345678",
		},
	},
	{
		nome: "Bob Smith",
		email: "bob.smith@example.com",
		tipo: "cliente",
		endereco: {
			street: "Second Street",
			number: "456",
			city: "Townsville",
			neighbourhood: "Uptown",
			zipCode: "23456789",
		},
	},
	{
		nome: "Carol White",
		email: "carol.white@example.com",
		tipo: "cliente",
		endereco: {
			street: "Third Street",
			number: "789",
			city: "Villagetown",
			neighbourhood: "Midtown",
			zipCode: "34567890",
		},
	},
	{
		nome: "David Brown",
		email: "david.brown@example.com",
		tipo: "cliente",
		endereco: {
			street: "Fourth Street",
			number: "101",
			city: "Boroughville",
			neighbourhood: "Northside",
			zipCode: "45678901",
		},
	},
	{
		nome: "Eve Davis",
		email: "eve.davis@example.com",
		tipo: "cliente",
		endereco: {
			street: "Fifth Street",
			number: "202",
			city: "Hamletburg",
			neighbourhood: "Southside",
			zipCode: "56789012",
		},
	},
];
