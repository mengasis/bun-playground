import type { Context } from 'hono';
import type { QueryParams } from 'typings/Game';
import * as gameServices from '../services/gameService';
import { HTTPException } from 'hono/http-exception';

export function getGames(c: Context) {
	const { field = 'id', order = 'asc' }: QueryParams = c.req.query();
	const games = gameServices.getGamesSortedByField(field, order);
	return c.json(games);
}

export function getSingleGame(c: Context) {
	const id = +c.req.param('id');
	const game = gameServices.getGameById(id);

	if (!game) throw new HTTPException(404, { message: 'Game not found' });

	return c.json(game);
}

export function searchGamesByName(c: Context) {
	const { query } = c.req.query();

	if (!query) return c.json(gameServices.getAllGames());

	const matchingGames = gameServices.searchGamesByName(query);

	if (!matchingGames.length)
		throw new HTTPException(404, { message: 'Game not found' });

	return c.json(matchingGames);
}
