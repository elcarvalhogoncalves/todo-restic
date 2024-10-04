import { createContext, ReactNode, useEffect, useState } from "react";
import { TaskProps } from "../utils/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
interface TaskContextProps {
	task: TaskProps;
	tasks: TaskProps[];
	selectTask: (task: TaskProps) => void;
	clearTask: () => void;
	createTask: (title: string, description: string) => void;
	setTasks: ([]: TaskProps[]) => void;
}

interface TaskProviderProps {
	children: ReactNode;
}

export const TaskContext = createContext<TaskContextProps>({
	task: { id: 0, title: "", description: "", status: false },
	selectTask: () => {},
	clearTask: () => {},
	tasks: [],
	createTask: () => {},
	setTasks: () => {},
});

function TaskProvider({ children }: TaskProviderProps) {
	const [task, setTask] = useState<TaskProps>({
		id: 0,
		title: "",
		description: "",
		status: false,
	});
	const [tasks, setTasks] = useState<TaskProps[]>([] as TaskProps[]);

	async function storageTasks(tasks: TaskProps[]) {
		try {
			const jsonData = JSON.stringify(tasks);
			await AsyncStorage.setItem("@tasks", jsonData);
		} catch (error) {
			console.log(error);
		}
	}

	async function getTasks() {
		try {
			const jsonData = await AsyncStorage.getItem("@tasks");
			if (jsonData) {
				setTasks(JSON.parse(jsonData));
			}
		} catch (error) {
			console.log(error);
		}
	}

	function createTask(title: string, description: string) {
		const newTask = {
			id: tasks.length + 1,
			title,
			description,
			status: false,
		};
		setTasks([...tasks, newTask]);
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
	}, [tasks]);

	return (
		<TaskContext.Provider
			value={{ task, selectTask, clearTask, tasks, createTask, setTasks }}
		>
			{children}
		</TaskContext.Provider>
	);
}
export default TaskProvider;
