import styled from 'styled-components';

export const Section = styled.div`
	border: 1px solid #e5e7eb;
	border-radius: 8px;
	margin-bottom: 16px;
	background-color: ${({ theme }) => theme.colors.brand.background};
	color: ${({ theme }) => theme.colors.brand.text};
`;

export const Header = styled.button`
	width: 100%;
	padding: 16px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.brand.background};
	border: none;
	cursor: pointer;
	border-radius: 8px;

	&:hover {
		background: ${({ theme }) => theme.colors.brand.background2};
	}
`;

export const Title = styled.p`
	font-size: 16px;
	color: ${({ theme }) => theme.colors.brand.text};
	text-align: left;
`;

export const Content = styled.div<{ isOpen: boolean }>`
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: ${(props) => (props.isOpen ? '16px' : '0')};
	max-height: ${(props) => (props.isOpen ? '1000px' : '0')};
	overflow: hidden;
	transition: all 0.3s ease-in-out;
	opacity: ${(props) => (props.isOpen ? '1' : '0')};
`;
