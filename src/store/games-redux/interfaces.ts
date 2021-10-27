export interface IGame {
	name: string;
	description: string;
	code: string;
	icon: string;
	categoryIds: Array<number>;
}

export interface ICategory {
	id: number;
	name: string;
}
