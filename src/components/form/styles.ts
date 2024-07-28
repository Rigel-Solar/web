import styled from "styled-components";

export const FormContainer = styled.form`
	width: 100%;
	display: flex;
	padding: 0.7em;
	flex-direction: column;
	overflow-y: auto;
	-ms-overflow-style: none;
	scrollbar-width: none;

	legend {
		${({ theme }) => theme.font.p.normal};
		color: ${({ theme }) => theme.colors.brand.text};
	}

	fieldset {
		padding: 0.7em 0;
	}
`;

interface formContainerProps {
	columns?: number;
	$columnSize?: string;
}

export const FormFieldsContainer = styled.div<formContainerProps>`
	width: 100%;
	display: grid;
	grid-template-columns: ${({ columns = 1, $columnSize = "1fr" }) =>
		`repeat(${columns}, ${$columnSize})`};
	gap: 20px;

	.sub-title {
		${({ theme }) => theme.font.p.normal};
		color: ${({ theme }) => theme.colors.brand.text};
	}
`;

export const ScrollView = styled.section`
	flex: 1 0 0;
	overflow-y: auto;
	padding: 0.7em 20px 0 0.8em;

	@media (max-width: 760px) {
		padding: 0.2em 0.7em 0 0.7em;
	}
`;
