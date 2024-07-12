import { Icons } from "../../assets/Icons";
import Card from "../../components/card";
import { DefaultPageContainer } from "../styles";
import * as C from "./styles";

const card = {
	title: "Pedidos",
	number: 128,
	percentage: 20,
	icon: <Icons.pedidos />,
};

const Banho = () => {
	return (
		<DefaultPageContainer>
			<C.Container>
				<div className="cards">
					<Card card={card} />
					<Card card={card} />
					<Card card={card} />
					<Card card={card} />
				</div>
			</C.Container>
		</DefaultPageContainer>
	);
};

export default Banho;
