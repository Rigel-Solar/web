import styled from "styled-components";

export const Card = styled.article`
	display: grid;
	grid-template-columns: 1fr 1fr;
	background-color: ${({ theme }) => theme.colors.brand.black};
	border: 1px solid #363636;
	border-radius: 6px;
	padding: 20px 40px;

	.left {
		p {
			color: #a1a1aa;
			${({ theme }) => theme.font.p.normal};
		}

		.numbers {
			display: flex;
			align-items: center;
			gap: 10px;
			.big-number {
				font-size: clamp(18px, 2vw, 28px);
				color: #e7e2e9;
			}

			.percentage {
				display: flex;
				align-items: center;
				width: fit-content;
				height: fit-content;
				padding: 6px 10px;
				border-radius: 20px;
				gap: 4px;
				${({ theme }) => theme.font.p.small};
				color: ${({ theme }) => theme.colors.support.green_light};
				background-color: ${({ theme }) => theme.colors.support.green_dark};
			}
		}
	}

	.right {
		display: flex;
		align-items: center;
		justify-content: end;
		div {
			display: grid;
			place-items: center;
			background-color: #2e93ff;
			height: 54px;
			width: 54px;
			border-radius: 50px;
		}
	}
`;
