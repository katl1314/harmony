import { ChangeEventHandler, ReactNode, FormEvent } from 'react';

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
};

export type InputType<T> = {
	onChange: ChangeEventHandler<T>;
	readOnly?: boolean;
	type: 'text' | 'password';
	value: string;
	placeholder?: string;
} & CommonType;

export type TextareaType<T> = {
	onChange: ChangeEventHandler<T>;
	readOnly?: boolean;
	value: string;
	placeholder?: string;
} & CommonType;

export type ReactNodeType = ReactNode | ReactNode[];

export type ButtonType = {
	background: string;
	borderradius: number;
	color: string;
	children: ReactNodeType;
	onClick?: () => void;
};

export type UserType = {
	displayName: string | null;
	email: string | null;
	photoURL: string | null;
	uid: string | null;
};

export type AuthServiceType = 'google' | 'github';

export type FormType = {
	onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export type NavLinkType = {
	to: string;
	background: string;
	borderradius: number;
	color: string;
	children: ReactNodeType;
};
