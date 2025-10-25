# Muhammad Samar Sadaat's Portfolio

## Overview

This is a personal portfolio website for Muhammad Samar Sadaat, a MERN Stack Developer. The application showcases professional experience, technical skills, projects, and contact information through a modern, minimalist single-page design. Built with React on the frontend and Express.js on the backend, the portfolio emphasizes clean aesthetics and professional presentation following design principles inspired by modern developer portfolios.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack**: The frontend is built with React 18+ using TypeScript, leveraging Vite as the build tool and development server. The UI is constructed using shadcn/ui components (a collection of Radix UI primitives) with Tailwind CSS for styling.

**Design System**: The application uses a custom Tailwind configuration with a "new-york" style theme featuring neutral base colors and CSS variables for theming. Typography employs 'Inter' for headings and UI elements, with 'JetBrains Mono' for code snippets. The design follows a professional minimalist approach with subtle gradients, shadows, and consistent spacing using Tailwind's spacing primitives (4, 6, 8, 12, 16, 20, 24).

**Component Architecture**: The UI is component-based with reusable shadcn/ui components (buttons, cards, badges, etc.) stored in `client/src/components/ui/`. The main portfolio page is a single-page application located at `client/src/pages/Portfolio.tsx`, featuring sections for hero, professional summary, skills, experience, and projects.

**State Management**: The application uses TanStack Query (React Query) for server state management with custom query client configuration that disables automatic refetching and sets infinite stale time. Form handling is managed through react-hook-form with Zod resolvers for validation.

**Routing**: Client-side routing is handled by Wouter, a lightweight routing solution. Currently implements two routes: the main portfolio page (`/`) and a 404 not-found page.

### Backend Architecture

**Server Framework**: Express.js server running on Node.js with ESM module support. The server is configured in `server/index.ts` with middleware for JSON parsing, URL encoding, and request logging.

**Development vs Production**: The application uses different build processes for development and production. In development, it runs with tsx and Vite's middleware mode for HMR. Production builds use esbuild to bundle the server and Vite to build the client static assets.

**API Structure**: API routes are registered through `server/routes.ts` with a pattern of prefixing all application routes with `/api`. Currently, the route registration is minimal as the portfolio is primarily static content.

**Request Logging**: Custom middleware logs API requests with method, path, status code, duration, and truncated response bodies for requests to `/api` endpoints.

### Data Storage Solutions

**Storage Interface**: The application defines an `IStorage` interface in `server/storage.ts` for CRUD operations. Currently implements a `MemStorage` class that uses in-memory Maps for data persistence during development.

**Database Schema**: Drizzle ORM is configured to work with PostgreSQL through the Neon serverless driver. The schema (`shared/schema.ts`) defines a users table with UUID primary keys, username, and password fields. Drizzle-kit is configured for schema migrations with the PostgreSQL dialect.

**Schema Validation**: Uses drizzle-zod to generate Zod schemas from Drizzle table definitions, providing type-safe validation for insert operations.

**Migration Strategy**: Database schema changes are managed through Drizzle Kit with migrations output to the `./migrations` directory. The `db:push` script allows direct schema pushing to the database.

### Authentication and Authorization Mechanisms

**Current State**: The codebase includes user schema definitions and storage interfaces for authentication, but authentication logic is not yet implemented in the routes. The storage interface provides methods for `getUser`, `getUserByUsername`, and `createUser`.

**Session Management**: The application includes `connect-pg-simple` as a dependency, indicating planned PostgreSQL-based session storage, though session middleware is not yet configured.

**Planned Architecture**: The presence of user-related schemas and storage methods suggests a traditional username/password authentication system will be implemented, likely with session-based authentication using Express sessions stored in PostgreSQL.

### External Dependencies

**UI Component Library**: shadcn/ui components built on Radix UI primitives for accessible, unstyled component foundations. Includes accordion, alert-dialog, avatar, badge, button, calendar, card, carousel, chart, checkbox, command palette, context-menu, dialog, drawer, dropdown-menu, form controls, hover-card, input variants, navigation-menu, popover, progress, radio-group, scroll-area, select, separator, sheet, sidebar, slider, switch, table, tabs, textarea, toast notifications, toggle, and tooltip components.

**Styling**: Tailwind CSS with autoprefixer for cross-browser compatibility. Class variance authority (CVA) for component variant management. clsx and tailwind-merge (via cn utility) for conditional className composition.

**Database & ORM**: 
- Neon Database serverless PostgreSQL driver (@neondatabase/serverless)
- Drizzle ORM for type-safe database queries
- drizzle-zod for schema validation
- connect-pg-simple for PostgreSQL session storage

**Development Tools**:
- Vite for development server and build tooling
- tsx for TypeScript execution in development
- esbuild for server-side bundling in production
- Replit-specific plugins for runtime error overlay, cartographer, and dev banner (development only)

**Utilities**:
- date-fns for date manipulation
- nanoid for unique ID generation
- embla-carousel-react for carousel functionality
- wouter for client-side routing
- lucide-react for icon components

**Build Configuration**: The application requires a `DATABASE_URL` environment variable for PostgreSQL connection. Vite is configured with path aliases (@, @shared, @assets) for cleaner imports and serves the client from the `client` directory while building to `dist/public`.