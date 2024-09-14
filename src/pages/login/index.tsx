import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Rigel from "../../assets/icon.png";
import Button from "../../components/form/button";
import Input from "../../components/form/input";
import {
	FormContainer,
	FormFieldsContainer,
} from "../../components/form/styles";
import { useAppDispatch } from "../../redux/hooks/useApp";
import { addToken } from "../../redux/reducers/user-reducer";
import { useMutationQuery } from "../../services/hooks/useMutationQuery";
import { gestorSchema, GestorTS } from "../../utils/gestorSchema";
import { Container, Left, Right } from "./styles";

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<GestorTS>({
		resolver: zodResolver(gestorSchema),
	});

	const dispatch = useAppDispatch();
	const {
		mutate: onLogin,
		isLoading,
		isError,
	} = useMutationQuery(`/login/`, "post");

	function onSubmit(data: GestorTS) {
		onLogin(data, {
			onSuccess: (response) => {
				console.log("erro");
				dispatch(addToken(response.data.token));
				toast.success("Login feito com sucesso!", {
					duration: 2500,
				});
			},
			onError: () => {
				console.log("erro");
				toast.error("Falha ao fazer login!", {
					duration: 2500,
				});
			},
		});
	}

	return (
		<Container>
			<Left>
				<div className="top">
					<img src={Rigel} alt="Logo" />
					<h2>Rigel Solar</h2>
				</div>
				<div className="bottom">
					<h2>
						"Transforme a luz do sol em economia e sustentabilidade para sua
						casa ou empresa. Com a energia solar fotovoltaica, você reduz sua
						conta de luz e contribui para um futuro mais verde."
					</h2>
					<p>Rigel Solar</p>
				</div>
			</Left>
			<Right>
				<h2>Fazer login</h2>
				<p>Digite seu email e senha abaixo para fazer login</p>
				<FormContainer onSubmit={handleSubmit(onSubmit)}>
					<FormFieldsContainer>
						<Input
							type="email"
							placeholder="name@example.com"
							{...register("email")}
							error={errors.email?.message}
						/>
						<Input
							type="password"
							placeholder="********"
							{...register("password")}
							error={errors.password?.message}
						/>
					</FormFieldsContainer>
					<FormFieldsContainer>
						<Button
							type="submit"
							buttonStyle="primary"
							buttonState={isError ? "error" : "normal"}
							isLoading={isLoading}
						>
							Log in
						</Button>
					</FormFieldsContainer>
				</FormContainer>
			</Right>
		</Container>
	);
};

export default Login;
