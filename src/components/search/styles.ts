import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	color: #71717a;
	svg {
		position: absolute;
		left: 10px;
		top: 50%;
		transform: translateY(-50%);
	}
`;

export const SearchInput = styled.input`
	border: 1px dashed #3f3f46;
	border-radius: 50px;
	background-color: #18181b;
	padding: 8px 32px;
	color: #71717a;
	${({ theme }) => theme.font.p.small}

	&:focus {
		outline: none;
		color: ${({ theme }) => theme.colors.brand.rigel};
		border: 1px dashed ${({ theme }) => theme.colors.brand.rigel};
		&::placeholder {
			color: ${({ theme }) => theme.colors.brand.rigel};
		}

		& + svg {
			color: ${({ theme }) => theme.colors.brand.rigel};
		}
	}
`;
