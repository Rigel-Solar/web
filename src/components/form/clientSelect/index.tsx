/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { MenuProps, components } from "react-select";
import { clients } from "../../../constants/client";
import { Client } from "../../../models/client";
import ModalClient from "../../../pages/cliente/createClient";
import Avatar from "../../avatar";
import { Modal } from "../../modal";
import Button from "../button";
import MultiSelect from "../multiSelect";
import { selectOptionType } from "../select";
import { FormFieldsContainer } from "../styles";

interface clientSelectProps {
	error?: string;
	defaultValue?: string;
	placeholder?: string;
	hasAddNew?: boolean;
	onSelect(value: any): void;
	required?: boolean;
	filter?: string[];
	onSelectClientData?(data: Client | undefined): void;
}

const ClientSelect = ({
	error,
	defaultValue,
	onSelect,
	hasAddNew = true,
	required,
	placeholder,
	onSelectClientData,
}: clientSelectProps) => {
	const [openModal, setOpenModal] = useState(false);
	const [clientOptions, setClientOptions] = useState<selectOptionType[]>([]);
	const [value, setValue] = useState<any>();

	useEffect(() => {
		const options = clients.map((client) => ({
			value: JSON.stringify(client),
			label: (
				<div style={{ display: "flex", alignItems: "center", gap: 10 }}>
					<Avatar variant="gray" alt={client.name} />
					{client.name}
				</div>
			),
		}));
		setClientOptions(options);
	}, []);

	useEffect(() => {
		if (clientOptions?.length) {
			const findClient = clientOptions?.filter?.((e: any) => {
				const { _id } = JSON.parse(e.value) as Client;
				if (defaultValue === _id) {
					return true;
				}
				return false;
			});

			if (findClient?.length) {
				setValue(findClient[0]);
			}
		}
	}, [defaultValue, clientOptions]);

	const handleSelectClient = (data: Client) => {
		if (!data) return;

		const newClient = {
			value: JSON.stringify(data),
			label: (
				<div style={{ display: "flex", alignItems: "center", gap: 10 }}>
					<Avatar variant="gray" alt={data?.name} />
					{data.name}
				</div>
			),
		};
		setClientOptions((old) => {
			return [...old, newClient];
		});
		setValue(newClient);

		onSelect(data?._id as string);
		onSelectClientData?.(data);
	};

	return (
		<>
			<Modal open={openModal} onOpenChange={() => setOpenModal(!openModal)}>
				<ModalClient
					onClose={() => setOpenModal(false)}
					onSuccess={handleSelectClient}
				/>
			</Modal>

			<MultiSelect
				options={clientOptions}
				placeholder={placeholder}
				required={required}
				className="tiempo-multi-select-input"
				components={
					hasAddNew
						? {
								Menu: (props: any) => (
									<ClientSelectButtons onOpenModal={setOpenModal} {...props} />
								),
							}
						: {}
				}
				error={error}
				value={value}
				isClearable
				onChange={(data: any) => {
					setValue(data);
					if (data) {
						const { _id } = JSON.parse(data.value) as Client;

						onSelect(_id);
						onSelectClientData?.(JSON.parse(data.value) as Client);
					} else {
						onSelect(null);
						onSelectClientData?.(undefined);
					}
				}}
			/>
		</>
	);
};

interface clientSelectButtonProps extends MenuProps<any> {
	onOpenModal: (value: boolean) => void;
}

export const ClientSelectButtons = ({
	onOpenModal,
	...props
}: clientSelectButtonProps) => {
	return (
		<>
			<components.Menu {...props}>
				{props.children}
				<FormFieldsContainer style={{ marginTop: 20 }}>
					<Button buttonStyle="link" onClick={() => onOpenModal(true)}>
						Cadastrar cliente
					</Button>
				</FormFieldsContainer>
			</components.Menu>
		</>
	);
};

export default ClientSelect;
