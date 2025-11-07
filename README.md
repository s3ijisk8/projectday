# Daycraft (MVP scaffold)

An interactive, atmospheric website to find, create, and share things to do — local, virtual, or at-home — powered by user-generated itineraries, activities, and a shared resource database.

## Tech
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Prisma + Postgres
- NextAuth.js

## Getting started

1) Clone and install

```bash
cd /Users/me./projectday/daycraft
npm install
```

2) Configure environment

- Copy `.env.example` to `.env.local` and fill values
- Ensure Postgres is running and create a database named `daycraft`

3) Generate Prisma client and run migrations

```bash
npx prisma generate
npx prisma migrate dev --name init
```

4) Start dev server

```bash
npm run dev
```

Open http://localhost:3000

## Project docs
- `PRD.md` — Product requirements
- `DB_SCHEMA.md` — Data models and relations
- `API.md` — API surface and examples
- `DESIGN.md` — Visual and UX tokens
- `CONTRIBUTING.md` — Contribution, moderation, and seeding

## Notes
- Auth providers are stubbed (GitHub + Email). Set provider env vars to enable.
- Search API is a placeholder; wire up DB or Algolia later.


