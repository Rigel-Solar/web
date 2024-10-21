import styled from "styled-components";

export const Container = styled.main`
	flex: 1;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 60px;
	padding: 25px 40px;

	section {
		display: flex;
		flex-direction: column;
		gap: 20px;
		width: fit-content;
		max-height: 280px;

		input {
			width: 100%;
		}
	}

	.top-area {
		display: flex;
		align-items: center;
		gap: 20px;

		h1 {
			color: ${({ theme }) => theme.colors.brand.text};
		}

		button {
			border-radius: 50px;
			gap: 6px;
			${({ theme }) => theme.font.p.small}
			padding: 6px 8px;
		}
	}
	.bottom-area {
	}

	.table {
		width: 100%;
		border-collapse: collapse;
		border-radius: 4px;
		overflow: auto;
	}
`;
