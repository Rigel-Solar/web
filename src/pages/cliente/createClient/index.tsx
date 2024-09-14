import { zodResolver } from "@hookform/resolvers/zod";
import { DialogClose } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { AiOutlineLeftCircle } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { PiTrashLight } from "react-icons/pi";
import { toast } from "sonner";
import Button from "../../../components/form/button";
import Input from "../../../components/form/input";
import SelectComponent from "../../../components/form/select";
import {
	FormContainer,
	FormFieldsContainer,
} from "../../../components/form/styles";
import {
	ActionAlertDialogContent,
	ActionAlertDialogDescription,
	ActionAlertDialogHeader,
	ActionAlertDialogTitle,
	ActionAlertDialogTriggerButtons,
	ActionAlertDialogTriggerClose,
	ActionAlertDialogTriggerSuccess,
} from "../../../components/modal/actionAlertModal";
import PopUpDelete from "../../../components/modal/popUp/popUpDelete";
import { addNewProps } from "../../../models/add-new";
import { ClientTS, clientSchema } from "../../../utils/clientSchema";
import { ModalContainer } from "./styles";

export interface ModalClientProps extends addNewProps {
	data?: ClientTS;
}

const ModalClient = ({
	onSetEditedData,
	onSuccess,
	data,
	...props
}: ModalClientProps) => {
	const [openModal, setOpenModal] = useState(false);

	const options = [
		{
			label: "Pessoa Física",
			value: "1",
		},
		{
			label: "Pessoa Jurídica",
			value: "2",
		},
	];

	const handleOpenModal = () => setOpenModal(true);

	const onOpenChange = () => {
		setOpenModal(!openModal);
	};

	const {
		register,
		handleSubmit,
		control,
		formState: { errors, isDirty },
	} = useForm<ClientTS>({
		resolver: zodResolver(clientSchema),
	});

	useEffect(() => {
		if (isDirty) {
			onSetEditedData?.(true);
		}
	}, [isDirty]);

	const onSubmit = (data: ClientTS) => {
		console.log("Form submitted:", data);
		toast.success(data ? "Cliente atualizado!" : "Cliente cadastrado!", {
			duration: 2500,
		});
		onSuccess?.();
	};

	return (
		<ModalContainer>
			<ActionAlertDialogHeader $between={!!data}>
				<DialogClose>
					<AiOutlineLeftCircle size={20} />
				</DialogClose>
				<ActionAlertDialogTitle>
					{data ? "Atualizar" : "Cadastrar"} Cliente
				</ActionAlertDialogTitle>
				{data && (
					<>
						<Button buttonStyle="text" onClick={handleOpenModal}>
							<PiTrashLight size={20} color="#ff4d4d" />
						</Button>
						<PopUpDelete open={openModal} onOpenChange={onOpenChange} />
					</>
				)}
			</ActionAlertDialogHeader>
			<ActionAlertDialogContent>
				<FormContainer autoComplete="off">
					<FormFieldsContainer>
						<Input
							type="text"
							label="Nome do cliente"
							autoComplete="off"
							{...register("name")}
							error={errors.name?.message}
						/>
						<Input
							type="email"
							label="E-mail"
							autoComplete="off"
							{...register("email")}
							error={errors.email?.message}
						/>
						<Controller
							name="type"
							control={control}
							render={({ field }) => (
								<SelectComponent
									label="Tipo de Cliente"
									options={options}
									style={{ width: "100%" }}
									value={field.value}
									onValueChange={field.onChange}
									error={errors.type?.message}
								/>
							)}
						/>
						<FormFieldsContainer columns={2}>
							<Input
								type="number"
								label="CEP"
								autoComplete="off"
								{...register("address.zipCode")}
								error={errors.address?.zipCode?.message}
							/>
							<Input
								type="number"
								label="N°"
								autoComplete="off"
								{...register("address.number")}
								error={errors.address?.number?.message}
							/>
						</FormFieldsContainer>
						<Input
							type="text"
							label="Rua"
							autoComplete="off"
							{...register("address.street")}
							error={errors.address?.street?.message}
						/>
						<FormFieldsContainer columns={2}>
							<Input
								type="text"
								label="Cidade"
								autoComplete="off"
								{...register("address.city")}
								error={errors.address?.city?.message}
							/>
							<Input
								type="text"
								label="Bairro"
								autoComplete="off"
								{...register("address.neighbourhood")}
								error={errors.address?.neighbourhood?.message}
							/>
						</FormFieldsContainer>
					</FormFieldsContainer>
				</FormContainer>
			</ActionAlertDialogContent>
			<ActionAlertDialogTriggerButtons>
				<ActionAlertDialogTriggerClose onClick={props.onClose}>
					Cancelar
				</ActionAlertDialogTriggerClose>
				<ActionAlertDialogTriggerSuccess
					onClick={handleSubmit(onSubmit)}
					style={{ gap: 4 }}
				>
					<MdDone size={18} />
					{data ? "Atualizar" : "Cadastrar"}
				</ActionAlertDialogTriggerSuccess>
			</ActionAlertDialogTriggerButtons>
			<VisuallyHidden>
				<ActionAlertDialogDescription>
					Modal do Cliente
				</ActionAlertDialogDescription>
			</VisuallyHidden>
		</ModalContainer>
	);
};

export default ModalClient;
