import { Body, TextButton } from "./styles";

import { ButtonProps } from "../../utils/types";
type Props = {
	type?: ButtonProps;
	title: string;
	handleModalCreateTask?: () => void;
};

export function Button({ type, title, handleModalCreateTask }: Props) {
	return (
		<Body type={type} onPress={handleModalCreateTask}>
			<TextButton type={type}>{title}</TextButton>
		</Body>
	);
}
