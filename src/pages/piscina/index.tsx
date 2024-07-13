import DataTable from "../../components/table";
import { tableData } from "../../constants/table";
import { DefaultPageContainer } from "../styles";
import * as C from "./styles";

const Piscina = () => {
	return (
		<DefaultPageContainer>
			<C.Container>
				<h1>Piscina</h1>
				<div className="table">
					<DataTable data={tableData} hasPagination />
				</div>
			</C.Container>
		</DefaultPageContainer>
	);
};

export default Piscina;