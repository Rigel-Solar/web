import { DefaultPageContainer } from "../styles";
import * as C from "./styles";

const BI = () => {
	return (
		<DefaultPageContainer>
			<C.Container>
				<C.IframeWrapper>
					<iframe
						src="https://app.powerbi.com/reportEmbed?reportId=169d1f59-393c-4be1-b385-37d30b4399e2&autoAuth=true&ctid=4148a6de-0dd1-4d04-a4c5-78e374e4f6d6"
						allowFullScreen
					/>
				</C.IframeWrapper>
			</C.Container>
		</DefaultPageContainer>
	);
};

export default BI;
