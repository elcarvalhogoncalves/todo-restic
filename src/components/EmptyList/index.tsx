import { Body, Message } from "./styles";

type Props = {
	message: string;
};

export function EmptyList({ message }: Props) {
	return (
		<Body>
			<Message>{message}</Message>
		</Body>
	);
}
