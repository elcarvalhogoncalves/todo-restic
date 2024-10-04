import { Body, Title, Square } from "./styles";
import { Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useContext, useState } from "react";
import { TaskProps, RootStackParamList } from "../../utils/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TaskContext } from "../../context/TaskContext";
import { useNavigation } from "@react-navigation/native";

type navProps = NativeStackScreenProps<RootStackParamList>;

export function Task({ id, title, status, onCheck, onRemove }: TaskProps) {
	const { selectTask, tasks, task } = useContext(TaskContext);
	const navigation = useNavigation<navProps["navigation"]>();

	function handlePress() {
		tasks.map((task) => {
			if (task.id === id) {
				selectTask(task);
			}
		});
		navigation.navigate("Note", task);
	}

	return (
		<Body onPress={handlePress}>
			<Square onPress={onCheck}>
				{status && <Feather name="check" size={22} color="#4CAF50" />}
			</Square>
			<Title check={status}>{title}</Title>
			<Feather
				onPress={onRemove}
				name="trash-2"
				size={24}
				color="#F44336"
			/>
		</Body>
	);
}
