import { zodResolver } from "@hookform/resolvers/zod";
import { DialogClose } from "@radix-ui/react-dialog";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLeftCircle } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { PiTrashLight } from "react-icons/pi";
import { toast } from "sonner";
import { addNewProps } from "../../models/add-new";
import { Technician } from "../../models/technician";
import { tecnicoSchema, tecnicoTS } from "../../utils/tecnicoSchema";
import Button from "../form/button";
import Input from "../form/input";
import { FormContainer, FormFieldsContainer } from "../form/styles";
import {
	ActionAlertDialogContent,
	ActionAlertDialogHeader,
	ActionAlertDialogTriggerButtons,
	ActionAlertDialogTriggerClose,
	ActionAlertDialogTriggerSuccess,
} from "../modal/actionAlertModal";
import { ModalContainer } from "./styles";

export interface ModalTecnicoProps extends addNewProps {
	data?: Technician;
}

const ModalTecnico = ({
	onSetEditedData,
	onSuccess,
	data,
	...props
}: ModalTecnicoProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isDirty },
	} = useForm<tecnicoTS>({
		resolver: zodResolver(tecnicoSchema),
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

	const onSubmit = (data: tecnicoTS) => {
		console.log("Form submitted:", data);
		{
			data
				? toast.success("Técnico atualizado!", {
						duration: 2500,
					})
				: toast.success("Técnico cadastrado!", {
						duration: 2500,
					});
		}

		onSuccess?.();
	};

	return (
		<ModalContainer>
			<ActionAlertDialogHeader $between={!!data}>
				<DialogClose>
					<AiOutlineLeftCircle size={20} />
				</DialogClose>
				<h2>{data ? "Atualizar" : "Cadastrar"} Técnico</h2>
				{data && (
					<Button buttonStyle="text">
						<PiTrashLight size={20} color="#ff4d4d" />
					</Button>
				)}
			</ActionAlertDialogHeader>
			<ActionAlertDialogContent>
				{!data && <p>Você pode usar essa tela para cadastrar os técnicos</p>}
				<FormContainer>
					<FormFieldsContainer>
						<Input
							type="text"
							label="Nome do técnico"
							{...register("name")}
							error={errors.name?.message}
						/>
						<Input
							type="email"
							label="E-mail"
							{...register("email")}
							error={errors.email?.message}
						/>
						<Input
							type="password"
							label="Senha"
							{...register("password")}
							error={errors.password?.message}
						/>
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
		</ModalContainer>
	);
};

export default ModalTecnico;
