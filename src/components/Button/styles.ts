import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { ButtonProps } from "../../utils/types";

type Props = {
	type?: ButtonProps;
};

export const Body = styled.TouchableOpacity<Props>`
	background-color: ${({ type }) =>
		type === "success"
			? "#4CAF50"
			: type === "back"
				? "#BBBBBB"
				: type === "delete"
					? "#F44336"
					: type === "edit"
						? "#2196F3"
						: type === "welcome"
							? "#4CAF50"
							: ""};
	justify-content: center;
	align-items: center;
	padding: 8px 12px;
	border-radius: 16px;
	border-width: ${({ type }) => (type ? "3px" : 0)};
	border-color: ${({ type }) =>
		type === "success"
			? "#3D8C40 "
			: type === "back"
				? "#969696"
				: type === "delete"
					? "#C3362B"
					: type === "edit"
						? "#1A78C2"
						: type === "welcome"
							? "#3D8C40"
							: ""};
`;

export const TextButton = styled.Text<Props>`
	font-size: 24px;
	font-family: Poppins_600SemiBold;
	color: ${({ type }) => (type ? "#FFF" : "#000")};
	text-decoration: ${({ type }) => (!type ? "underline" : "none")};
	text-transform: uppercase;
`;
