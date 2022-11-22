export type BoardType = {
  boardId: string;
	writerId: string;
	title: string;
	content: string;
	category: string;
	like: number;
	createDt: Date;
}

export type UserType = {
	id: string;
	name: string;
	password: string;
	email: string;
	timestamp: string;
	isAdmin: 'y' | 'n';
};
