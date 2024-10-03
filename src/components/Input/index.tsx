import { Body, InputText, TextArea } from "./styles";

type InputType = "TEXT" | "TEXTAREA" | "PASSWORD";

type InputProps = {
	placeholder?: string;
	type?: InputType;
	value: string;
	onChangeText: (text: string) => void;
	handleTaskAdd?: () => void;
};

export function Input({
	placeholder,
	type = "TEXT",
	value,
	onChangeText,
}: InputProps) {
	return (
		<Body>
			{type === "TEXT" ? (
				<InputText
					placeholder={placeholder}
					placeholderTextColor="#000"
					selectionColor="#3498db"
					keyboardType="default"
					value={value}
					onChangeText={onChangeText}
				/>
			) : type === "PASSWORD" ? (
				<InputText
					placeholder={placeholder}
					secureTextEntry={true}
					selectionColor="#3498db"
					keyboardType="default"
					value={value}
					onChangeText={onChangeText}
				/>
			) : (
				<TextArea
					placeholder={placeholder}
					scrollEnabled={true}
					multiline={true}
					selectionColor="#3498db"
					keyboardType="default"
					value={value}
					onChangeText={onChangeText}
				/>
			)}
		</Body>
	);
}
