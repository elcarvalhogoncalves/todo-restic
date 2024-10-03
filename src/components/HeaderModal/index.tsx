import { Body, Title, IconButton } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";

type HeaderModalProps = {
	title: string;
	handleModalCreateTask: () => void;
};

export function HeaderModal({
	title,
	handleModalCreateTask,
}: HeaderModalProps) {
	return (
		<Body>
			<Title>{title}</Title>
			<IconButton onPress={handleModalCreateTask}>
				<Ionicons name="close-circle" size={32} color="#cacaca" />
			</IconButton>
		</Body>
	);
}
