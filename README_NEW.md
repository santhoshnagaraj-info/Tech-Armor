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
## Technologies Used & Analysis

### Frontend
*   **Next.js (App Router)**: React framework for building user interfaces.
    *   **Impact**: Enables fast rendering through SSR (Server-Side Rendering) and SSG (Static Site Generation), optimizing SEO.
    *   **Pros & Cons**: 
        *   *Pros*: Excellent performance, built-in routing, API routes, automatic image optimization.
        *   *Cons*: Learning curve for the new App Router, potentially complex deployment if not using Vercel.
    *   **Rendering Speed & Reliability**: High reliability. First page render speed is exceptionally fast due to server components and caching (often under 1 second for static/cached pages). Subsequent pages load almost instantly via client-side navigation.
*   **React 19**: Core UI library.
    *   **Impact**: Powers the component-based architecture.
    *   **Pros & Cons**: *Pros*: Large ecosystem, reusable components. *Cons*: Frequent boilerplate, state management can be complex.
*   **Tailwind CSS**: Utility-first CSS framework.
    *   **Impact**: Rapid UI development with consistent styling.
    *   **Pros & Cons**: *Pros*: Highly customizable, small production build size. *Cons*: Cluttered HTML class attributes.
*   **TanStack React Query**: Asynchronous state management.
    *   **Impact**: Simplifies data fetching, caching, and synchronization.
    *   **Pros & Cons**: *Pros*: Powerful caching, automatic background refetching. *Cons*: Requires understanding of cache invalidation.
*   **Zustand**: Client-side state management.
    *   **Impact**: Lightweight global state for UI toggles and cart management.

### Backend
*   **TypeScript**: Strongly typed superset of JavaScript.
    *   **Impact**: Prevents runtime errors and improves developer experience through better IDE support.
    *   **Pros & Cons**: *Pros*: Type safety, easier refactoring. *Cons*: Compilation step required, typing overhead.
*   **Express 5**: Fast, unopinionated web framework for Node.js.
    *   **Impact**: Serves as the backbone of the API layer, handling routing and middleware.
    *   **Pros & Cons**: *Pros*: Minimalist, highly extensible, native Promise support in v5. *Cons*: Requires manual structuring (which we solved using our custom layered architecture).
    *   **API Speed & Reliability**: High reliability. APIs resolve rapidly (typically ~20-50ms) as they are optimized via indexed MongoDB queries and minimal middleware overhead.
*   **MongoDB Atlas & Mongoose**: NoSQL database and ODM (Object Data Modeling) library.
    *   **Impact**: Flexible, document-based data storage ideal for e-commerce product catalogs.
    *   **Pros & Cons**: *Pros*: Schema validation via Mongoose, highly scalable. *Cons*: No strict multi-document ACID transactions without replica sets, schema flexibility can lead to messy data if not validated (we use Zod for strict validation).
*   **Zod**: TypeScript-first schema declaration and validation.
    *   **Impact**: Guarantees runtime data integrity at API boundaries.

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