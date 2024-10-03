import styled from "styled-components/native";
import Entypo from "@expo/vector-icons/Entypo";
import { TouchableOpacity } from "react-native";

export const Body = styled.View`
	width: 100%;
	padding: 16px 26px;
`;
export const Container = styled.View`
	gap: 12px;
`;

export const Circle = styled.View`
  width: 440px;
  height: 440px;
  border-radius: 220px;
  background-color: #FFD78E;
  position: absolute;
  top: -250px;
  left: -200px;
`;

export const Title = styled.Text`
	font-size: 32px;
	font-weight: semi-bold;
	font-family: Poppins_600SemiBold;
`;

export const IconBack = styled(TouchableOpacity)``;
