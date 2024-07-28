import { ClientTS } from "../utils/clientSchema";

export const clients: ClientTS[] = [
	{
		name: "Alice Johnson",
		email: "alice.johnson@example.com",
		type: "cliente",
		address: {
			street: "Main Street",
			number: "123",
			city: "Cityville",
			neighbourhood: "Downtown",
			zipCode: "12345678",
		},
	},
	{
		name: "Bob Smith",
		email: "bob.smith@example.com",
		type: "cliente",
		address: {
			street: "Second Street",
			number: "456",
			city: "Townsville",
			neighbourhood: "Uptown",
			zipCode: "23456789",
		},
	},
	{
		name: "Carol White",
		email: "carol.white@example.com",
		type: "cliente",
		address: {
			street: "Third Street",
			number: "789",
			city: "Villagetown",
			neighbourhood: "Midtown",
			zipCode: "34567890",
		},
	},
	{
		name: "David Brown",
		email: "david.brown@example.com",
		type: "cliente",
		address: {
			street: "Fourth Street",
			number: "101",
			city: "Boroughville",
			neighbourhood: "Northside",
			zipCode: "45678901",
		},
	},
	{
		name: "Eve Davis",
		email: "eve.davis@example.com",
		type: "cliente",
		address: {
			street: "Fifth Street",
			number: "202",
			city: "Hamletburg",
			neighbourhood: "Southside",
			zipCode: "56789012",
		},
	},
];
