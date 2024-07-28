import styled, { css } from "styled-components";

export interface HistoryContainerProps {
	$status: "Negada" | "Em andamento" | "Finalizada";
}

export const Container = styled.button<HistoryContainerProps>`
	display: flex;
	flex-direction: column;
	text-align: start;
	background: transparent;
	padding: 6px 16px;
	border-radius: 8px;

	.row {
		width: 100%;
		display: flex;
		align-items: center;

		.left-side {
			flex: 1;
			display: flex;
			flex-direction: column;
			gap: 4px;

			.title {
				text-transform: capitalize;
			}

			.description {
				font-size: 14px;
				color: ${({ theme }) => theme.colors.grayscale.gray_20};
				max-width: clamp(200px, 50vw, 360px);
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			span {
				display: flex;
				align-items: center;
				margin-top: 10px;
			}
		}
	}

	.status {
		display: flex !important;
		justify-content: center;
		align-items: center;
		margin-top: 10px;
		width: 100%;
		border-radius: 4px;
		padding: 4px;
	}

	${({ $status, theme }) => {
		if ($status === "Finalizada") {
			return css`
				border: 1px solid ${theme.colors.brand.text};

				.status {
					border: 1px dashed #2dd4bf;
					color: #2dd4bf;
					background-color: #042f2e;
				}
			`;
		}
		if ($status === "Em andamento") {
			return css`
				border: 1px solid ${theme.colors.brand.text};

				.status {
					border: 1px dashed #facc15;
					color: #facc15;
					background-color: #422006;
				}
			`;
		}
		if ($status === "Negada") {
			return css`
				border: 1px solid ${theme.colors.brand.text};

				.status {
					border: 1px dashed #ff8888;
					color: #ff8888;
					background-color: #450a0a;
				}
			`;
		}
	}}
`;
