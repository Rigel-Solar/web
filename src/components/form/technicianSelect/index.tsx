/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { MenuProps, components } from "react-select";
import useModal from "../../../functions/use-modal";
import { Technician } from "../../../models/technician";
import ModalTecnico from "../../../pages/tecnicos/modalTecnico";
import { useFetch } from "../../../services/hooks/useFetch";
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
	filter,
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

	useFetch<Technician[]>(`/Tecnico`, ["tecnico"], {
		onSuccess: (data) => {
			if (filter?.length) {
				data = data.filter((tec) => filter.includes(tec.id));
			}

			setTechnicianOptions(() =>
				data.map((tecnico) => {
					return {
						value: JSON.stringify(tecnico),
						label: (
							<div
								className="multi-select-option"
								style={{ display: "flex", alignItems: "center", gap: 10 }}
							>
								<Avatar variant="gray" alt={tecnico.usuario.nome} />
								{tecnico.usuario.nome}
							</div>
						),
					};
				})
			);
		},
	});

	useEffect(() => {
		if (technicianOptions?.length) {
			const findTechnician = technicianOptions?.filter?.((e: any) => {
				const { id } = JSON.parse(e.value) as Technician;
				if (defaultValue === id) {
					return true;
				}
				return false;
			});

			if (findTechnician?.length) {
				setValue(findTechnician[0]);
			}
		}
	}, [defaultValue, technicianOptions]);

	const handleSelectTechnician = (data: Technician) => {
		if (!data) return;

		const newTechnician = {
			value: JSON.stringify(data),
			label: (
				<div style={{ display: "flex", alignItems: "center", gap: 10 }}>
					<Avatar variant="gray" alt={data?.usuario.nome} />
					{data.usuario.nome}
				</div>
			),
		};
		setTechnicianOptions((old) => {
			return [...old, newTechnician];
		});
		setValue(newTechnician);

		onSelect(data?.id as string);
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
						const parsedValue = JSON.parse(data.value) as {
							usuario: { id: number };
						};
						const userId = parsedValue.usuario.id;

						onSelect(userId);
						onSelectTechnicianData?.(data.value);
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
