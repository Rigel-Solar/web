import DataTable from "../../components/table";
import { tableData } from "../../constants/table";
import { DefaultPageContainer } from "../styles";

const Fotovoltaico = () => {
	return (
		<DefaultPageContainer>
			<p>Fotovoltaico</p>
			<DataTable data={tableData} />
		</DefaultPageContainer>
	);
};

export default Fotovoltaico;
