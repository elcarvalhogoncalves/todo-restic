import { Body, Title } from "./styles";
import Feather from "@expo/vector-icons/Feather";

type ButtonAddProps = {
	handleModalCreateTask: () => void;
	title: string;
};

export function ButtonAdd({ handleModalCreateTask, title }: ButtonAddProps) {
	return (
		<Body onPress={handleModalCreateTask}>
			<Title>{title}</Title>
			<Feather name="plus" size={24} stroke-width={20} color="black" />
		</Body>
	);
}
