import { Body, Title, Square } from "./styles";
import { Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
import { TaskProps } from "../../utils/types";

export function Task({ id, title, status, onCheck, onRemove }: TaskProps) {
	return (
		<Body onPress={() => console.log("Task clicked")}>
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
