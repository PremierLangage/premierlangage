export interface Repo {
	name: string;
	path: string;
	url: string;
	branch: string;
	count: number;
	changes: Change[]
}

export interface Change {
	name: string,
	path: string,
	type: string
	isdir: boolean
}
