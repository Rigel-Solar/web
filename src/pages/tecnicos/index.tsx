import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import Button from "../../components/form/button";
import ModalTecnico from "../../components/modalTecnico";
import Search from "../../components/search";
import DataTable from "../../components/table";
import { tableData } from "../../constants/table";
import { DefaultPageContainer } from "../styles";
import * as C from "./styles";

const Tecnicos = () => {
	const [isModalOpen, setModalOpen] = useState(false);

	const handleOpenModal = () => setModalOpen(true);
	const handleCloseModal = () => setModalOpen(false);

	function onSuccess() {
		console.log("foi");
	}

	return (
		<DefaultPageContainer>
			<C.Container>
				<section>
					<div className="top-area">
						<h1>Técnicos</h1>
						<Button buttonStyle="primary" onClick={handleOpenModal}>
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

			{isModalOpen && (
				<ModalTecnico
					open={isModalOpen}
					onOpenChange={setModalOpen}
					onClose={handleCloseModal}
					onSuccess={() => {
						handleCloseModal();
						onSuccess?.();
					}}
				/>
			)}
		</DefaultPageContainer>
	);
};

export default Tecnicos;
