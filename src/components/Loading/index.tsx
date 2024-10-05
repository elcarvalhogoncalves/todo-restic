import { Body } from "./styles";

import { ActivityIndicator } from "react-native";

export function Loading() {
	return (
		<Body>
			<ActivityIndicator size="large" color="#fff" />
		</Body>
	);
}
