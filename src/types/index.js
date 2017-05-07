// @flow

export type Product = {
	sid: string,
	level: number,
	category: string,
	title: string,
	subtitle: string,
	description: string,
	term: string,
	tags: Array<string>,
	is_alive: boolean,
	link?: string,
	github?: string,
	trello?: string,
	members: Array<any>,
}
