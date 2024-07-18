import { DialogProps } from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { CSSProperties } from "styled-components";
import {
	Description,
	PopUpBody,
	PopUpCloseButton,
	PopUpHeaderContainer,
	PopUpOverlay,
	PopUpPortal,
	PopUpRoot,
	StyledPopUpContent,
	Title,
} from "./styles";

export interface popUpModalprops extends DialogProps {
	contentStyle?: CSSProperties | undefined;
	overlayStyle?: CSSProperties | undefined;
	hasPortal?: boolean;
}

export const PopUp = ({
	children,
	overlayStyle,
	contentStyle,
	hasPortal = false,
	...props
}: popUpModalprops) => {
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

	if (hasPortal)
		return (
			<PopUpRoot {...props} open={openModal}>
				<PopUpPortal>
					<PopUpOverlay style={overlayStyle} $closeAnimation={!props.open}>
						<StyledPopUpContent
							style={contentStyle}
							$closeAnimation={!props.open}
						>
							{children}
						</StyledPopUpContent>
					</PopUpOverlay>
				</PopUpPortal>
			</PopUpRoot>
		);

	return (
		<PopUpRoot {...props} open={openModal}>
			<PopUpOverlay style={overlayStyle} $closeAnimation={!props.open}>
				<StyledPopUpContent style={contentStyle} $closeAnimation={!props.open}>
					{children}
				</StyledPopUpContent>
			</PopUpOverlay>
		</PopUpRoot>
	);
};

export const PopUpTriggerClose = PopUpCloseButton;
export const PopUpContent = PopUpBody;
export const PopUpHeader = PopUpHeaderContainer;
export const PopUpTitle = Title;
export const PopUpDescription = Description;
