import { ReactNode } from "react";
import { FaArrowUp } from "react-icons/fa6";
import * as C from "./styles";

export interface CardProps {
	card: {
		title: string;
		number: number;
		percentage: number;
		icon: ReactNode;
	};
}

const Card = ({ card }: CardProps) => {
	return (
		<C.Card>
			<div className="left">
				<p>{card.title}</p>
				<div className="numbers">
					<p className="big-number">{card.number}</p>
					<p className="percentage">
						<FaArrowUp />
						{card.percentage}%
					</p>
				</div>
			</div>
			<div className="right">
				<div>{card.icon}</div>
			</div>
		</C.Card>
	);
};

export default Card;
