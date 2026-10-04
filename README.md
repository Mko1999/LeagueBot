# LeagueBot

An AI Telegram bot for Fantasy Premier League mini-leagues. Add it to your league's group chat and it posts weekly AI-written recaps, live tables, deadline reminders, and alerts.

Built in public.

## Structure

```
apps/
  api/   Nest.js backend + Telegram bot
  web/   Next.js landing page (coming soon)
```

## Local development

```bash
docker compose up -d          # start Postgres + Redis
cd apps/api && npm install
npm run start:dev
```

## Stack

TypeScript · Nest.js · PostgreSQL · Prisma · Redis · grammY · Claude API · Docker · GitHub Actions · AWS
