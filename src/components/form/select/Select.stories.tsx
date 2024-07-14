import { Meta, StoryFn } from '@storybook/react';
import SelectComponent, { SelectProps } from './index';

export default {
  title: 'Components/Form/SelectComponent',
  component: SelectComponent,
  argTypes: {
    label: { control: 'text' },
    preSelected: { control: 'boolean' },
    options: { control: 'object' },
    defaultOption: { control: 'object' },
    selectStyle: {
      control: { type: 'radio' },
      options: ['primary', 'secondary']
    },
    defaultValue: { control: 'text' },
    readOnly: { control: 'boolean' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    error: { control: 'text' },
    style: { control: 'object' },
    triggerStyle: { control: 'object' },
    triggerClassName: { control: 'text' },
    contentClassName: { control: 'text' },
    itemClassName: { control: 'text' },
    bottomElement: { control: 'object' },
    value: { control: 'text' }
  }
} as Meta;

const Template: StoryFn <SelectProps> = (args) => <SelectComponent {...args} />;

export const Default: StoryFn <SelectProps> = Template.bind({});
Default.args = {
  label: 'Select an option',
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ],
  defaultValue: 'option1',
  selectStyle: 'primary',
  readOnly: false,
  required: false,
  disabled: false,
  error: '',
  style: {},
  triggerStyle: {},
  triggerClassName: '',
  contentClassName: '',
  itemClassName: '',
  bottomElement: null,
  value: ''
};

export const WithError: StoryFn <SelectProps> = Template.bind({});
WithError.args = {
  ...Default.args,
  error: 'This is an error message'
};

export const Disabled: StoryFn <SelectProps> = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true
};

export const ReadOnly: StoryFn <SelectProps> = Template.bind({});
ReadOnly.args = {
  ...Default.args,
  readOnly: true
};

export const Required: StoryFn <SelectProps> = Template.bind({});
Required.args = {
  ...Default.args,
  required: true
};
