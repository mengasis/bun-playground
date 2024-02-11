export interface Game {
	id: number;
	name: string;
	min_players: number;
	max_players: number;
	duration: string;
	category: string;
	release_year: number;
	description: string;
	popularity: number;
}

export type QueryParams = {
	field?: keyof Game;
	order?: 'asc' | 'desc';
};
