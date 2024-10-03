export type TaskProps = {
	id: number;
	title: string;
	description: string;
	status: boolean;
	onCheck?: () => void;
	onRemove?: () => void;
};

export type ButtonProps = "success" | "back" | "delete" | "edit";
