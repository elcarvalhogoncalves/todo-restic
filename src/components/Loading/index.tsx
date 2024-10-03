import { ActivityIndicator } from "react-native";
import { Body } from "./styles";

export function Loading() {
	return (
		<Body>
			<ActivityIndicator size="large" color="#fff" />
		</Body>
	);
}
