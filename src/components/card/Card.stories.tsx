import { Meta, StoryFn } from "@storybook/react";
import { FaChartLine } from "react-icons/fa6";
import Card, { CardProps } from "./index";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  argTypes: {
    card: {
      control: {
        type: "object",
      },
    },
  },
};

export default meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default: StoryFn<CardProps> = Template.bind({});
Default.args = {
  card: {
    title: "Revenue",
    number: 15000,
    percentage: 10,
    icon: <FaChartLine size={20} />,
  },
};

export const HighGrowth: StoryFn<CardProps> = Template.bind({});
HighGrowth.args = {
  card: {
    title: "User Growth",
    number: 2300,
    percentage: 50,
    icon: <FaChartLine size={20} />,
  },
};

export const LowGrowth: StoryFn<CardProps> = Template.bind({});
LowGrowth.args = {
  card: {
    title: "Profit",
    number: 1200,
    percentage: 5,
    icon: <FaChartLine size={20} />,
  },
};
