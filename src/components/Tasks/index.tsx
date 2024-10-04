import { Section } from "../../components/Section";
import { FlatList, View, Alert } from "react-native";
import { Task } from "../../components/Task";
import { ButtonAdd } from "../ButtonAdd";
import { EmptyList } from "../EmptyList";
import { TaskProps } from "../../utils/types";
import { useContext, useState } from "react";
import { TaskContext } from "../../context/TaskContext";
import { ModalCreateTask } from "../ModalCreateTask";

export function Tasks() {
	const [modalCreateTask, setModalCreateTask] = useState(false);
	const { tasks, setTasks } = useContext(TaskContext);

	function handleModalCreateTask() {
		setModalCreateTask(!modalCreateTask);
	}

	function handleTaskCheck(taskToChange: TaskProps) {
		const map = tasks.map((task) =>
			task.id === taskToChange.id
				? { ...task, status: !task.status }
				: task
		);
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
		<Section title="Tasks">
			<FlatList
				data={tasks}
				scrollEnabled={true}
				showsVerticalScrollIndicator={false}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item }) => (
					<Task
						id={item.id}
						title={item.title}
						description={item.description}
						status={item.status}
						onCheck={() => handleTaskCheck(item)}
						onRemove={() => handleTaskDelete(item)}
					/>
				)}
				ItemSeparatorComponent={() => (
					<View style={{ paddingVertical: 7 }} />
				)}
				ListEmptyComponent={
					<EmptyList message="Nenhuma tarefa encontrada" />
				}
				ListFooterComponent={() => (
					<ButtonAdd
						title="Adicionar tarefa"
						handleModalCreateTask={handleModalCreateTask}
					/>
				)}
				ListFooterComponentStyle={{
					marginTop: 32,
					marginBottom: 64,
				}}
			/>
			<ModalCreateTask
				modalVisible={modalCreateTask}
				handleModalCreateTask={handleModalCreateTask}
			/>
		</Section>
	);
}
