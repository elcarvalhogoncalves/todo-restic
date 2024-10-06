export type TaskProps = {
	id: number;
	title: string;
	description: string;
	status: boolean;
	onCheck?: () => void;
	onRemove?: () => void;
};

export type RootStackParamList = {
	Welcome: undefined;
	Main: undefined;
	Note: TaskProps;
};

export type InputType = "TEXT" | "TEXTAREA" | "TEXTAREA_NOTE" | "TEXT_WELCOME";
export type ButtonProps = "SUCCESS" | "BACK" | "DELETE" | "EDIT" | "WELCOME";
