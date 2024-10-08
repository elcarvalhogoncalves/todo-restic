import { RootStackParamList, TaskProps } from "../../utils/types";
import { MessageSuccess } from "../../components/MessageSuccess";
import { TaskContext } from "../../context/TaskContext";
import { Container } from "../../components/Container";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import { Body } from "./styles";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { Alert, View } from "react-native";

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
						navigation.pop();
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
				backFunction={() => navigation.pop()}
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
						justifyContent:
							taskTextAreaNote !== task.description
								? "space-between"
								: "flex-end",

						width: "100%",
					}}
				>
					{taskTextAreaNote !== task.description && (
						<Button
							title="Salvar"
							type="EDIT"
							onPress={() => handleTaskChange(task)}
						/>
					)}

					<Button
						title="Apagar"
						type="DELETE"
						onPress={() => handleTaskDelete(task)}
					/>
				</View>
			</Container>
		</Body>
	);
}
