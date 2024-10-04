import styled from "styled-components/native";

type Type = {
	Type: string;
};

export const Body = styled.View<Type>`
	${(props) => (props.Type === "TEXTAREA_NOTE" ? "flex: 1;" : "")}
	${(props) => (props.Type === "TEXTAREA_NOTE" ? "margin-bottom: 24px;" : "")}
	width: 100%;
	background-color: #f2c063;
`;
export const InputText = styled.TextInput`
	background-color: #d9d9d9;
	width: 100%;
	height: 48px;
	border-bottom-width: 3px;
	border-bottom-color: #6f6f6f;
	padding: 0 12px;
	font-size: 16px;
	font-family: Poppins_600SemiBold;
	color: #000;
`;
export const TextArea = styled.TextInput`
	background-color: #d9d9d9;
	width: 100%;
	height: 180px;
	border-bottom-width: 3px;
	border-bottom-color: #6f6f6f;
	padding: 12px;
	font-size: 16px;
	font-family: Poppins_400Regular;
	color: #000;
	text-align-vertical: top;
`;

export const TextAreaNote = styled.TextInput`
	flex: 1;
	width: 100%;
	background-color: #d9d9d9;
	border-bottom-width: 3px;
	border-bottom-color: #6f6f6f;
	padding: 12px;
	font-size: 16px;
	font-family: Poppins_400Regular;
	color: #000;
	text-align-vertical: top;
`;
