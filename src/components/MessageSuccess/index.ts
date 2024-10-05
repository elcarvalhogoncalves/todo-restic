import { Alert, Platform, ToastAndroid } from "react-native";

export function MessageSuccess(message: string) {
	if (Platform.OS === "android") {
		((msg) => {
			ToastAndroid.show(msg, ToastAndroid.SHORT);
		})(message);
	} else if (Platform.OS === "ios") {
		((msg) => {
			Alert.alert("Sucesso", msg, [{ text: "OK" }]);
		})(message);
	}
}
