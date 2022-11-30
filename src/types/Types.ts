import { ChangeEvent } from 'react';

export type BoardType = {
	boardId: string;
	writerId: string;
	title: string;
	content: string;
	category: string;
	like: number;
	createDt: Date;
};

export type CommonType = {
	id: string;
	name: string;
};

export type InputType = {
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	readOnly?: boolean;
	type: 'text' | 'password';
	value: string;
	placeholder?: string;
} & CommonType;

export type ButtonType = {} | CommonType;

export type UserType = {
	displayName: string | null;
	email: string | null;
	photoURL: string | null;
	uid: string | null;
};

export type AuthServiceType = 'google' | 'github';
