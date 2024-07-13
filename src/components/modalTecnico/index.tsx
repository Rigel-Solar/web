/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MdDone } from "react-icons/md";
import { toast } from "sonner";
import * as z from "zod";
import { modalActions } from "../../models/modal";
import Input from "../form/input";
import { FormContainer, FormFieldsContainer } from "../form/styles";
import {
	ActionAlertDialogContent,
	ActionAlertDialogHeader,
	ActionAlertDialogRoot,
	ActionAlertDialogTriggerButtons,
	ActionAlertDialogTriggerClose,
	ActionAlertDialogTriggerSuccess,
} from "../modal/actionAlertModal";

interface ModalTecnicoProps<T extends object = any> extends modalActions<T> {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	onSuccess(): void;
}

const schema = z.object({
	name: z
		.string()
		.min(3, "O nome precisa conter no mínimo 3 caracteres")
		.transform((name) => {
			return name
				.trim()
				.split(" ")
				.map((word) => {
					return word[0].toLocaleUpperCase().concat(word.substring(1));
				})
				.join(" ");
		}),

	email: z.string().email("Digite um e-mail válido").toLowerCase(),
	password: z.string().min(8, "A senha precisa conter no mínimo 8 caracteres"),
});

type tecnicoSchema = z.infer<typeof schema>;

const ModalTecnico = ({
	onOpenChange,
	onSuccess,
	open,
	...props
}: ModalTecnicoProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<tecnicoSchema>({
		resolver: zodResolver(schema),
	});

	const onSubmit = (data: tecnicoSchema) => {
		console.log("Form submitted:", data);
		toast.success("Técnico cadastrado!", {
			duration: 2500,
			
		});
		onSuccess();
	};

	return (
		<ActionAlertDialogRoot open={open} onOpenChange={() => onOpenChange(!open)}>
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
		</ActionAlertDialogRoot>
	);
};

export default ModalTecnico;
