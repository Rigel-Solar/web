import styled from "styled-components";

export const Card = styled.article`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	background-color: ${({ theme }) => theme.colors.brand.background};
	border: 1px solid #363636;
	border-radius: 6px;
	padding: 20px 40px;

	.left {
		p {
			color: ${({ theme }) => theme.colors.brand.text};
			${({ theme }) => theme.font.p.normal};
		}

		.numbers {
			display: flex;
			align-items: center;
			gap: 10px;
			.big-number {
				font-size: clamp(18px, 2vw, 28px);
				color: ${({ theme }) => theme.colors.brand.text};
			}

			.percentage {
				display: flex;
				align-items: center;
				width: fit-content;
				height: fit-content;
				padding: 4px 6px;
				border-radius: 20px;
				gap: 4px;
				${({ theme }) => theme.font.p.extra_small};
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
