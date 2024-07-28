import { zodResolver } from "@hookform/resolvers/zod";
import { DialogClose } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLeftCircle } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { PiTrashLight } from "react-icons/pi";
import { toast } from "sonner";
import { addNewProps } from "../../models/add-new";
import { ClientTS, clientSchema } from "../../utils/clientSchema";
import Button from "../form/button";
import Input from "../form/input";
import SelectComponent from "../form/select";
import { FormContainer, FormFieldsContainer } from "../form/styles";
import {
	ActionAlertDialogContent,
	ActionAlertDialogDescription,
	ActionAlertDialogHeader,
	ActionAlertDialogTitle,
	ActionAlertDialogTriggerButtons,
	ActionAlertDialogTriggerClose,
	ActionAlertDialogTriggerSuccess,
} from "../modal/actionAlertModal";
import PopUpDelete from "../modal/popUp/popUpDelete";
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
			label: "Tipo 1",
			value: "1",
		},
		{
			label: "Tipo 2",
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
		formState: { errors, isDirty },
	} = useForm<ClientTS>({
		resolver: zodResolver(clientSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});

	useEffect(() => {
		if (isDirty) {
			onSetEditedData?.(true);
		}
	}, [isDirty]);

	const onSubmit = (data: ClientTS) => {
		console.log("Form submitted:", data);
		toast.success(data ? "Técnico atualizado!" : "Técnico cadastrado!", {
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
				{!data && <p>Você pode usar essa tela para cadastrar os clientes</p>}
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
						<Input
							type="password"
							label="Senha"
							autoComplete="off"
							{...register("password")}
							error={errors.password?.message}

						/>
						<SelectComponent
							label="Tipo de Cliente"
							options={options}
							defaultValue={options[0].value}
							{...register("type")}
							style={{ width: "100%" }}
						/>
						<FormFieldsContainer columns={2}>
							<Input
								type="text"
								label="CEP"
								autoComplete="off"
								{...register("address.zipCode")}
								error={errors.address?.zipCode?.message}
							/>
							<Input
								type="text"
								label="N°"
								autoComplete="off"
								{...register("address.number")}
								error={errors.address?.number?.message}
							/>
						</FormFieldsContainer>
						<FormFieldsContainer columns={2}>
							<Input
								type="text"
								label="Rua"
								autoComplete="off"
								{...register("address.street")}
								error={errors.address?.street?.message}
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
