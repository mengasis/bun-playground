// gameService.js

import type { Game } from 'typings/Game';
import gamesData from '../data/games.json';

export function getAllGames() {
	return gamesData;
}

export function getGameById(gameId: number) {
	return gamesData.find((game) => game.id === gameId);
}

export function searchGamesByName(query: string) {
	const lowercaseQuery = query.toLowerCase();
	return gamesData.filter((game) =>
		game.name.toLowerCase().includes(lowercaseQuery),
	);
}

export function getGamesSortedByField(
	field: keyof Game,
	order: 'asc' | 'desc' = 'asc',
) {
	return gamesData.slice().sort((a, b) => {
		if (order === 'asc') {
			return a[field] > b[field] ? 1 : -1;
		}

		return b[field] > a[field] ? 1 : -1;
	});
}
