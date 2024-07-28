import { FaArrowRight } from "react-icons/fa6";
import * as C from "./styles";

export interface HistoryItemProps {
	title: string;
	description: string;
	value: number;
	status: "Negada" | "Em andamento" | "Finalizada";
	updatedAt: Date;
	createdAt: Date;
}

const HistoryItem = ({
	createdAt,
	description,
	status,
	title,
	value,
}: HistoryItemProps) => {
	return (
		<C.Container $status={status}>
			<div className="row">
				<div className="left-side">
					<p className="title">{title}</p>
					<p className="description">{description}</p>
					<span>
						<p className="value">R$ {value} &nbsp;-&nbsp;&nbsp;</p>
						<p className="date">{createdAt.toLocaleDateString()}</p>
					</span>
				</div>
				<FaArrowRight color="white" />
			</div>
			<div className="status">{status}</div>
		</C.Container>
	);
};

export default HistoryItem;
