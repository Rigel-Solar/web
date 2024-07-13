import { FiPlus } from "react-icons/fi";
import Button from "../../components/form/button";
import Search from "../../components/search";
import DataTable from "../../components/table";
import { tableData } from "../../constants/table";
import { DefaultPageContainer } from "../styles";
import * as C from "./styles";

const Tecnicos = () => {
	return (
		<DefaultPageContainer>
			<C.Container>
				<section>
					<div className="top-area">
						<h1>Técnicos</h1>
						<Button buttonStyle="primary">
							<FiPlus size={16} />
							Cadastrar Técnico
						</Button>
					</div>
					<Search placeholder="Procurar Técnicos" />
				</section>
				<div className="table">
					<DataTable data={tableData} hasPagination />
				</div>
			</C.Container>
		</DefaultPageContainer>
	);
};

export default Tecnicos;
