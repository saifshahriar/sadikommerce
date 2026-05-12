<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Repo requirements (sadikommerce)

### Package manager

- Always use **Bun** tooling.
- Commands: use `bun`, `bun add`, `bun remove`, `bunx`.
- Never use `npm`, `npx`, `pnpm`, `yarn`.

### Goal

- Integrate UI from `./opnar-inspired-shop/` into root Next app under `src/app` (App Router).
- Treat `opnar-inspired-shop/` as design reference + component/data source for migration.
- `ui-img/` contains inspiration screenshots; match layout/feel.

### UI + design system

- Prefer **shadcn/ui** components where possible.
- Keep colorful frontend look using existing **CSS variables / Tailwind tokens**.
- Do not introduce hard-coded new colors, font families, or shadows.

### Icons (no emoji)

- Replace emoji-based UI (ex: category icons) with meaningful `lucide-react` icons.
- Use token-based colors only (ex: `text-primary`, `bg-secondary`).

### Typography

- Keep Geist fonts (already in `src/app/layout.tsx`).
- Improve typography via consistent type scale (size/weight/leading) using Tailwind classes.
- Use Tailwind Typography `prose` for long-form product content (descriptions/specs).

