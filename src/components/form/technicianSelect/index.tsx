/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { MenuProps, components } from "react-select";
import { technicians } from "../../../constants/technician";
import useModal from "../../../functions/use-modal";
import { Client } from "../../../models/client";
import { Technician } from "../../../models/technician";
import ModalTecnico from "../../../pages/tecnicos/modalTecnico";
import Avatar from "../../avatar";
import { Modal } from "../../modal";
import EditedFormPopUp from "../../modal/editedFormPopUp";
import Button from "../button";
import MultiSelect from "../multiSelect";
import { selectOptionType } from "../select";
import { FormFieldsContainer } from "../styles";

interface technicianSelectProps {
	error?: string;
	defaultValue?: string;
	placeholder?: string;
	hasAddNew?: boolean;
	onSelect(value: any): void;
	required?: boolean;
	filter?: string[];
	onSelectTechnicianData?(data: Technician | undefined): void;
}

const TechnicianSelect = ({
	error,
	defaultValue,
	onSelect,
	hasAddNew = true,
	required,
	placeholder,
	onSelectTechnicianData,
}: technicianSelectProps) => {
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
	const [technicianOptions, setTechnicianOptions] = useState<
		selectOptionType[]
	>([]);
	const [value, setValue] = useState<any>();

	useEffect(() => {
		const options = technicians.map((technician) => ({
			value: JSON.stringify(technician),
			label: (
				<div style={{ display: "flex", alignItems: "center", gap: 10 }}>
					<Avatar variant="gray" alt={technician.name} />
					{technician.name}
				</div>
			),
		}));
		setTechnicianOptions(options);
	}, []);

	useEffect(() => {
		if (technicianOptions?.length) {
			const findClient = technicianOptions?.filter?.((e: any) => {
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
	}, [defaultValue, technicianOptions]);

	const handleSelectTechnician = (data: Technician) => {
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
		setTechnicianOptions((old) => {
			return [...old, newClient];
		});
		setValue(newClient);

		onSelect(data?._id as string);
		onSelectTechnicianData?.(data);
	};

	return (
		<>
			<EditedFormPopUp
				open={hasEditedData && openConfirmCloseModal}
				onOpenChange={setOpenConfirmCloseModal}
				onConfirmCloseModal={onConfirmCloseModal}
			/>
			<Modal open={openModal} onOpenChange={onOpenChange}>
				<ModalTecnico
					onClose={handleCloseModal}
					onSuccess={handleSelectTechnician}
				/>
			</Modal>

			<MultiSelect
				options={technicianOptions}
				placeholder={placeholder}
				required={required}
				components={
					hasAddNew
						? {
								Menu: (props: any) => (
									<TechnicianSelectButton
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
						const { _id } = JSON.parse(data.value) as Technician;

						onSelect(_id);
						onSelectTechnicianData?.(JSON.parse(data.value) as Technician);
					} else {
						onSelect(null);
						onSelectTechnicianData?.(undefined);
					}
				}}
			/>
		</>
	);
};

interface technicianSelectButtonProps extends MenuProps<any> {
	onOpenModal: (value: boolean) => void;
}

export const TechnicianSelectButton = ({
	onOpenModal,
	...props
}: technicianSelectButtonProps) => {
	return (
		<>
			<components.Menu {...props}>
				{props.children}
				<FormFieldsContainer style={{ marginTop: 20 }}>
					<Button buttonStyle="link" onClick={() => onOpenModal(true)}>
						Cadastrar técnico
					</Button>
				</FormFieldsContainer>
			</components.Menu>
		</>
	);
};

export default TechnicianSelect;
