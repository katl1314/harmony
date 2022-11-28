import { ChangeEvent } from "react";

export type BoardType = {
	boardId: string;
	writerId: string;
	title: string;
	content: string;
	category: string;
	like: number;
	createDt: Date;
};

export type UserType = {
	id: string;
	name: string;
	password: string;
	email: string;
	timestamp: string;
	isAdmin: 'y' | 'n';
};

export type CommonType = {
	id: string;
	name: string;
};

export type InputType = {
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	readOnly?: boolean;
	type : 'text' | 'password';
	value: string;
	placeholder?: string;
} & CommonType;

export type ButtonType = {} | CommonType;
