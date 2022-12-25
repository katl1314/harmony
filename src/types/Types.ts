import {
	ChangeEventHandler,
	ReactNode,
	FormEventHandler,
	KeyboardEventHandler,
	MouseEventHandler,
} from 'react';

export type BoardType = {
	boardId: number;
	writerId: string;
	title: string;
	content: string;
	category: string;
	nlike: number;
	createDt: Date | null;
};

// event 타입은 옵셔널하게...
export type EventType<T> = {
	onChange?: ChangeEventHandler<T>;
	onClick?: MouseEventHandler<T>;
	onKeyDown?: KeyboardEventHandler<T>;
	onKeyUp?: KeyboardEventHandler<T>;
	onSubmit?: FormEventHandler<T>;
};

export type CommonType = {
	id: string;
	required?: boolean;
	ref?: any;
};

export type InputType<T> = {
	readOnly?: boolean;
	type: 'text' | 'password';
	value: string;
	placeholder?: string;
} & CommonType &
	EventType<T>;

export type TextareaType<T> = {
	readOnly?: boolean;
	value: string;
	placeholder?: string;
} & CommonType &
	EventType<T>;

export type ReactNodeType = ReactNode | ReactNode[];

export type ButtonType<T> = {
	backColor?: string;
	borderRadius?: number;
	color?: string;
	children: ReactNodeType;
	type: 'normal' | 'submit';
} & EventType<T>;

export type UserType = {
	displayName: string | null;
	email?: string | null;
	photoURL: string | null;
	uid?: string | null;
};

export type AuthServiceType = 'google' | 'github';

export type NavLinkType = {
	to: string;
	background: string;
	borderradius: number;
	color: string;
	children: ReactNodeType;
};

export type ServiceType = {
	// 인덱스 시그니처 사용 해당 속성의 키는 string, 값은 Object이어야함.
	[id: string]: Object;
};
