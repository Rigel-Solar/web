import DataTable from "../../components/table";
import { tableData } from "../../constants/table";
import { DefaultPageContainer } from "../styles";
import * as C from "./styles";

const Banho = () => {
	return (
		<DefaultPageContainer>
			<C.Container>
				<h1>Banho</h1>
				<div className="table">
					<DataTable data={tableData} hasPagination />
				</div>
			</C.Container>
		</DefaultPageContainer>
	);
};

export default Banho;
