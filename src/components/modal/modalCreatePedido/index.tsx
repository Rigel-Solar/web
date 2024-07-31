import { zodResolver } from "@hookform/resolvers/zod";
import { VisuallyHidden } from "@radix-ui/themes";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { toast } from "sonner";
import { addNewProps } from "../../../models/add-new";
import { orderSchema, OrderTS } from "../../../utils/pedidoSchema";
import ClientSelect from "../../form/clientSelect";
import {
	ActionAlertDialogTriggerButtons,
	ActionAlertDialogTriggerClose,
	ActionAlertDialogTriggerSuccess,
} from "../actionAlertModal";
import { Content, Description, Header, Title, TriggerClose } from "./styles";

export interface ModalPedidoProps extends addNewProps {}

const ModalCreatePedido = ({
	onSuccess,
	onSetEditedData,
	...props
}: ModalPedidoProps) => {
	const {
		handleSubmit,
		setValue,
		formState: { isDirty },
	} = useForm<OrderTS>({
		resolver: zodResolver(orderSchema),
	});

	const handleSelectClient = (value: string) => {
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

	const onSubmit = (data: OrderTS) => {
		console.log("Form submitted:", data);
		toast.success(data ? "Cliente atualizado!" : "Cliente cadastrado!", {
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
				<ClientSelect
					
					placeholder="Selecione um cliente"
					onSelect={handleSelectClient}
					required
				/>
			</Content>
			<Description>
				<VisuallyHidden>Detalhes do pedido</VisuallyHidden>
			</Description>
			<ActionAlertDialogTriggerButtons>
				<ActionAlertDialogTriggerClose onClick={props.onClose}>
					Cancelar
				</ActionAlertDialogTriggerClose>
				<ActionAlertDialogTriggerSuccess
					onClick={handleSubmit(onSubmit)}
					style={{ gap: 4 }}
				>
					<MdDone size={18} />
					Criar
				</ActionAlertDialogTriggerSuccess>
			</ActionAlertDialogTriggerButtons>
		</>
	);
};

export default ModalCreatePedido;
