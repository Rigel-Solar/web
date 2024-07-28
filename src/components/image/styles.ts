import { DialogClose } from "@radix-ui/react-dialog";
import styled from "styled-components";

export const ImageContainer = styled.button`
	position: relative;

	.img-normal {
		width: 250px;
		height: 250px;
		border-radius: 10px;
	}
`;

export const CloseButton = styled(DialogClose)`
	position: absolute;
	left: 16px;
	top: 16px;
`;
