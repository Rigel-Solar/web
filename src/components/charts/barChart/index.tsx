import { Doughnut } from "react-chartjs-2";

const DoughnutChart = () => {
	const labels = ["Finalizado", "Andamento"];
	const dataValues = [100, 50];

	const data = {
		labels,
		datasets: [
			{
				data: dataValues,
				backgroundColor: ["rgba(255, 99, 132)", "rgba(53, 162, 235)"],
				borderColor: ["rgb(255, 99, 132)", "rgb(53, 162, 235)"],
				borderWidth: 1,
			},
		],
	};

	const options = {
		responsive: true,
		maintainAspectRatio: true,
		plugins: {
			legend: {
				position: "top" as const,
			},
			title: {
				display: true,
				text: "Relatórios",
			},
		},
		layout: {
			padding: 20,
		},
	};

	return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
