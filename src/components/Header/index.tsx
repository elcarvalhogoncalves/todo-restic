import { View } from "react-native";
import {
	Body,
	HeaderTitle,
	Title,
	IconBack,
	Container,
	Circle,
} from "./styles";
import Entypo from "@expo/vector-icons/Entypo";
import { HeaderProfile } from "../HeaderProfile";
import { HeaderDate } from "../HeaderDate";
import { Notification } from "../Notification";
import { TaskContext } from "../../context/TaskContext";
import { useContext, useEffect, useState } from "react";

type HeaderProps = {
	title?: string;
	backFunction?: () => void;
	checked?: boolean;
};

export function Header({ title, backFunction, checked }: HeaderProps) {
	const { tasks } = useContext(TaskContext);
	const [contadorEmAberto, setContadorEmAberto] = useState(0);
	useEffect(() => {
		const totalTasksEmAberto = tasks.filter(
			(task) => task.status === false
		).length;
		setContadorEmAberto(totalTasksEmAberto);
	}, [tasks]);
	return (
		<Body>
			<Circle />
			{title ? (
				<HeaderTitle>
					<IconBack onPress={backFunction}>
						<Entypo
							style={{ marginLeft: 0 }}
							name="chevron-left"
							size={32}
							color="black"
						/>
					</IconBack>
					<Title checked={checked ?? false}>{title}</Title>
				</HeaderTitle>
			) : (
				<Container>
					<HeaderProfile name="Gabriel" />
					<HeaderDate />
					<Notification number={contadorEmAberto} />
				</Container>
			)}
		</Body>
	);
}
