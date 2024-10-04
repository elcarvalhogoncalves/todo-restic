export type TaskProps = {
	id: number;
	title: string;
	description: string;
	status: boolean;
	onCheck?: () => void;
	onRemove?: () => void;
};

export type RootStackParamList = {
	Main: undefined;
	Note: TaskProps;
};

export type InputType = "TEXT" | "TEXTAREA" | "TEXTAREA_NOTE" | "PASSWORD";
export type ButtonProps = "success" | "back" | "delete" | "edit";
