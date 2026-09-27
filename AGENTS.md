# AGENTS.md — Tech-Armor Agent Guidelines

## Overview
Tech-Armor is a modular e-commerce full-stack application for mobile accessories.
- **`apps/api`**: TypeScript + Express 5 + MongoDB Atlas (Mongoose) + Zod validation + Helmet + Jest/Supertest. Running on port `5000`.
- **`apps/web`**: Next.js 16 + React 19 + Tailwind CSS + TanStack React Query + Axios + Zustand. Running on port `3000`.
- **`stitch/`**: Standalone UI design exploration (isolated from `apps/`).

---

## Key Conventions & Architectural Rules

### 1. API Architecture (`apps/api`)
- **Layered Structure**: `Routes` → `Middlewares (Zod validate)` → `Controllers` → `Services` → `Repositories` → `Mongoose Models`.
- **Response Contract**: Always use `successResponse(data, message)` from `src/utils/ApiResponse` for successful responses.
- **Error Handling**: Use `asyncHandler` to wrap controllers and `ApiError(statusCode, message)` from `src/utils/ApiError` for domain exceptions.
- **Validation**: All write endpoints (`POST`, `PUT`) must use `validate(schema)` middleware using Zod with `safeParse`.
- **Environment**: All environment variables are strictly validated at startup in `src/config/env.ts` (Default `PORT=5000`, `MONGO_URL` for MongoDB Atlas).

### 2. Frontend Conventions (`apps/web`)
- **App Router**: Uses Next.js App Router (`app/`).
- **Data Fetching**: Use TanStack React Query (`src/hooks/useProducts.ts`) with custom Axios client (`src/lib/axios.ts` pointing to `NEXT_PUBLIC_API_URL=http://localhost:5000/api`).
- **Typing**: Types reside in `src/types/`. All API methods in `src/services/` unwrap the `{ success: true, data: T }` envelope.

---

## Essential Commands

### Backend (`apps/api`)
```bash
npm run dev      # Start dev server on http://localhost:5000 with hot reload
npm run build    # Compile TypeScript
npm run seed     # Populate MongoDB Atlas with demo categories and products
npm test         # Run Supertest integration test suite
```

### Frontend (`apps/web`)
```bash
npm run dev      # Start Next.js development server on http://localhost:3000
npm run build    # Production build
npm run lint     # Lint check
```

---

## CI / Automated Checks
- GitHub Actions workflow in `.github/workflows/ci.yml` validates linting, TypeScript build, and tests on push and PR.

---

## Agentic Contributions & Redevelopment History

### 1. API Architecture Revamp
- **Migration**: Refactored the raw Express app into a robust modular structure (`src/modules`, `src/middlewares`, `src/routes`, `src/utils`, `src/database`).
- **TypeScript Standardization**: Enforced strict TypeScript configurations. Fixed broken imports (e.g., Mongoose `FilterQuery` typing) and removed unused declarations to achieve a clean compilation (`npm run typecheck` passes).
- **Error & Response Handling**: Developed `ApiResponse.ts` for uniform `{ success: true, data }` structures and `ApiError.ts` combined with `asyncHandler` for robust runtime error propagation.
- **Validation**: Introduced Zod schemas (`product.validation.ts`) and integrated them via a reusable `validate.middleware.ts` for strictly validating body, query, and params on all write operations.
- **Seeding & Database**: Optimized MongoDB Atlas connection management and modernized the seed scripts (`scripts/seed.ts`) using `tsx` for seamless database seeding.
- **Testing**: Instituted a Supertest-based integration test suite (`__tests__/products.test.ts`) covering CRUD endpoints.

### 2. Frontend Modernization
- **State & Data Caching**: Integrated TanStack React Query for efficient data fetching, paired with a custom Axios client to seamlessly unwrap API envelopes.
- **Architecture**: Structured the Next.js App Router for optimal Server-Side Rendering (SSR) and SEO performance.

### 3. Cleanup & Optimization
- **Cleanup**: Eliminated redundant/legacy codes, unused artifacts, and removed unnecessary `.js` / `.d.ts` compilations from source directories to emulate production-ready environments.
- **Documentation**: Restructured `README.md` to articulate the technology stack, specific library impacts, pros/cons, and rendering speed/reliability analysis across frontend and backend.
