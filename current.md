# Tech-Armor — Current State Snapshot
> Captured: 2026-08-18 | Before applying improvements

---

## What This Project Is

A monorepo e-commerce prototype for mobile accessories. Two apps:

```
Tech-Armor/
  apps/
    api/   → TypeScript + Express 5 + MongoDB (Mongoose) + Zod
    web/   → Next.js 16 + React 19 + Tailwind CSS + React Query + Axios + Zustand
  stitch/  → Separate stitch mobile accessories project (untouched)
```

---

## Backend (apps/api) — Current File Map

```
src/
  server.ts                  ← Entry point, starts Express + connects DB
  app.ts                     ← Middleware wiring, route mounting
  config/
    env.ts                   ← Reads PORT and MONGO_URL from .env
  database/
    mongodb.ts               ← Mongoose connect, logs connection name
  middlewares/
    error.middleware.ts      ← Global error handler (statusCode + message)
    notFound.middleware.ts   ← 404 fallback
    validate.middleware.ts   ← schema.parse(req.body) — NO try/catch ⚠️
  modules/
    products/
      product.model.ts       ← Mongoose schema: name, category(ref), description, image, price, brand, rating
      product.routes.ts      ← POST(validate), GET, GET/:id, PUT/:id(NO validate ⚠️), DELETE/:id
      product.controller.ts  ← createProduct/getProducts use successResponse; getById/update/delete do NOT ⚠️
      product.service.ts     ← Thin pass-through to repository
      product.repository.ts  ← Direct Mongoose calls (create, find, findById, findByIdAndUpdate, findByIdAndDelete)
      product.validation.ts  ← Zod schema: name(min3), description(min5), price(number), image(url) — missing brand, rating, category ⚠️
    categories/
      category.model.ts      ← Mongoose schema: name(unique), slug(unique, lowercase)
      category.routes.ts     ← GET / only
      category.controller.ts ← res.json(categories) — raw, no successResponse wrapper ⚠️
      category.service.ts    ← Thin pass-through to repository
      category.repository.ts ← Category.find().sort({ name: 1 })
      category.validation.ts ← EMPTY FILE (0 bytes) ⚠️
  utils/
    ApiResponse.ts           ← successResponse(data, message) → { success, message, data }
    ApiError.ts              ← class ApiError extends Error { statusCode }
    asyncHandler.ts          ← wraps async fn, forwards errors to next()
    logger.ts                ← pino + pino-pretty
```

### app.ts (current)
```typescript
app.use(cors());           // ⚠️ No origin restriction
app.use(express.json());
// ⚠️ No helmet()
// ⚠️ No rate limiting
```

---

## Frontend (apps/web) — Current File Map

```
app/
  page.tsx               ← HomePage: Hero + ProductGrid + OfferBanner
src/
  components/
    hero/                ← Hero component
    layout/              ← Layout components
    offer/               ← OfferBanner component
    products/            ← ProductGrid component
    search/              ← Search component
    ui/                  ← Shared UI elements
  data/
    offer.ts             ← Static offer data
  hooks/
    useProducts.ts       ← useProducts() + useProduct(id) via React Query
  lib/
    api.ts               ← Exports API_URL from env
    axios.ts             ← axios.create({ baseURL: API_URL })
    navigation.ts        ← Navigation helpers
  providers/             ← React Query provider etc.
  services/
    hero.service.ts      ← Hero product fetch
    product.service.ts   ← getProducts, getProduct, createProduct, updateProduct, deleteProduct
  store/                 ← Zustand store
  types/
    product.ts           ← Product interface + ProductsResponse interface
    offer.ts             ← Offer interface
```

### Types mismatch (current)
- API Product model has: `name, category(ObjectId), description, image, price, brand, rating`
- Web Product type has: `name, description, categories(string), image, price, discount` ← `discount` doesn't exist in API; `brand`/`rating` missing

---

## Dependencies (current)

### API (apps/api/package.json)
| Package | Version | Status |
|---|---|---|
| express | ^5.2.1 | ✅ installed |
| helmet | ^8.2.0 | ✅ installed but **NOT used in app.ts** ⚠️ |
| cors | ^2.8.6 | ✅ used, but no config ⚠️ |
| mongoose | ^9.6.3 | ✅ |
| zod | ^4.4.3 | ✅ |
| pino + pino-pretty | ^10/^13 | ✅ |
| dotenv | ^17.4.2 | ✅ |
| ts-node-dev | ^2.0.0 | ✅ |
| **jest** | — | ❌ not installed |
| **supertest** | — | ❌ not installed |
| **express-rate-limit** | — | ❌ not installed |

### Web (apps/web/package.json)
| Package | Version | Status |
|---|---|---|
| next | 16.2.9 | ✅ |
| react / react-dom | 19.2.4 | ✅ |
| @tanstack/react-query | ^5.101.2 | ✅ |
| axios | ^1.18.0 | ✅ |
| tailwindcss | ^4 | ✅ |
| zustand | ^5.0.14 | ✅ |
| lucide-react | ^1.23.0 | ✅ |

---

## Issues Identified (Before Fix)

### 🔴 Critical
1. **Inconsistent API responses** — `getProductById`, `updateProduct`, `deleteProduct`, `getCategories` do not use `successResponse`
2. **validate middleware has no try/catch** — Zod errors bypass error handling
3. **No validation on PUT** — update route accepts any body

### 🟠 High
4. **helmet is installed but never applied** — security headers all missing
5. **cors() with no config** — any origin allowed
6. **category.validation.ts is empty** — categories have zero validation
7. **Product Zod schema missing fields** — brand, rating, category not in schema

### 🟡 Medium
8. **No seed script** — blank DB on fresh clone
9. **No tests** — zero test files
10. **No CI** — no GitHub Actions workflow
11. **Type mismatch** — frontend `Product` type has wrong/missing fields vs API model
12. **env.ts has no validation** — PORT/MONGO_URL silently undefined if .env missing

---

## API Endpoints (current)

| Method | Path | Validate | Response Shape |
|---|---|---|---|
| POST | /api/products | ✅ Zod (partial schema) | successResponse ✅ |
| GET | /api/products | — | successResponse ✅ |
| GET | /api/products/:id | — | raw product ❌ |
| PUT | /api/products/:id | ❌ none | raw product ❌ |
| DELETE | /api/products/:id | — | `{ message: "..." }` ❌ |
| GET | /api/categories | — | raw array ❌ |

---

## Impact Scores (before improvements)
- HR / Non-technical: 7.5 / 10
- Mid-level Developer: 6 / 10
- Senior / Tech Lead: 5.5 / 10
