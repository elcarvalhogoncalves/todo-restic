import styled from "styled-components/native";
import Entypo from "@expo/vector-icons/Entypo";
import { TouchableOpacity } from "react-native";

type Props = {
	checked: boolean;
};

export const Body = styled.View`
	width: 100%;
	padding: 16px 26px;
`;
export const Container = styled.View`
	gap: 12px;
`;

export const HeaderTitle = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Circle = styled.View`
	width: 440px;
	height: 440px;
	border-radius: 220px;
	background-color: #ffd78e;
	position: absolute;
	top: -250px;
	left: -200px;
`;

export const Title = styled.Text<Props>`
	text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
	font-size: 32px;
	font-weight: semi-bold;
	font-family: Poppins_600SemiBold;
`;

export const IconBack = styled(TouchableOpacity)`
	width: 40px;
	height: 40px;
	justify-content: center;
	align-items: flex-start;
`;
