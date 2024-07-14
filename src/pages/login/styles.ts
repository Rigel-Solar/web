import styled from "styled-components";

export const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.brand.background};

	@media (max-width: 960px) {
		grid-template-columns: 1fr;
		grid-auto-flow: row;

		article {
			padding: 20px;
		}

		article:nth-child(1) {
			display: none;
		}
	}
`;

export const Left = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 30px 40px;
	background-color: ${({ theme }) => theme.colors.brand.black};

	.top {
		display: flex;
		align-items: center;
		gap: 15px;
	}

	.bottom {
		h2 {
			${({ theme }) => theme.font.p.medium}
		}
		p {
			margin-top: 10px;
			${({ theme }) => theme.font.p.normal}
		}
	}
`;

export const Right = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	width: calc(100% - 30px);
	max-width: 500px;

	h2 {
		font-size: clamp(20px, 2vw, 24px);
	}

	p {
		color: #71717a;
		margin-bottom: 10px;
	}

	input {
		padding: 10px 16px;
		${({ theme }) => theme.font.p.small}
	}

	button {
		margin-top: 20px;
		padding: 10px 16px;
		${({ theme }) => theme.font.p.small}
	}
`;
