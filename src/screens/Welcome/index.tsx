import { TaskContext } from "../../context/TaskContext";
import { RootStackParamList } from "../../utils/types";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";

import { Body, WebText, Circle } from "./styles";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect } from "react";
import { Text, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

type navProps = NativeStackScreenProps<RootStackParamList>;

export function Welcome() {
	const { userName, setUserName } = useContext(TaskContext);
	const navigation = useNavigation<navProps["navigation"]>();

	const userNameSchema = Yup.object().shape({
		username: Yup.string()
			.min(3, "Seu username deve ter no mínimo 3 caracteres")
			.max(16, "Seu username deve ter no máximo 16 caracteres")
			.required("Username é obrigatório"),
	});
	useEffect(() => {
		/*
		const clearAsyncStorage = async () => {
			try {
			  await AsyncStorage.clear();
			} catch (e) {
			  console.error(e);
			}
		  };
		  clearAsyncStorage();
		  */
		if (userName) {
			navigation.navigate("Main");
		}
	}, [userName]);

	return (
		<>
			<Body>
				<Circle />
				<Logo />
				<WebText>Olá, me diga seu nome?</WebText>
				<Formik
					initialValues={{ username: userName }}
					validationSchema={userNameSchema}
					onSubmit={(values) => {
						setUserName(values.username);
						navigation.navigate("Main");
					}}
				>
					{({
						handleSubmit,
						handleChange,
						handleBlur,
						values,
						errors,
						touched,
					}) => {
						return (
							<>
								<View
									style={{
										width: "100%",
										marginBottom:
											errors.username && touched.username
												? 8
												: 24,
									}}
								>
									<Input
										type="TEXT_WELCOME"
										value={values.username}
										onChangeText={handleChange("username")}
										onBlur={handleBlur("username")}
									/>
									{errors.username && touched.username && (
										<Text
											style={{
												color: "#f53c28",
											}}
										>
											{errors.username}
										</Text>
									)}
								</View>
								<Button
									type="welcome"
									title="Entrar"
									onPress={handleSubmit}
								/>
							</>
						);
					}}
				</Formik>
			</Body>
		</>
	);
}
