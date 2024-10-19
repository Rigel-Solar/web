import { Technician } from "../models/technician";

const technicians: Technician[] = Array.from({ length: 30 }, (_, i) => ({
	id: `${i + 1}`,
	usuario: {
		nome: `Técnico ${i + 1}`,
		email: `tecnico${i + 1}@example.com`,
		id: `${i + 1}`,
	},
	crea: i % 2 === 0 ? "Engenharia Elétrica" : "Engenharia de Sistemas",
}));

export { technicians };
