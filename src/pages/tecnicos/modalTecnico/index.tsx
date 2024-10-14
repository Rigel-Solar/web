import { zodResolver } from "@hookform/resolvers/zod";
import { DialogClose } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLeftCircle } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { PiTrashLight } from "react-icons/pi";
import { toast } from "sonner";
import Button from "../../../components/form/button";
import Input from "../../../components/form/input";
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
import { useMutationQuery } from "../../../services/hooks/useMutationQuery";
import { tecnicoSchema, TecnicoTS } from "../../../utils/tecnicoSchema";
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
	} = useForm<TecnicoTS>({
		resolver: zodResolver(tecnicoSchema),
		defaultValues: {
			crea: "",
			usuario: {
				nome: "",
				email: "",
				senha: "",
			},
		},
	});

	const { mutate: onCreate, isLoading } = useMutationQuery(
		`/Tecnico/`,
		data ? "put" : "post"
	);

	const { mutate: onDeleteTecnico } = useMutationQuery(`/Tecnico/`, "delete");

	function onDelete() {
		onDeleteTecnico(
			{ id: data?.id },
			{
				onSuccess: () => {
					toast.success("Técnico deletado com sucesso!", { duration: 2500 });
				},
				onError: () => {
					toast.error("Falha ao deletar técnico!", { duration: 2500 });
				},
			}
		);
	}

	useEffect(() => {
		if (isDirty) {
			onSetEditedData?.(true);
		}
	}, [isDirty]);

	function onSubmit(formData: TecnicoTS) {
		onCreate(formData, {
			onSuccess: () => {
				toast.success(
					`Técnico ${data ? "Atualizado" : "Cadastrado"} com sucesso!`,
					{
						duration: 2500,
					}
				);
			},
			onError: () => {
				toast.error(`Falha em ${data ? "Atualizar" : "Cadastrar"} Técnico!`, {
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
					{data ? "Atualizar" : "Cadastrar"} Técnico
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
				<FormContainer>
					<FormFieldsContainer>
						<Input
							type="text"
							label="Nome do técnico"
							autoComplete="off"
							{...register("usuario.nome")}
							error={errors.usuario?.nome?.message}
						/>
						<Input
							type="email"
							label="E-mail"
							autoComplete="off"
							{...register("usuario.email")}
							error={errors.usuario?.email?.message}
						/>
						<Input
							type="password"
							label="Senha"
							autoComplete="off"
							{...register("usuario.senha")}
							error={errors.usuario?.senha?.message}
						/>
						<Input
							type="text"
							label="CREA"
							autoComplete="off"
							{...register("crea")}
							error={errors.crea?.message}
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
					disabled={isLoading}
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
