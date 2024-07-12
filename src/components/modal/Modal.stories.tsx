import { Meta, StoryFn } from "@storybook/react";
import {
  actionModalRootProps,
  Modal,
  ModalContent,
  ModalHeader,
  ModalTriggerButtons,
  ModalTriggerClose,
  ModalTriggerSuccess,
} from "./index";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    contentStyle: {
      control: "object",
    },
    overlayStyle: {
      control: "object",
    },
    position: {
      control: {
        type: "select",
        options: ["left", "right"],
      },
    },
    open: {
      control: "boolean",
    },
  },
};

export default meta;

const Template: StoryFn<actionModalRootProps> = (args) => (
  <Modal {...args}>
    <ModalHeader>Header</ModalHeader>
    <ModalContent>
      Content
      <ModalTriggerButtons>
        <ModalTriggerClose>Cancelar</ModalTriggerClose>
        <ModalTriggerSuccess>Criar</ModalTriggerSuccess>
      </ModalTriggerButtons>
    </ModalContent>
  </Modal>
);

export const Default: StoryFn<actionModalRootProps> = Template.bind({});
Default.args = {
  contentStyle: {},
  overlayStyle: {},
  position: "right",
  open: true,
};

export const LeftPosition: StoryFn<actionModalRootProps> = Template.bind({});
LeftPosition.args = {
  contentStyle: {},
  overlayStyle: {},
  position: "left",
  open: true,
};

export const RightPosition: StoryFn<actionModalRootProps> = Template.bind({});
RightPosition.args = {
  contentStyle: {},
  overlayStyle: {},
  position: "right",
  open: true,
};

export const CustomStyles: StoryFn<actionModalRootProps> = Template.bind({});
CustomStyles.args = {
  contentStyle: { backgroundColor: "lightblue" },
  overlayStyle: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  position: "right",
  open: true,
};

export const Closed: StoryFn<actionModalRootProps> = Template.bind({});
Closed.args = {
  contentStyle: {},
  overlayStyle: {},
  position: "right",
  open: false,
};
