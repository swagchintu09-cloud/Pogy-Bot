# Pogy Bot

Pogy Bot is a Discord bot platform with a merged web dashboard, moderation tooling, anti-nuke protection, automod controls, music playback, and guild management flows.

## Owner

- GitHub: [devrock07](https://github.com/devrock07)

## What This Repo Includes

- Discord bot runtime
- Zenith web dashboard
- AutoMod and Anti-Nuke controls
- Music playback and live dashboard telemetry
- Moderation, utility, fun, and server tooling

## Tech Stack

- Node.js
- Discord.js
- Express
- MongoDB
- Lavalink
- Vite dashboard

## Getting Started

1. Install dependencies:

```bash
npm install
npm --prefix dashboard install
```

2. Create your local env file from the example:

```bash
copy .env.example .env
```

3. Fill in your own secrets in `.env`:

- `DISCORD_TOKEN`
- `DISCORD_CLIENT_ID`
- `DISCORD_CLIENT_SECRET`
- `MONGODB_URI`
- `LAVALINK_NODE_URL`
- `LAVALINK_NODE_AUTH`
- `WEBHOOK_URL`

4. Start the full project:

```bash
npm start
```

## Available Scripts

- `npm start` runs bot and dashboard in production mode
- `npm run dev` runs bot and dashboard in development mode
- `npm run start:bot` runs only the bot
- `npm run start:dashboard` runs only the dashboard
- `npm run build:dashboard` builds the dashboard

## Security Note

This repository is now set up to read sensitive values from environment variables instead of committing live credentials into source files. Do not commit your `.env` file to GitHub.

If you already exposed a bot token, client secret, database URI, or webhook URL before this cleanup, rotate them before publishing the repository.

## License

This project is distributed under the license in [LICENSE](./LICENSE).
