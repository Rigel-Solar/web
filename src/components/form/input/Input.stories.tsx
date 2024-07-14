import { Meta, StoryFn } from "@storybook/react";
import Input, { InputProps } from ".";

const meta: Meta<typeof Input> = {
  title: "Components/Form/Input",
  component: Input,
  argTypes: {
    inputStyle: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
    affix: {
      control: {
        type: 'object',
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    error: {
      control: {
        type: 'text',
      },
    },
    required: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export default meta;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Primary: StoryFn<InputProps> = Template.bind({});
Primary.args = {
  inputStyle: "primary",
  label: "Primary Input",
  required: false,
};

export const Secondary: StoryFn<InputProps> = Template.bind({});
Secondary.args = {
  inputStyle: "secondary",
  label: "Secondary Input",
  required: false,
};

export const WithPrefixSuffix: StoryFn<InputProps> = Template.bind({});
WithPrefixSuffix.args = {
  label: "Input with Prefix and Suffix",
  affix: {
    prefix: <span>Prefix</span>,
    suffix: <span>Suffix</span>,
  },
};

export const WithError: StoryFn<InputProps> = Template.bind({});
WithError.args = {
  label: "Input with Error",
  error: "This is an error message",
};

export const Required: StoryFn<InputProps> = Template.bind({});
Required.args = {
  label: "Required Input",
  required: true,
};

export const CustomRegister: StoryFn<InputProps> = Template.bind({});
CustomRegister.args = {
  label: "Input with Custom Register",
  register: { name: "custom-input" },
};
