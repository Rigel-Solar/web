import { zodResolver } from "@hookform/resolvers/zod";
import { DialogClose } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/themes";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLeftCircle } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { toast } from "sonner";
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
import { addNewProps } from "../../../models/add-new";
import { Technician } from "../../../models/technician";
import { useMutationQuery } from "../../../services/hooks/useMutationQuery";
import { TecnicoTS, tecnicoSchema } from "../../../utils/tecnicoSchema";
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
		data ? `/Tecnico/${data?.id}` : "/Tecnico",
		data ? "put" : "post"
	);

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
			<ActionAlertDialogHeader>
				<DialogClose>
					<AiOutlineLeftCircle size={20} />
				</DialogClose>
				<ActionAlertDialogTitle>
					{data ? "Atualizar" : "Cadastrar"} Técnico
				</ActionAlertDialogTitle>
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
