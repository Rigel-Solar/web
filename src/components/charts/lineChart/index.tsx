import { Line } from "react-chartjs-2";

const LineChart = () => {
	const options = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				position: "top" as const,
			},
			title: {
				display: true,
				text: "Pedidos",
			},
		},
		layout: {
			padding: 20,
		},
	};

	const labels = ["January", "February", "March", "April", "May", "June"];

	const pedidos = [120, 135, 125, 145, 160, 150];

	const data = {
		labels,
		datasets: [
			{
				label: "Pedidos",
				data: pedidos,
				borderColor: "#2E93FF",
				backgroundColor: "rgba(46, 147, 255, 0.2)",
				fill: true,
				tension: 0.4,
			},
		],
	};

	return <Line options={options} data={data} />;
};

export default LineChart;
