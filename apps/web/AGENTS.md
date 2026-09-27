# Next.js Web App Agent Guidelines

<!-- BEGIN:nextjs-agent-rules -->
## Next.js Rules
This version uses Next.js 16 + React 19 App Router.
- Verify App Router conventions before writing pages or route handlers.
- Use `Next/Image` for image assets.
- Data fetching should go through `src/services/` and `src/hooks/` with `@tanstack/react-query`.
<!-- END:nextjs-agent-rules -->

## Project Context
- Backend API base URL is configured via `NEXT_PUBLIC_API_URL` (points to `http://localhost:5000/api`).
- Product types are defined in `src/types/product.ts` and align with the backend's unified `{ success, message, data }` response envelope.
- Global UI state is managed via Zustand in `src/store/`.
