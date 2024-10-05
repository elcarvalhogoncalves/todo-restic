import { Body, Data, Today } from "./styles";

export function HeaderDate() {
	const currentDate = new Date();
	const hours = currentDate.getHours();
	return (
		<Body>
			<Today>Hoje,</Today>
			<Data>
				{currentDate.toLocaleDateString("pt-BR", {
					day: "2-digit",
					month: "long",
					year: "numeric",
				})}
			</Data>
		</Body>
	);
}
