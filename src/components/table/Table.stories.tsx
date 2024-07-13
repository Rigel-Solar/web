import { Meta, StoryFn } from "@storybook/react";
import { tableData } from "../../constants/table";
import { DataTableProps } from "../../models/data-table";
import DataTable from "./index";

const meta: Meta<typeof DataTable> = {
	title: "Components/DataTable",
	component: DataTable,
	argTypes: {
		data: {
			control: {
				type: "object",
			},
		},
	},
};

export default meta;

const Template: StoryFn<DataTableProps> = (args) => <DataTable {...args} />;

export const Default: StoryFn<DataTableProps> = Template.bind({});
Default.args = {
	data: tableData,
};

export const Paginated: StoryFn<DataTableProps> = Template.bind({});
Paginated.args = {
	data: Array(50)
		.fill(0)
		.map((_, index) => ({
			address: `Address ${index + 1}`,
			person: `Person ${index + 1}`,
			code: `Code ${index + 1}`,
			status: index % 2 === 0 ? "Finalizado" : "Em andamento",
			createdAt: new Date().toISOString(),
			options: {
				text: "Details",
				route: `/details/${index + 1}`,
			},
		})),
};

export const Empty: StoryFn<DataTableProps> = Template.bind({});
Empty.args = {
	data: [],
};
