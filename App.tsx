import { StatusBar } from "react-native";
import { ActivityIndicator } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Main } from "./src/screens/Main";
import {
	useFonts,
	Poppins_400Regular,
	Poppins_600SemiBold,
	Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Loading } from "./src/components/Loading";
import TaskProvider from "./src/context/TaskContext";

export default function App() {
	const [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_600SemiBold,
		Poppins_700Bold,
	});
	return (
		<TaskProvider>
			<View style={styles.container}>
				<StatusBar
					barStyle="light-content"
					backgroundColor="transparent"
					translucent
				/>
				{fontsLoaded ? <Main /> : <Loading />}
			</View>
		</TaskProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F2C063",
		flexDirection: "column",
		paddingTop: 24,
	},
});
