import { Body, LabelText } from "./styles";

type LabelProps = {
	text: string;
};

export function Label({ text }: LabelProps) {
	return (
		<Body>
			<LabelText>{text}</LabelText>
		</Body>
	);
}
