import Card from "../../components/card";
import DoughnutChart from "../../components/charts/barChart";
import LineChart from "../../components/charts/lineChart";
import { registerCharts } from "../../components/charts/registerCharts";
import DataTable from "../../components/table";
import { cards } from "../../constants/cards";
import { tableData } from "../../constants/table";
import { DefaultPageContainer } from "../styles";
import * as C from "./styles";

registerCharts();

const Home = () => {
	return (
		<DefaultPageContainer>
			<C.Container>
				<div className="cards">
					{cards.map((card) => (
						<Card key={card.title} card={card} />
					))}
				</div>
				<div className="graphs">
					<div className="graph-1">
						<LineChart />
					</div>
					<div className="graph-2">
						<DoughnutChart />
					</div>
				</div>
				<div className="table">
					<DataTable data={tableData} $itemsPerPage={5} background />
				</div>
			</C.Container>
		</DefaultPageContainer>
	);
};

export default Home;
