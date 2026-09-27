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
