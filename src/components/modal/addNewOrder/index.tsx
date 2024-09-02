import { zodResolver } from "@hookform/resolvers/zod";
import { VisuallyHidden } from "@radix-ui/themes";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { toast } from "sonner";
import { addNewProps } from "../../../models/add-new";
import { Client } from "../../../models/client";
import { orderSchema, OrderTS } from "../../../utils/pedidoSchema";
import ClientSelect from "../../form/clientSelect";
import Input from "../../form/input";
import SelectComponent from "../../form/select";
import { FormContainer, FormFieldsContainer } from "../../form/styles";
import { ActionAlertDialogTriggerSuccess } from "../actionAlertModal";
import {
	Content,
	Description,
	Header,
	Title,
	TriggerButtons,
	TriggerClose,
} from "./styles";

export interface AddNewOrderProps extends addNewProps {}

const AddNewOrder = ({
	onSuccess,
	onSetEditedData,
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
			light_cost: 0,
		},
	});

	const handleSelectClient = (value: Client) => {
		setValue("client", value, {
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

	const time = [
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

	const onSubmit = (data: OrderTS) => {
		console.log("Form submitted:", data);
		toast.success(data ? "Pedido atualizado!" : "Pedido Criado!", {
			duration: 2500,
		});
		onSuccess?.();
	};

	return (
		<>
			<Header>
				<TriggerClose>
					<AiOutlineCloseCircle />
				</TriggerClose>
				<Title>Criar um pedido</Title>
			</Header>
			<Content>
				<FormContainer>
					<FormFieldsContainer>
						<ClientSelect
							placeholder="Selecione um cliente"
							onSelect={handleSelectClient}
							onSelectClientData={(value) => {
								if (value) {
									setValue("client", value, {
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
							error={errors.type_person?.message}
							onValueChange={(value: string) => {
								setValue("type_person", value, {
									shouldDirty: true,
									shouldValidate: true,
								});
							}}
						/>
						<SelectComponent
							options={type_order}
							required
							label="Soluções"
							error={errors.type_order?.message}
							onValueChange={(value: string) => {
								setValue("type_order", value, {
									shouldDirty: true,
									shouldValidate: true,
								});
							}}
						/>
						<SelectComponent
							options={time}
							required
							label="Pretende instalar em:"
							error={errors.time?.message}
							onValueChange={(value: string) => {
								setValue("time", value, {
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
							{...register("light_cost")}
							error={errors.light_cost?.message}
						/>
						<Input
							type="text"
							label="Comentários"
							{...register("comments")}
							error={errors.comments?.message}
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
				>
					<MdDone size={18} />
					Criar
				</ActionAlertDialogTriggerSuccess>
			</TriggerButtons>
		</>
	);
};

export default AddNewOrder;
