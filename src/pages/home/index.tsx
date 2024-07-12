import { Icons } from "../../assets/Icons";
import Card from "../../components/card";
import DataTable from "../../components/table";
import { tableData } from "../../constants/table";
import { DefaultPageContainer } from "../styles";
import * as C from "./styles";

const card = {
	title: "Pedidos",
	number: 128,
	percentage: 20,
	icon: <Icons.pedidos />,
};

const Home = () => {
	return (
		<DefaultPageContainer>
			<C.Container>
				<div className="cards">
					<Card card={card} />
					<Card card={card} />
					<Card card={card} />
					<Card card={card} />
				</div>
				<div className="graphs">
					<div className="graph-1"></div>
					<div className="graph-2"></div>
				</div>
				<div className="table">
					<DataTable
						data={tableData}
						$itemsPerPage={5}
						background
					/>
				</div>
			</C.Container>
		</DefaultPageContainer>
	);
};

export default Home;
