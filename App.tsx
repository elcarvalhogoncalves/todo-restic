import {
	useFonts,
	Poppins_400Regular,
	Poppins_600SemiBold,
	Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Loading } from "./src/components/Loading";
import TaskProvider from "./src/context/TaskContext";
import { Main } from "./src/screens/Main";
import { Note } from "./src/screens/Note";

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
	const [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_600SemiBold,
		Poppins_700Bold,
	});

	const Stack = createNativeStackNavigator();

	return (
		<>
			{!fontsLoaded ? (
				<Loading />
			) : (
				<TaskProvider>
					<View style={styles.container}>
						<StatusBar
							barStyle="light-content"
							backgroundColor="transparent"
							translucent
						/>
						<NavigationContainer>
							<Stack.Navigator
								screenOptions={{ headerShown: false }}
							>
								<Stack.Screen name="Main" component={Main} />
								<Stack.Screen name="Note" component={Note} />
							</Stack.Navigator>
						</NavigationContainer>
					</View>
				</TaskProvider>
			)}
		</>
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
