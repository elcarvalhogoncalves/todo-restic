import { createContext, ReactNode, useEffect, useState } from "react";
import { TaskProps } from "../utils/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
interface TaskContextProps {
	task: TaskProps;
	tasks: TaskProps[];
	userName: string;
	selectTask: (task: TaskProps) => void;
	clearTask: () => void;
	createTask: (title: string, description: string) => void;
	setTasks: ([]: TaskProps[]) => void;
	setUserName: (name: string) => void;
}

interface TaskProviderProps {
	children: ReactNode;
}

export const TaskContext = createContext<TaskContextProps>({
	task: { id: 0, title: "", description: "", status: false },
	selectTask: () => {},
	clearTask: () => {},
	userName: "",
	tasks: [],
	createTask: () => {},
	setTasks: () => {},
	setUserName: () => {},
});

function TaskProvider({ children }: TaskProviderProps) {
	const [id, setId] = useState(0);
	const [userName, setUserName] = useState("");
	const [task, setTask] = useState<TaskProps>({
		id: 0,
		title: "",
		description: "",
		status: false,
	});
	const [tasks, setTasks] = useState<TaskProps[]>([] as TaskProps[]);

	async function storageTasks(tasks: TaskProps[]) {
		try {
			const jsonData = JSON.stringify({
				username: userName,
				tasks: tasks,
				idCounter: id,
			});
			await AsyncStorage.setItem("@tasks", jsonData);
		} catch (error) {
			console.log(error);
		}
	}

	async function getTasks() {
		try {
			const jsonData = await AsyncStorage.getItem("@tasks");
			if (jsonData) {
				setTasks(JSON.parse(jsonData).tasks);
				setUserName(JSON.parse(jsonData).username);
				setId(JSON.parse(jsonData).idCounter);
			}
		} catch (error) {
			console.log(error);
		}
	}

	function createTask(title: string, description: string) {
		const newTask = {
			id: id,
			title,
			description,
			status: false,
		};
		setTasks([...tasks, newTask]);
		setId(id + 1);
	}

	const selectTask = (task: TaskProps) => {
		setTask(task);
	};

	const clearTask = () => {
		setTask({ id: 0, title: "", description: "", status: false });
	};

	useEffect(() => {
		getTasks();
	}, []);

	useEffect(() => {
		storageTasks(tasks);
	}, [tasks, userName]);

	return (
		<TaskContext.Provider
			value={{
				task,
				selectTask,
				clearTask,
				tasks,
				createTask,
				setTasks,
				setUserName,
				userName,
			}}
		>
			{children}
		</TaskContext.Provider>
	);
}
export default TaskProvider;
