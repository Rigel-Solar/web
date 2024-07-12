import styled from "styled-components";

export const Header = styled.header`
	display: flex;
	flex-direction: column;
  height: 100vh;
	flex: 1;
	max-width: 420px;
	min-width: 240px;
	padding: 60px 30px;
	background-color: ${({ theme }) => theme.colors.brand.black};
	border-top-right-radius: 12px;
	border-bottom-right-radius: 12px;

	.top {
		height: 55%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.rigel {
			display: flex;
			align-items: center;
			gap: 10px;

			img {
				width: 28px;
				height: 28px;
			}

			h1 {
				color: ${({ theme }) => theme.colors.brand.white};
				font-size: clamp(16px, 2vw, 22px);
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
			color: ${({ theme }) => theme.colors.brand.white};
		}

		ul li.active {
			background-color: ${({ theme }) => theme.colors.brand.rigel};
			border-radius: 8px;
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
	color: ${({ theme }) => theme.colors.brand.white};
`;

export const Theme = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.colors.brand.background};
	border-radius: 50px;
	padding: 6px 8px;

	button {
		width: 50%;
		display: flex;
		align-items: center;
		background: transparent;
		padding: 6px 16px;
		gap: 6px;
		color: ${({ theme }) => theme.colors.brand.white};
	}

	button.active {
		background-color: ${({ theme }) => theme.colors.brand.black};
		border-radius: 50px;
	}
`;
