/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { Client } from "../../../models/client";
import { useMutationQuery } from "../../../services/hooks/useMutationQuery";
import { ClientTS, clientSchema } from "../../../utils/clientSchema";
import { ModalContainer } from "./styles";

export interface ModalClientProps extends addNewProps {
	data?: Client;
	refetch?(): void;
}

const ModalClient = ({
	onSetEditedData,
	onSuccess,
	data,
	refetch,
	...props
}: ModalClientProps) => {
	const [openModal, setOpenModal] = useState(false);

	const { mutate: onCreate, isLoading } = useMutationQuery(
		data ? `/Cliente/${data?.id}` : "/Cliente",
		data ? "put" : "post"
	);

	const { mutate: onDeleteClient } = useMutationQuery(`/Cliente?id=${data?.id}`, "delete");

	function onDelete() {
		onDeleteClient(
			{
				onSuccess: () => {
					toast.success("Cliente deletado com sucesso!", { duration: 2500 });
				},
				onError: () => {
					toast.error("Falha ao deletar cliente!", { duration: 2500 });
				},
			}
		);
	}

	const options = [
		{
			label: "Pessoa Física",
			value: "Pessoa Física",
		},
		{
			label: "Pessoa Jurídica",
			value: "Pessoa Jurídica",
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

	function onSubmit(data: ClientTS) {
		const formData: any = data;
		formData.endereco = `${data.endereco.city}, ${data.endereco.neighbourhood}, ${data.endereco.street}, ${data.endereco.number}, ${data.endereco.zipCode}`;
		onCreate(formData, {
			onSuccess: () => {
				toast.success(
					`Cliente ${data ? "Atualizado" : "Cadastrado"} com sucesso!`,
					{
						duration: 2500,
					}
				);
				// refetch?.();w
			},
			onError: () => {
				toast.error(`Falha em ${data ? "Atualizar" : "Cadastrar"} Cliente!`, {
					duration: 2500,
				});
			},
		});
		onSuccess?.();
	}

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
						<PopUpDelete
							open={openModal}
							onOpenChange={onOpenChange}
							onDelete={onDelete}
						/>
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
							{...register("nome")}
							error={errors.nome?.message}
						/>
						<Input
							type="email"
							label="E-mail"
							autoComplete="off"
							{...register("email")}
							error={errors.email?.message}
						/>
						<Controller
							name="tipo"
							control={control}
							render={({ field }) => (
								<SelectComponent
									label="Tipo de Cliente"
									options={options}
									style={{ width: "100%" }}
									value={field.value}
									onValueChange={field.onChange}
									error={errors.tipo?.message}
								/>
							)}
						/>
						<FormFieldsContainer columns={2}>
							<Input
								type="number"
								label="CEP"
								autoComplete="off"
								{...register("endereco.zipCode")}
								error={errors.endereco?.zipCode?.message}
							/>
							<Input
								type="number"
								label="N°"
								autoComplete="off"
								{...register("endereco.number")}
								error={errors.endereco?.number?.message}
							/>
						</FormFieldsContainer>
						<Input
							type="text"
							label="Rua"
							autoComplete="off"
							{...register("endereco.street")}
							error={errors.endereco?.street?.message}
						/>
						<FormFieldsContainer columns={2}>
							<Input
								type="text"
								label="Cidade"
								autoComplete="off"
								{...register("endereco.city")}
								error={errors.endereco?.city?.message}
							/>
							<Input
								type="text"
								label="Bairro"
								autoComplete="off"
								{...register("endereco.neighbourhood")}
								error={errors.endereco?.neighbourhood?.message}
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
					disabled={isLoading}
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
