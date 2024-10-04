import { Body, InputText, TextArea, TextAreaNote } from "./styles";

import { InputType } from "../../utils/types";
import { View } from "react-native";

type InputProps = {
	placeholder?: string;
	type?: InputType;
	value: string;
	onChangeText: (text: string) => void;
	onBlur?: (e: any) => void;
};

export function Input({
	placeholder,
	type = "TEXT",
	value,
	onChangeText,
	onBlur,
}: InputProps) {
	return (
		<Body Type={type}>
			{type === "TEXT" ? (
				<InputText
					placeholder={placeholder}
					placeholderTextColor="#000"
					selectionColor="#3498db"
					keyboardType="default"
					value={value}
					onChangeText={onChangeText}
					onBlur={onBlur}
				/>
			) : type === "PASSWORD" ? (
				<InputText
					placeholder={placeholder}
					secureTextEntry={true}
					selectionColor="#3498db"
					keyboardType="default"
					value={value}
					onChangeText={onChangeText}
					onBlur={onBlur}
				/>
			) : type === "TEXTAREA" ? (
				<TextArea
					placeholder={placeholder}
					scrollEnabled={true}
					multiline={true}
					selectionColor="#3498db"
					keyboardType="default"
					value={value}
					onChangeText={onChangeText}
					onBlur={onBlur}
				/>
			) : (
				<TextAreaNote
					placeholder={placeholder}
					scrollEnabled={true}
					multiline={true}
					selectionColor="#3498db"
					keyboardType="default"
					value={value}
					onChangeText={onChangeText}
					onBlur={onBlur}
				/>
			)}
		</Body>
	);
}
