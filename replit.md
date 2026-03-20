# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)
- **Auth**: Replit Auth (OIDC + PKCE via openid-client v6)

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   ├── api-server/         # Express API server
│   └── quran-app/          # React + Vite Quran web app
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   ├── db/                 # Drizzle ORM schema + DB connection
│   └── replit-auth-web/    # Replit Auth browser hook (useAuth)
├── scripts/                # Utility scripts
├── pnpm-workspace.yaml
├── tsconfig.base.json
├── tsconfig.json
└── package.json
```

## Quran App Features

- All 114 surahs from Al-Quran Cloud API
- Arabic text (Amiri font) + English translation (Sahih International)
- Audio recitation by Mishari Al-Afasi
- Per-verse play buttons + full surah player
- Auto-play next surah when current ends
- Sign In via Replit Auth
- Welcome message + reading streak badge for authenticated users
- Dark/Light mode toggle (persisted to localStorage)
- Footer: "Powered by Saeed co and Quran.com"

## DB Schema

- `sessions` — Replit Auth sessions
- `users` — Authenticated users (id, email, firstName, lastName, profileImageUrl)
- `streaks` — Reading streak per user (currentStreak, longestStreak, lastReadDate)

## API Routes

- `GET /api/auth/user` — Current user
- `GET /api/login` — Replit OIDC login
- `GET /api/callback` — OIDC callback
- `GET /api/logout` — Logout
- `GET /api/streaks/me` — Get user's streak
- `POST /api/streaks/record` — Record today's reading activity
