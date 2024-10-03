import { Body, Text, Span } from "./styles";

type NotificationProps = {
	number: number;
};

export function Notification({ number }: NotificationProps) {
	return (
		<Body>
			<Text>
				Você tem <Span>{number} tarefas</Span> pendentes
			</Text>
		</Body>
	);
}
