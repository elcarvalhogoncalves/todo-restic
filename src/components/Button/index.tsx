import { Body, TextButton } from "./styles";

import { ButtonProps } from "../../utils/types";
type Props = {
	type?: ButtonProps;
	title: string;
	onPress?: () => void;
};

export function Button({ type, title, onPress }: Props) {
	return (
		<Body type={type} onPress={onPress}>
			<TextButton type={type}>{title}</TextButton>
		</Body>
	);
}
