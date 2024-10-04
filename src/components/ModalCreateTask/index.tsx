import { HeaderModal } from "../HeaderModal";
import { Input } from "../Input";
import { Label } from "../Label";
import { Button } from "../Button";
import { Body, Container } from "./styles";
import { Alert, Modal, View } from "react-native";
import { useContext, useState } from "react";
import { TaskProps } from "../../utils/types";
import { TaskContext } from "../../context/TaskContext";
import { KeyboardAvoidingView, Platform } from "react-native";

type ModalCreateTaskProps = {
	modalVisible: boolean;
	handleModalCreateTask: () => void;
};

export function ModalCreateTask({
	modalVisible,
	handleModalCreateTask,
}: ModalCreateTaskProps) {
	const { tasks, createTask, setTasks } = useContext(TaskContext);
	const [taskText, setTaskText] = useState("");
	const [taskTextArea, setTaskTextArea] = useState("");

	function closeAndClearTextModal() {
		setTaskText("");
		setTaskTextArea("");
		handleModalCreateTask();
	}

	function handleTaskAdd() {
		if (taskText.length === 0) {
			return Alert.alert(
				"Campo vazio",
				"Você precisa preencher o nome de tarefa"
			);
		}

		if (tasks.some((task) => task.title === taskText)) {
			return Alert.alert(
				"Tarefa já cadastrada",
				"Você não pode cadastrar uma tarefa que já existe"
			);
		}
		createTask(taskText, taskTextArea);
		setTaskText("");
		setTaskTextArea("");
		handleModalCreateTask();
	}

	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={modalVisible}
			statusBarTranslucent={true}
		>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				style={{ flex: 1 }}
			>
				<Body>
					<Container>
						<HeaderModal
							title="Criar Tarefa"
							handleModalCreateTask={closeAndClearTextModal}
						/>
						<Label text="Nome da tarefa:" />
						<Input onChangeText={setTaskText} value={taskText} />
						<Label text="Descrição da tarefa:" />
						<Input
							type="TEXTAREA"
							onChangeText={setTaskTextArea}
							value={taskTextArea}
						/>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								width: "100%",
							}}
						>
							<Button
								title="Criar"
								type="success"
								onPress={handleTaskAdd}
							/>
							<Button
								title="Cancelar"
								onPress={closeAndClearTextModal}
							/>
						</View>
					</Container>
				</Body>
			</KeyboardAvoidingView>
		</Modal>
	);
}
