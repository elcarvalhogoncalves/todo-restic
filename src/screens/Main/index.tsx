import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Tasks } from "../../components/Tasks";
import { Body } from "./styles";
export function Main() {
	return (
		<Body>
			<Header />
			<Container>
				<Tasks />
			</Container>
		</Body>
	);
}
