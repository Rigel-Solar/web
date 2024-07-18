import styled, { keyframes } from "styled-components";

interface HeaderProps {
	$open?: boolean;
}

const fadeIn = keyframes`
	from {
		opacity: 0.25;
	}
	to {
		opacity: 1;
	}
`;

const fadeOut = keyframes`
	from {
		opacity: 1;
	}
	to {
		opacity: 0.25;
	}
`;

export const Header = styled.header<HeaderProps>`
	display: flex;
	flex-direction: column;
	height: 100vh;
	flex: 1;
	width: 320px;
	padding: 60px 30px;
	background-color: ${({ theme }) => theme.colors.brand.background};
	border-top-right-radius: 12px;
	border-bottom-right-radius: 12px;
	transition: opacity 0.3s ease;

	@media (width <= 1280px) {
		padding: 30px 20px;
		width: 80px;
	}

	@media (width <= 860px) {
		width: 100%;
		padding: 60px 40px;
		opacity: ${(props) => (props.$open ? 1 : 0)};
		animation: ${(props) => (props.$open ? fadeIn : fadeOut)} 0.3s forwards;
		display: ${(props) => (props.$open ? "flex" : "none")};

		.top {
			height: fit-content !important;
			gap: 30px;
			margin-bottom: 30px;
		}

		.bottom {
			height: fit-content;
			> button:nth-child(1) {
				display: flex;
				align-items: center;
				justify-content: center;
				border: 1px solid #272727;
				border-radius: 20px;
				padding: 10px;
				gap: 10px;
			}
		}
	}

	.top {
		height: 55%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.rigel {
			display: flex;
			align-items: center;
			gap: 10px;

			@media (width <= 1280px) {
				justify-content: center;

				h1 {
					display: none;
				}
			}

			img {
				width: 28px;
				height: 28px;
			}

			h1 {
				color: ${({ theme }) => theme.colors.brand.text};
				font-size: clamp(16px, 2vw, 22px);
			}

			button {
				position: relative;
				left: 0;
				top: 0;
			}
		}

		ul {
			display: flex;
			flex-direction: column;
			gap: 20px;
		}

		ul li a {
			display: flex;
			align-items: center;
			gap: 10px;
			padding: 8px 12px;
			text-decoration: none;
			${({ theme }) => theme.font.p.normal};
			color: ${({ theme }) => theme.colors.brand.text};
			svg {
				color: ${({ theme }) => theme.colors.brand.text};
			}
			p {
				color: ${({ theme }) => theme.colors.brand.text};
				@media (min-width: 860px) and (max-width: 1279px) {
					display: none;
				}
			}
		}

		ul li.active {
			background-color: ${({ theme }) => theme.colors.brand.rigel};
			border-radius: 8px;
			a p,
			svg {
				color: white;
			}
		}
	}

	.bottom {
		height: 45%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		gap: 16px;
	}
`;

export const Logout = styled.button`
	display: flex;
	align-items: center;
	gap: 8px;
	padding: 6px 8px;
	color: ${({ theme }) => theme.colors.brand.text};

	@media (width <= 1280px) {
		padding: 0;
	}
`;

export const Theme = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.colors.brand.background2};
	border-radius: 50px;
	padding: 6px 8px;

	button {
		width: 50%;
		display: flex;
		align-items: center;
		background: transparent;
		padding: 6px 16px;
		gap: 6px;

		svg {
			color: ${({ theme }) => theme.colors.brand.text};
		}

		p {
			color: ${({ theme }) => theme.colors.brand.text};
			${({ theme }) => theme.font.p.small}
		}
	}

	button.active {
		background-color: ${({ theme }) => theme.colors.brand.background};
		border-radius: 50px;
	}

	@media (width <= 1280px) {
		justify-content: center;
		p {
			display: none;
		}
		button.active {
			background: transparent;
			display: grid;
			justify-content: center;
			width: 100%;
		}
		button:not(.active) {
			display: none;
		}
	}
`;
