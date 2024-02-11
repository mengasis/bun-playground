import { Hono } from 'hono';
import * as gameController from './controllers/gameController';

const app = new Hono();

app.get('/', (c) => c.text('BoardGames API'));
app.get('/games', gameController.getGames);
app.get('/games/search', gameController.searchGamesByName);
app.get('/games/:id', gameController.getSingleGame);

export default app;
