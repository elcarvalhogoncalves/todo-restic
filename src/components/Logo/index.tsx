import { Body, LogoText } from "./styles";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export function Logo() {
	return (
		<Body>
			<LogoText>toNote</LogoText>
			<MaterialIcons name="edit-note" size={56} color="#333333" />
		</Body>
	);
}
