import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { MdDone } from "react-icons/md";
import { toast } from "sonner";
import { addNewProps } from "../../models/add-new";
import { tecnicoSchema, tecnicoTS } from "../../utils/tecnicoSchema";
import Input from "../form/input";
import { FormContainer, FormFieldsContainer } from "../form/styles";
import {
	ActionAlertDialogContent,
	ActionAlertDialogHeader,
	ActionAlertDialogTriggerButtons,
	ActionAlertDialogTriggerClose,
	ActionAlertDialogTriggerSuccess,
} from "../modal/actionAlertModal";
import { Modal } from "./styles";

export interface ModalTecnicoProps extends addNewProps {}

const ModalTecnico = ({
	onSetEditedData,
	onSuccess,
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
		toast.success("Técnico cadastrado!", {
			duration: 2500,
		});
		onSuccess?.();
	};

	return (
		<Modal>
			<ActionAlertDialogHeader>
				<h2>Cadastrar Técnico</h2>
			</ActionAlertDialogHeader>
			<ActionAlertDialogContent>
				<p>Você pode usar essa tela para cadastrar os técnicos</p>
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
					Cadastrar
				</ActionAlertDialogTriggerSuccess>
			</ActionAlertDialogTriggerButtons>
		</Modal>
	);
};

export default ModalTecnico;
