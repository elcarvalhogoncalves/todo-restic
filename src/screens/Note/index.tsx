import { Body } from "./styles";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import { useContext, useState } from "react";
import { Alert, Platform, View, ToastAndroid } from "react-native";
import { Button } from "../../components/Button";
import { TaskContext } from "../../context/TaskContext";
import { RootStackParamList, TaskProps } from "../../utils/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { MessageSuccess } from "../../components/MessageSuccess";

type NoteProps = NativeStackScreenProps<RootStackParamList>;

export function Note() {
	const navigation = useNavigation<NoteProps["navigation"]>();
	const { task, tasks, setTasks } = useContext(TaskContext);
	const [taskTextAreaNote, setTaskTextAreaNote] = useState(task.description);

	function handleTaskChange(taskToChange: TaskProps) {
		const map = tasks.map((task) =>
			task.title === taskToChange.title
				? { ...task, description: taskTextAreaNote }
				: task
		);
		MessageSuccess("Descrição alterada com sucesso!");
		setTasks(map);
	}

	function handleTaskDelete(taskToDelete: TaskProps) {
		Alert.alert(
			"Deletar tarefa",
			`Deseja realmente deletar a tarefa ${taskToDelete.title}?`,
			[
				{
					text: "Sim",
					onPress: () => {
						const updateTask = tasks.filter(
							(task) => task.title !== taskToDelete.title
						);
						setTasks(updateTask);
						navigation.popToTop();
					},
				},
				{
					text: "Cancelar",
					style: "cancel",
				},
			]
		);
	}

	return (
		<Body>
			<Header
				backFunction={() => navigation.popToTop()}
				title={task.title}
				checked={task.status}
			/>
			<Container>
				<Label text="Descrição da tarefa:" />
				<Input
					type="TEXTAREA_NOTE"
					onChangeText={setTaskTextAreaNote}
					value={taskTextAreaNote}
				/>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						width: "100%",
					}}
				>
					<Button
						title="Editar"
						type="edit"
						onPress={() => handleTaskChange(task)}
					/>
					<Button
						title="Apagar"
						type="delete"
						onPress={() => handleTaskDelete(task)}
					/>
				</View>
			</Container>
		</Body>
	);
}
