import { CSSProperties } from "styled-components";
import {
  ModalRoot,
  ModalOverlay,
  StyledModalContent,
  ModalBody,
  ModalPortal,
  ModalHeader,
  Cancel,
  Success,
  ButtonArea
} from "./styles";
import { AlertDialogProps } from "@radix-ui/react-alert-dialog";
import { useEffect, useState } from "react";

export interface actionModalRootProps extends AlertDialogProps {
  contentStyle?: CSSProperties | undefined;
  overlayStyle?: CSSProperties | undefined;
  position?: "left" | "right";
}

export const ActionAlertDialogRoot = ({
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

export const ActionAlertDialogTriggerButtons = ButtonArea;

export const ActionAlertDialogTriggerClose = Cancel;

export const ActionAlertDialogTriggerSuccess = Success;

export const ActionAlertDialogContent = ModalBody;

export const ActionAlertDialogHeader = ModalHeader;
