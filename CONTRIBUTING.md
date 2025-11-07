# Contributing

## Setup
- Install Node 18+ and Postgres
- Copy `.env.example` to `.env.local`
- `npm install`
- `npx prisma migrate dev`

## Seeding
Add seed data in `prisma/seed.ts` and run `npm run db:seed`.

## Moderation Rules (MVP)
- Activities: pending → approval required
- Resources: pending → approval required
- Locations: auto-active, re-verify yearly
- Itineraries/Journals: publish immediately; allow flagging

## Code Style
- TypeScript strict
- Keep functions small and descriptive
- Prefer server components for data fetching


