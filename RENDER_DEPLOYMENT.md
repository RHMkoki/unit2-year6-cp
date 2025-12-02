# Render.com Build Configuration

## Deployment Settings

**Publish Directory:** `.next`

This Next.js application builds to the `.next` directory. The `.next` folder contains:
- Server-side code and API routes
- Pre-rendered pages
- Static assets
- Optimized production bundles

## Build and Start Commands

- **Build:** `pnpm run build` (compiles TypeScript and Next.js)
- **Start:** `pnpm run start` (runs the production server)

## Environment Variables

Set these in your Render dashboard:
- `NODE_ENV=production`
- `NODE_VERSION=20` (or your preferred Node version)

## Notes

- The project uses `pnpm` as the package manager
- TypeScript build errors are ignored per `next.config.mjs`
- Images are unoptimized for broader compatibility
