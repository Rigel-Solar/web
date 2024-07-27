import { zodResolver } from "@hookform/resolvers/zod";
import { DialogClose } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLeftCircle } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { PiTrashLight } from "react-icons/pi";
import { toast } from "sonner";
import Input from "../../../components/form/input";
import Button from "../../../components/form/button";
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
import { Technician } from "../../../models/technician";
import { tecnicoSchema, tecnicoTS } from "../../../utils/tecnicoSchema";
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
	const [openModal, setOpenModal] = useState(false);

	const handleOpenModal = () => setOpenModal(true);

	const onOpenChange = () => {
		setOpenModal(!openModal);
	};

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
				<ActionAlertDialogTitle>
					{data ? "Atualizar" : "Cadastrar"} Técnico
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
			<VisuallyHidden>
				<ActionAlertDialogDescription>
					Modal do técnico
				</ActionAlertDialogDescription>
			</VisuallyHidden>
		</ModalContainer>
	);
};

export default ModalTecnico;
