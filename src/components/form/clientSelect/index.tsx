/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { MenuProps, components } from "react-select";
import useModal from "../../../functions/use-modal";
import { Client } from "../../../models/client";
import ModalClient from "../../../pages/cliente/createClient";
import { useFetch } from "../../../services/hooks/useFetch";
import Avatar from "../../avatar";
import { Modal } from "../../modal";
import EditedFormPopUp from "../../modal/editedFormPopUp";
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
	onSelectClientName?(name: string | undefined): void;
	onSelectClientEmail?(email: string | undefined): void;
}

const ClientSelect = ({
	error,
	defaultValue,
	onSelect,
	hasAddNew = true,
	required,
	placeholder,
	filter,
	onSelectClientData,
	onSelectClientName,
	onSelectClientEmail,
}: clientSelectProps) => {
	const {
		openModal,
		onConfirmCloseModal,
		handleCloseModal,
		handleOpenModal,
		hasEditedData,
		openConfirmCloseModal,
		setOpenConfirmCloseModal,
		onOpenChange,
	} = useModal();
	const [clientOptions, setClientOptions] = useState<selectOptionType[]>([]);
	const [value, setValue] = useState<any>();

	const { data: clients = [] } = useFetch<Client[]>("/Cliente", ["client"], {
		staleTime: 1000 * 6 * 60,
		cacheTime: 1000 * 6 * 60,
		keepPreviousData: true,
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		if (!clients) return;
		
		let filteredData = clients;
		if (filter?.length) {
			filteredData = clients.filter((cl) => filter.includes(cl.id));
		}

		setClientOptions(
			filteredData.map((client) => ({
				value: JSON.stringify(client),
				label: (
					<div className="multi-select-option" style={{ display: "flex", alignItems: "center", gap: 10 }}>
						<Avatar variant="gray" alt={client.nome} />
						{client.nome}
					</div>
				),
			}))
		);
	}, [clients, filter]);

	useEffect(() => {
		if (clientOptions?.length && defaultValue) {
			const findClient = clientOptions.find((option) => {
				const { id } = JSON.parse(option.value) as Client;
				return defaultValue === id;
			});

			if (findClient) {
				setValue(findClient);
			}
		}
	}, [defaultValue, clientOptions]);

	const handleSelectClient = (data: Client) => {
		if (!data) return;
		const newClient = {
			value: JSON.stringify(data),
			label: (
				<div className="multi-select-option" style={{ display: "flex", alignItems: "center", gap: 10 }}>
					<Avatar variant="gray" alt={data?.nome} />
					{data.nome}
				</div>
			),
		};
		setClientOptions((old) => [...old, newClient]);
		setValue(newClient);
		onSelect(data?.id as string);
		onSelectClientData?.(data);
		onSelectClientName?.(data?.nome);
		onSelectClientEmail?.(data?.email);
	};

	return (
		<>
			<EditedFormPopUp
				open={hasEditedData && openConfirmCloseModal}
				onOpenChange={setOpenConfirmCloseModal}
				onConfirmCloseModal={onConfirmCloseModal}
			/>
			<Modal open={openModal} onOpenChange={onOpenChange}>
				<ModalClient
					onClose={handleCloseModal}
					onSuccess={handleSelectClient}
				/>
			</Modal>
			<MultiSelect
				options={clientOptions}
				placeholder={placeholder}
				required={required}
				components={
					hasAddNew
						? {
								Menu: (props: any) => (
									<ClientSelectButtons
										onOpenModal={handleOpenModal}
										{...props}
									/>
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
						const client = JSON.parse(data.value) as Client;
						onSelect(client.id);
						onSelectClientData?.(client);
						onSelectClientName?.(client?.nome);
						onSelectClientEmail?.(client?.email);
					} else {
						onSelect(null);
						onSelectClientData?.(undefined);
						onSelectClientName?.(undefined);
						onSelectClientEmail?.(undefined);
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