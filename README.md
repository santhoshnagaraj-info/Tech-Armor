# Tech-Armor

A modern, modular e‑commerce demo for mobile accessories — a TypeScript Express API paired with a Next.js frontend. This repository demonstrates clean architecture, typed services, and a fast, responsive product browsing UI.

---

## Key Features

- Backend: TypeScript, Express, MongoDB (Mongoose), Zod validation
- Frontend: Next.js (App Router), React 19, Tailwind CSS, React Query for caching
- Clear layered architecture: controllers → services → repositories
- Consistent API envelope via `successResponse`, centralized error handling
- Polished UI: responsive product grid, hero product, optimized images via Next/Image

---

## Tech Stack

- Node.js + Express + TypeScript
- MongoDB (Mongoose)
- Zod for request validation
- Next.js + React + Tailwind CSS
- Axios + React Query for data fetching
- Pino for structured logging

---

## Repo Layout

- `apps/api` — Backend service (TypeScript + Express)
  - `src/server.ts` — app entry and DB connect
  - `src/app.ts` — middleware and routes wiring
  - `src/modules/products` — product model, routes, controller, service, repository
  - `src/modules/categories` — categories read endpoint
- `apps/web` — Next.js frontend
  - `app/page.tsx` — home page composing `Hero`, `ProductGrid`, `OfferBanner`
  - `src/lib/axios.ts` — Axios instance using `NEXT_PUBLIC_API_URL`
  - `src/hooks/useProducts.ts` — React Query hooks for product data

---

## Getting Started (Local)

1. Create backend `.env` in `apps/api`:

```bash
PORT=4000
MONGO_URL=mongodb://localhost:27017/tech-armor
```

2. Create frontend `.env.local` in `apps/web`:

```bash
NEXT_PUBLIC_API_URL=http://localhost:4000/api
```

3. Install and run locally:

```bash
# install backend
cd apps/api
npm install

# install frontend
cd ../web
npm install

# run backend (dev)
cd ../api
npm run dev

# run frontend (dev)
cd ../web
npm run dev
```

4. Build & run production:

```bash
cd apps/api
npm run build
npm start

cd ../web
npm run build
npm start
```

---

## API Endpoints

- `POST /api/products` — create product (validated with Zod)
- `GET  /api/products` — list products (returns `{ success, data }`)
- `GET  /api/products/:id` — get product
- `PUT  /api/products/:id` — update product
- `DELETE /api/products/:id` — delete product
- `GET /api/categories` — list categories

---

## Data Models (summary)

- Product: `name`, `category` (ObjectId → Category), `description`, `image`, `price`, `brand`, `rating`, `createdAt`, `updatedAt`
- Category: `name`, `slug`, `createdAt`, `updatedAt`

---

## Development Notes & Tips

- Use `NEXT_PUBLIC_API_URL` to point the frontend to your backend during development.
- Seed the database with sample products to quickly preview the UI.
- React Query provides cache & background refresh — use devtools for inspection.

---

## Contribution

Contributions welcome. Fork, branch, and open a PR with a clear description and tests where appropriate.

---

## License

Add a `LICENSE` file (e.g., MIT) to make this repository public-ready.

---

## Contact

Open an issue or contact the maintainer for questions, feature requests, or help.

change it like now to do. and create a filename: projects-impacts.txt or .md and put all the impacts you given to me with why, how, where also you given.
