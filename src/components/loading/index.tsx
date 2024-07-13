import { ReactNode } from "react";
import styled from "styled-components";
import Rigel from "../../assets/icon.png";

export interface LoadingProps {
	children?: ReactNode;
}

const Loading = ({ children }: LoadingProps) => {
	return (
		<Spinner>
			{children ? children : <img src={Rigel} alt="Rigel Solar" />}
		</Spinner>
	);
};

export default Loading;

const Spinner = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.3);
	display: flex;
	align-items: center;
	justify-content: center;
	backdrop-filter: blur(3px);
	z-index: 9999;
	font-size: 1.5rem;
	color: #fff;

	img {
		width: 32px;
		border-radius: 4px;
		height: auto;
	}
`;
