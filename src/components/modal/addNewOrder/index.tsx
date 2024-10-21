import { zodResolver } from "@hookform/resolvers/zod";
import { DialogClose } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLeftCircle } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { PiTrashLight } from "react-icons/pi";
import { toast } from "sonner";
import { concessionarias } from "../../../constants/concessionaria";
import { addNewProps } from "../../../models/add-new";
import { VistoriaTS } from "../../../models/vistoria";
import { useMutationQuery } from "../../../services/hooks/useMutationQuery";
import { OrderTS, orderSchema } from "../../../utils/pedidoSchema";
import Button from "../../form/button";
import ClientSelect from "../../form/clientSelect";
import Input from "../../form/input";
import SelectComponent from "../../form/select";
import { FormContainer, FormFieldsContainer } from "../../form/styles";
import TechnicianSelect from "../../form/technicianSelect";
import {
	ActionAlertDialogHeader,
	ActionAlertDialogTitle,
	ActionAlertDialogTriggerSuccess,
} from "../actionAlertModal";
import PopUpDelete from "../popUp/popUpDelete";
import {
	Content,
	Description,
	ModalContainer,
	TriggerButtons,
	TriggerClose,
} from "./styles";

export interface AddNewOrderProps extends addNewProps {
	data?: VistoriaTS;
}

const AddNewOrder = ({
	onSuccess,
	onSetEditedData,
	data,
	...props
}: AddNewOrderProps) => {
	const {
		register,
		handleSubmit,
		setValue,
		formState: { isDirty, errors },
	} = useForm<OrderTS>({
		resolver: zodResolver(orderSchema),
		defaultValues: {
			valorContaLuz: 0,
		},
	});

	const [openModal, setOpenModal] = useState(false);

	const handleOpenModal = () => setOpenModal(true);

	const { mutate: onCreate, isLoading } = useMutationQuery(
		`/Vistoria/`,
		data ? "put" : "post"
	);

	const onOpenChange = () => {
		setOpenModal(!openModal);
	};

	const handleSelectClient = (value: string) => {
		setValue("idCliente", value.toString(), {
			shouldDirty: true,
			shouldValidate: true,
		});
	};

	useEffect(() => {
		if (isDirty) {
			onSetEditedData?.(true);
		}
	}, [isDirty]);

	useEffect(() => {
		console.log(errors);
	}, [errors]);

	const type_person = [
		{
			value: "Residência",
			label: "Residência",
		},
		{
			value: "Empresa",
			label: "Empresa",
		},
		{
			value: "Fazenda",
			label: "Fazenda",
		},
	];

	const type_order = [
		{
			value: "Fotovoltaico Residencial",
			label: "Fotovoltaico Residencial",
		},
		{
			value: "Fotovoltaico Comercial",
			label: "Fotovoltaico Comercial",
		},
		{
			value: "Aquecedor Banho",
			label: "Aquecedor Banho",
		},
		{
			value: "Aquecedor Piscina",
			label: "Aquecedor Piscina",
		},
	];

	const pretendeInstalarEm = [
		{
			value: "Imediatamente",
			label: "Imediatamente",
		},
		{
			value: "3 meses",
			label: "3 meses",
		},
		{
			value: "6 meses",
			label: "6 meses",
		},
		{
			value: "1 ano",
			label: "1 ano",
		},
	];

	const { mutate: onDeleteOrder } = useMutationQuery(`/Vistoria/`, "delete");

	function onDelete() {
		onDeleteOrder(
			{ id: data?.id },
			{
				onSuccess: () => {
					toast.success("Pedido deletado com sucesso!", { duration: 2500 });
				},
				onError: () => {
					toast.error("Falha ao deletar pedido!", { duration: 2500 });
				},
			}
		);
	}

	function onSubmit(formData: OrderTS) {
		onCreate(formData, {
			onSuccess: () => {
				toast.success(`Pedido ${data ? "Atualizado" : "Criado"} com sucesso!`, {
					duration: 2500,
				});
			},
			onError: () => {
				toast.error(`Falha em ${data ? "Atualizar" : "Criar"} Pedido!`, {
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
					{data ? "Atualizar" : "Criar"} Pedido
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
			<Content>
				<FormContainer>
					<FormFieldsContainer>
						<ClientSelect
							placeholder="Selecione um cliente"
							onSelect={handleSelectClient}
							defaultValue=""
							onSelectClientData={(value) => {
								if (value) {
									setValue("idCliente", value.id.toString(), {
										shouldDirty: true,
										shouldValidate: true,
									});
								}
							}}
							required
						/>
						<TechnicianSelect
							placeholder="Selecione um tecnico"
							onSelect={(value) => {
								if (value) {
									setValue("idTecnico", value.toString(), {
										shouldDirty: true,
										shouldValidate: true,
									});
								}
							}}
							required
						/>
						<SelectComponent
							options={type_person}
							required
							label="Tipo de Instalação"
							error={errors.tipoInstalacao?.message}
							onValueChange={(value: string) => {
								setValue("tipoInstalacao", value, {
									shouldDirty: true,
									shouldValidate: true,
								});
							}}
						/>
						<SelectComponent
							options={type_order}
							required
							label="Soluções"
							error={errors.solucoes?.message}
							onValueChange={(value: string) => {
								setValue("solucoes", value, {
									shouldDirty: true,
									shouldValidate: true,
								});
							}}
						/>
						<SelectComponent
							options={pretendeInstalarEm}
							required
							label="Pretende instalar em:"
							error={errors.pretendeInstalarEm?.message}
							onValueChange={(value: string) => {
								setValue("pretendeInstalarEm", value, {
									shouldDirty: true,
									shouldValidate: true,
								});
							}}
						/>
						<SelectComponent
							options={concessionarias}
							required
							label="Concessionarias"
							error={errors.concessionarias?.message}
							onValueChange={(value: string) => {
								setValue("concessionarias", value, {
									shouldDirty: true,
									shouldValidate: true,
								});
							}}
						/>
						<Input
							affix={{ prefix: "R$", suffix: "Mês" }}
							type="number"
							required
							label="Custo da conta de Luz"
							{...register("valorContaLuz", {
								setValueAs: (value) => parseFloat(value),
							})}
							error={errors.valorContaLuz?.message}
						/>

						<Input
							type="text"
							label="Comentários"
							{...register("comentarios")}
							error={errors.comentarios?.message}
						/>
					</FormFieldsContainer>
				</FormContainer>
			</Content>
			<Description>
				<VisuallyHidden>Detalhes do pedido</VisuallyHidden>
			</Description>
			<TriggerButtons>
				<TriggerClose onClick={props.onClose}>Cancelar</TriggerClose>
				<ActionAlertDialogTriggerSuccess
					onClick={handleSubmit(onSubmit)}
					style={{ gap: 4 }}
					disabled={isLoading}
				>
					<MdDone size={18} />
					Criar
				</ActionAlertDialogTriggerSuccess>
			</TriggerButtons>
		</ModalContainer>
	);
};

export default AddNewOrder;
