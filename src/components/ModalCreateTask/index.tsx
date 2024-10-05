import {
	Alert,
	Modal,
	View,
	Text,
	KeyboardAvoidingView,
	Platform,
} from "react-native";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import { MessageSuccess } from "../MessageSuccess";
import { HeaderModal } from "../HeaderModal";
import { Button } from "../Button";
import { Input } from "../Input";
import { Label } from "../Label";
import { Body, Container } from "./styles";
import { Formik } from "formik";
import * as Yup from "yup";

type ModalCreateTaskProps = {
	modalVisible: boolean;
	handleModalCreateTask: () => void;
};

export function ModalCreateTask({
	modalVisible,
	handleModalCreateTask,
}: ModalCreateTaskProps) {
	const { tasks, createTask, setTasks } = useContext(TaskContext);
	const TaskSchema = Yup.object().shape({
		taskTitle: Yup.string()
			.min(3, "Título da tarefa deve ter no mínimo 3 caracteres")
			.max(16, "Título da tarefa deve ter no máximo 16 caracteres")
			.required("Título da tarefa é obrigatório"),
	});

	function handleTaskAdd({
		title,
		description,
	}: {
		title: string;
		description: string;
	}) {
		createTask(title, description);
		MessageSuccess("Tarefa criada com sucesso!");
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
							handleModalCreateTask={handleModalCreateTask}
						/>
						<Formik
							initialValues={{
								taskTitle: "",
								taskDescription: "",
							}}
							validationSchema={TaskSchema}
							onSubmit={(values, { resetForm }) => {
								if (
									tasks.some(
										(task) =>
											task.title === values.taskTitle
									)
								) {
									return Alert.alert(
										"Tarefa já cadastrada",
										"Você não pode cadastrar uma tarefa com um título que já existe"
									);
								} else {
									handleTaskAdd({
										title: values.taskTitle,
										description: values.taskDescription,
									});
									resetForm({
										values: {
											taskTitle: "",
											taskDescription: "",
										},
									});
								}
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
													errors.taskTitle &&
													touched.taskTitle
														? 8
														: 24,
											}}
										>
											<Label text="Nome da tarefa:" />
											<Input
												onChangeText={handleChange(
													"taskTitle"
												)}
												value={values.taskTitle}
												onBlur={handleBlur("taskTitle")}
											/>
											{errors.taskTitle &&
												touched.taskTitle && (
													<Text
														style={{
															color: "#FF8477",
														}}
													>
														{errors.taskTitle}
													</Text>
												)}
										</View>
										<View
											style={{
												width: "100%",
												marginBottom: 24,
											}}
										>
											<Label text="Descrição da tarefa:" />
											<Input
												type="TEXTAREA"
												onChangeText={handleChange(
													"taskDescription"
												)}
												value={values.taskDescription}
												onBlur={handleBlur(
													"taskDescription"
												)}
											/>
										</View>
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
												onPress={handleSubmit}
											/>
											<Button
												title="Cancelar"
												onPress={handleModalCreateTask}
											/>
										</View>
									</>
								);
							}}
						</Formik>
					</Container>
				</Body>
			</KeyboardAvoidingView>
		</Modal>
	);
}
