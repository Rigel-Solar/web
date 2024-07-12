import DataTable from "../../components/table";
import { tableData } from "../../constants/table";
import { DefaultPageContainer } from "../styles";
import * as C from "./styles";

const Tecnicos = () => {
	return (
		<DefaultPageContainer>
			<C.Container>
				<h1>Tecnicos</h1>
				<div className="table">
					<DataTable data={tableData} hasPagination />
				</div>
			</C.Container>
		</DefaultPageContainer>
	);
};

export default Tecnicos;
