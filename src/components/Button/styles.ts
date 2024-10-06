import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { ButtonProps } from "../../utils/types";

type Props = {
	type?: ButtonProps;
};

export const Body = styled.TouchableOpacity<Props>`
	background-color: ${({ type }) =>
		type === "SUCCESS"
			? "#4CAF50"
			: type === "BACK"
				? "#BBBBBB"
				: type === "DELETE"
					? "#F44336"
					: type === "EDIT"
						? "#2196F3"
						: type === "WELCOME"
							? "#4CAF50"
							: ""};
	justify-content: center;
	align-items: center;
	padding: 8px 12px;
	border-radius: 16px;
	border-width: ${({ type }) => (type ? "3px" : 0)};
	border-color: ${({ type }) =>
		type === "SUCCESS"
			? "#3D8C40 "
			: type === "BACK"
				? "#969696"
				: type === "DELETE"
					? "#C3362B"
					: type === "EDIT"
						? "#1A78C2"
						: type === "WELCOME"
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
