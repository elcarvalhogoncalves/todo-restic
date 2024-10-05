import { Body, PersonImage, PersonTitle } from "./styles";

import Feather from "@expo/vector-icons/Feather";
import { Text } from "react-native";

type HeaderProfileProps = {
	name: string;
};

export function HeaderProfile({ name }: HeaderProfileProps) {
	const currentDate = new Date();
	const hours = currentDate.getHours();
	return (
		<Body>
			<PersonImage>
				<Feather name="user" size={32} color="black" />
			</PersonImage>
			<PersonTitle>
				{hours >= 4 && hours < 13
					? "Bom dia"
					: hours >= 13 && hours < 18
						? "Boa tarde"
						: "Boa noite"}
				,
				<Text style={{ fontFamily: "Poppins_600SemiBold" }}>
					{" "}
					{name}
				</Text>
			</PersonTitle>
		</Body>
	);
}
