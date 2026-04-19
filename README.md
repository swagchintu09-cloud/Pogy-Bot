# Pogy Bot

Pogy Bot is a full Discord bot platform with a live web dashboard, moderation tools, anti-nuke protection, automod controls, music playback, command management, and guild configuration flows.

## Owner

- GitHub: [devrock07](https://github.com/devrock07)

## Highlights

- Discord bot with moderation, utility, music, fun, and management systems
- Zenith dashboard for guild configuration and live status views
- Shared config between bot commands and dashboard controls
- AutoMod, Anti-Nuke, logs, command center, docs, and music monitoring
- MongoDB-backed data storage
- Lavalink-based music system

## Showcase

![Dashboard Showcase 1](attach/Screenshot%202026-04-19%20151916.png)
![Dashboard Showcase 2](attach/Screenshot%202026-04-19%20151923.png)
![Dashboard Showcase 3](attach/Screenshot%202026-04-19%20151931.png)
![Dashboard Showcase 4](attach/Screenshot%202026-04-19%20151937.png)
![Dashboard Showcase 5](attach/Screenshot%202026-04-19%20151944.png)
![Dashboard Showcase 6](attach/Screenshot%202026-04-19%20151950.png)
![Dashboard Showcase 7](attach/Screenshot%202026-04-19%20151956.png)

## Project Structure

- `index.js` boots the main bot launcher
- `source/` contains the Discord bot code, commands, listeners, and shared settings
- `dashboard/` contains the Zenith dashboard client and server
- `scripts/run-services.js` starts bot and dashboard together
- `attach/` contains dashboard showcase screenshots for GitHub

## Tech Stack

- Node.js
- Discord.js
- Express / native Node HTTP
- MongoDB
- Lavalink
- React
- Vite

## Local Setup

1. Install dependencies:

```bash
npm install
npm --prefix dashboard install
```

2. Create your env file:

```bash
copy .env.example .env
```

3. Fill in your real values inside `.env`.

Required values:

- `DISCORD_TOKEN`
- `DISCORD_BOT_TOKEN`
- `DISCORD_CLIENT_ID`
- `DISCORD_CLIENT_SECRET`
- `MONGODB_URI`
- `LAVALINK_NODE_URL`
- `LAVALINK_NODE_AUTH`
- `NEXTAUTH_SECRET`

Recommended values:

- `DASHBOARD_PUBLIC_URL`
- `BOT_API_BASE_URL`
- `DASHBOARD_BOT_STATUS_URL`
- `SUPPORT_URL`
- `GUIDE_URL`

4. Start everything:

```bash
npm start
```

## Available Scripts

- `npm start` starts bot and dashboard in production mode
- `npm run dev` starts bot and dashboard in development mode
- `npm run start:bot` starts only the bot
- `npm run dev:bot` starts only the bot in watch mode
- `npm run start:dashboard` starts only the dashboard server
- `npm run dev:dashboard` starts only the dashboard frontend
- `npm run build:dashboard` builds the dashboard

## Environment Variables

Main Discord app values:

- `DISCORD_TOKEN` bot token
- `DISCORD_BOT_TOKEN` bot token for dashboard Discord API access
- `DISCORD_CLIENT_ID` application client ID
- `DISCORD_CLIENT_SECRET` application client secret

Database and bot services:

- `MONGODB_URI` MongoDB connection string
- `LAVALINK_NODE_NAME` Lavalink node label
- `LAVALINK_NODE_URL` Lavalink host and port
- `LAVALINK_NODE_AUTH` Lavalink password or auth token
- `LAVALINK_NODE_SECURE` `true` or `false`

Dashboard values:

- `DASHBOARD_PUBLIC_URL` public URL of the dashboard, for example `https://your-dashboard-domain.com`
- `BOT_API_BASE_URL` public URL of the bot status/config API, for example `https://your-bot-host.com:3001`
- `DASHBOARD_BOT_STATUS_URL` URL the dashboard uses to talk to the bot API
- `NEXTAUTH_SECRET` session signing secret

## How The Bot And Dashboard Connect

The project uses two running services:

1. The bot process
   This logs in to Discord, runs commands, listeners, AutoMod, Anti-Nuke, music, and exposes the bot status/config API on port `3001`.

2. The dashboard process
   This serves the Zenith web UI on port `3000`, handles Discord login, and reads/writes guild configuration.

For a production deployment, the dashboard needs to be able to reach the bot API through `BOT_API_BASE_URL` / `DASHBOARD_BOT_STATUS_URL`.

Example:

- Dashboard public site: `https://dashboard.example.com`
- Bot API public URL: `https://bot.example.com:3001`

Then your env would look like:

```env
DASHBOARD_PUBLIC_URL=https://dashboard.example.com
BOT_API_BASE_URL=https://bot.example.com:3001
DASHBOARD_BOT_STATUS_URL=https://bot.example.com:3001
```

## Discord Developer Portal Setup

Before deploying, configure your Discord application:

1. Open the Discord Developer Portal.
2. Select your application.
3. Copy the Application ID into `DISCORD_CLIENT_ID`.
4. Copy the Client Secret into `DISCORD_CLIENT_SECRET`.
5. Copy the bot token into `DISCORD_TOKEN` and `DISCORD_BOT_TOKEN`.
6. Add your dashboard callback URL in OAuth2 Redirects:

Local:

- `http://localhost:3000/api/auth/callback/discord`

Production example:

- `https://dashboard.example.com/api/auth/callback/discord`

## Dashboard Deployment

### Important Note About Vercel

This dashboard currently uses a custom Node server in [dashboard/server.js](dashboard/server.js), plus its own API/auth routes. Because of that, it is **not a drop-in static Vercel frontend** in its current form.

If you want the smoothest production deployment right now, host the dashboard on a Node-friendly platform such as:

- Railway
- Render
- VPS
- Pterodactyl
- PM2 on your own server

### If You Still Want To Use Vercel

You have two options:

1. Use Vercel only after converting the custom dashboard server/API routes into Vercel serverless functions.
2. Keep the current dashboard server and deploy it on a Node host instead of Vercel.

So for this current repo state, the practical answer is:

- Vercel is **not the recommended host** for the dashboard yet
- a Node host is the correct deployment target for the current merged dashboard

### Recommended Dashboard Hosting Setup

1. Deploy the repo or dashboard service to a Node-capable host.
2. Install dependencies:

```bash
npm install
npm --prefix dashboard install
```

3. Build the dashboard:

```bash
npm run build:dashboard
```

4. Set env vars:

- `DISCORD_CLIENT_ID`
- `DISCORD_CLIENT_SECRET`
- `DISCORD_BOT_TOKEN`
- `MONGODB_URI`
- `NEXTAUTH_SECRET`
- `DASHBOARD_PUBLIC_URL`
- `BOT_API_BASE_URL`
- `DASHBOARD_BOT_STATUS_URL`

5. Start the dashboard:

```bash
npm run start:dashboard
```

## Bot Hosting Setup

The bot should be deployed on a host that supports long-running Node processes.

Good choices:

- Pterodactyl
- Railway
- Render background service
- VPS
- PM2

### Bot Deployment Steps

1. Upload the repo to your host.
2. Install dependencies:

```bash
npm install
```

3. Set the required env vars:

- `DISCORD_TOKEN`
- `DISCORD_BOT_TOKEN`
- `DISCORD_CLIENT_ID`
- `DISCORD_CLIENT_SECRET`
- `MONGODB_URI`
- `LAVALINK_NODE_URL`
- `LAVALINK_NODE_AUTH`

4. Start the bot:

```bash
npm run start:bot
```

5. Make sure port `3001` is reachable by your dashboard deployment if you want live dashboard sync.

## Recommended Production Split

If you want the cleanest production setup:

- Host the bot on a bot-friendly service or VPS
- Host the dashboard on a Node-capable web host
- Set `BOT_API_BASE_URL` to the bot API public URL
- Set `DASHBOARD_BOT_STATUS_URL` to the same bot API public URL
- Set `DASHBOARD_PUBLIC_URL` to the public dashboard URL

## Publish Checklist

Before pushing this repo to GitHub:

1. Make sure `.env` is not committed.
2. Keep only `.env.example` in Git.
3. Rotate any old secrets that were previously exposed.
4. Confirm your Discord OAuth redirect URL matches your real dashboard domain.
5. Confirm your dashboard can reach the bot API URL.

## Security Note

This repository is configured to read sensitive values from environment variables. Do not commit your `.env` file.

If a token, client secret, database URI, or webhook was ever exposed before cleanup, rotate it before making the repository public.

## License

This project is distributed under the license in [LICENSE](LICENSE).
