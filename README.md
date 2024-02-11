# bun playground

This repository introduces three powerful technologies for modern JavaScript development: Bun, Hono, and Biome.

- [**Bun**](http://bun.sh): A fast, all-in-one JavaScript runtime designed for the modern JavaScript ecosystem. Built for speed, Bun provides a minimal set of highly-optimized APIs for common tasks.

- [**Hono**](https://hono.dev): A small, simple, and ultrafast web framework. An alternative to Express, Hono works on various JavaScript runtimes, including Cloudflare Workers, Fastly Compute, Deno, Bun, Vercel, AWS Lambda, Lambda@Edge, and Node.js.

- [**Biome**](https://biomejs.dev): A performant toolchain for web projects. Serving as an alternative to Prettier and ESLint, Biome offers a fast formatter for JavaScript, TypeScript, JSX, and JSON, along with a performant linter.

# Prerequisites

Before you begin, ensure you have the following installed on your local development machine:

- node - JavaScript runtime
- npm - Node package manager
- bun - Install it globally using npm with `npm install -g bun`

## Getting Started

Follow these quick steps to get started with this project:

To install dependencies
```bash
bun install
```
To run
```bash
bun run dev
```
   Start the development server using Bun.js with hot module replacement (HMR) for live updates during code modification.

Explore the provided npm scripts (`format` and `lint`) for code formatting and linting. Customize configuration files (`bun` and `biomejs`) to suit your project's needs.


## API
In this test project, we've created a mini REST API to provide information about board games. Feel free to explore and interact with the API to retrieve details about various tabletop games.

#### 1. Get All Games
- **Endpoint:** `/games`
- **Method:** `GET`
- **Description:** Retrieve a list of board games, sorted by specified criteria.
- **Query Parameters:**
  - `order`: Set the order for sorting (asc or desc).
  - `field`: Specify the field of the game object for sorting.
  
#### 2. Search Games by Name
- **Endpoint:** `/games/search`
- **Method:** `GET`
- **Description:** Search for board games by name. Return all games if no query is provided.
- **Query Parameter:**
  - `query`: A text string used for searching games by name.

#### 3. Get Single Game by ID
- **Endpoint:** `/games/:id`
- **Method:** `GET`
- **Description:** Retrieve detailed information about a specific board game by its ID.


### License

This project is licensed under the [MIT License](LICENSE).