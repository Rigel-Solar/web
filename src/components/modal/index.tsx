import { DialogProps } from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { CSSProperties } from "styled-components";
import {
	ButtonArea,
	Cancel,
	ModalBody,
	ModalHeaderContainer,
	ModalOverlay,
	ModalPortal,
	ModalRoot,
	StyledModalContent,
	Success,
} from "./styles";

export interface actionModalRootProps extends DialogProps {
	contentStyle?: CSSProperties | undefined;
	overlayStyle?: CSSProperties | undefined;
	position?: "left" | "right" | "center";
}

export const Modal = ({
	children,
	overlayStyle,
	contentStyle,
	position,
	...props
}: actionModalRootProps) => {
	const [openModal, setOpenModal] = useState(props.open);

	useEffect(() => {
		if (!props.open) {
			setTimeout(() => {
				setOpenModal(props.open);
			}, 300);
		} else {
			setOpenModal(props.open);
		}
	}, [openModal, props.open]);

	return (
		<ModalRoot {...props} open={openModal}>
			<ModalPortal>
				<ModalOverlay style={overlayStyle} $closeAnimation={!props.open}>
					<StyledModalContent
						style={contentStyle}
						position={position}
						$closeAnimation={!props.open}
					>
						{children}
					</StyledModalContent>
				</ModalOverlay>
			</ModalPortal>
		</ModalRoot>
	);
};

export const ModalContent = ModalBody;
export const ModalHeader = ModalHeaderContainer;
export const ModalTriggerButtons = ButtonArea;
export const ModalTriggerClose = Cancel;
export const ModalTriggerSuccess = Success;
