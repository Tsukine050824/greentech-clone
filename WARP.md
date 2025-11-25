# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Tooling and Commands

This is a React + Vite single-page application using JavaScript/JSX, Tailwind CSS, and React Router. The project is configured with npm.

### Installation

- Install dependencies:
  - `npm install`

### Development

- Start the Vite dev server (HMR, default port 5173):
  - `npm run dev`

### Build and Preview

- Production build (TypeScript project build + Vite build):
  - `npm run build`
- Preview the built app locally:
  - `npm run preview`

> Note: Although the tooling is configured as a React + TypeScript Vite template (`tsconfig.app.json`, `vite.config.ts`), the current source code under `src/` is JavaScript/JSX. The TypeScript build step is effectively a no-op until `.ts`/`.tsx` files are added.

### Linting

ESLint is configured via `eslint.config.js` using the modern flat-config API with:
- `@eslint/js` recommended rules
- `typescript-eslint` recommended rules
- `eslint-plugin-react-hooks` latest recommended config
- `eslint-plugin-react-refresh` Vite config

Commands:
- Lint the whole project:
  - `npm run lint`  (runs `eslint .`)
- Lint a specific file (useful while iterating):
  - `npx eslint src/pages/Home.jsx`

> Note: The current ESLint config is scoped to `**/*.{ts,tsx}`. If you start adding TypeScript files, they will pick up these rules. JavaScript/JSX files presently have minimal lint coverage unless the config is expanded.

### Testing

There is currently **no test framework or npm test script configured** in this repository. Before referring to "running a single test" or similar flows, add a test runner (e.g., Vitest, Jest, or Testing Library) and corresponding npm scripts in `package.json`.

## High-Level Architecture

### Runtime Stack

- Client-side React SPA rendered via Vite.
- Routing handled by `react-router-dom` using the data-router API (`createBrowserRouter`).
- Styling implemented with Tailwind CSS plus a small set of custom utility classes in `src/index.css` (notably `.container-default` and `.section`).
- No backend integration or API layer in this repo; the app is a static marketing/landing experience.

### Entry Point and Routing

- **Entry**: `src/main.jsx`
  - Creates the React root and renders `<RouterProvider router={router} />`.
  - Imports global Tailwind styles from `src/index.css`.
- **Router configuration**: `src/router.jsx`
  - Uses `createBrowserRouter` to define a single top-level route whose `element` is `<MainLayout />` (`src/layouts/MainLayout.jsx`).
  - Child routes map to page components in `src/pages/`:
    - `/` → `Home`
    - `/linh-vuc-hoat-dong` → `Services`
    - `/khach-hang` → `Clients`
    - `/tuyen-dung` → `Careers`
    - `/lien-he` → `Contact`
    - `/gioi-thieu` → `AboutUs`
    - `*` → `NotFound`
  - All top-level pages therefore share the same layout shell and surrounding navigation/footer.

### Layout Shell and Shared Chrome

- **Layout**: `src/layouts/MainLayout.jsx`
  - Establishes the global page chrome:
    - `<TopBar />` — contact info and branding bar
    - `<Header />` — main navigation and sticky header behavior
    - `<Outlet />` — per-route page content
    - `<Footer />` — global footer with contact and service links
    - `<FloatingContact />` — floating support/contact form overlay
  - Wraps everything in a `div` with `min-h-screen flex flex-col bg-black`, making the layout full-height with a flexible main area.

- **TopBar**: `src/components/TopBar.jsx`
  - Shows logo and primary contact channels (phone, email, hotline) using static data and images.
  - Structured as a responsive grid of four columns at medium+ breakpoints.

- **Header**: `src/components/Header.jsx`
  - Core navigation bar using `NavLink` from `react-router-dom` to highlight active routes.
  - Implements two hover-activated dropdown menus:
    - "Giới thiệu" (About)
    - "Lĩnh vực hoạt động" (Fields of activity)
  - Uses `useEffect` and `requestAnimationFrame` to toggle a **sticky header** variant:
    - When scroll position exceeds a threshold, a compact fixed header appears at the top with simplified nav links and the same dropdown contents.
  - Contains a simple toggleable search input (local UI only, no search logic).

- **Footer**: `src/components/Footer.jsx`
  - Displays company contact details and office location, plus navigation shortcuts and service links.
  - Uses `react-icons` for iconography and Tailwind for layout and coloring.

- **FloatingContact**: `src/components/FloatingContact.jsx`
  - A fixed-position "Hỗ trợ" (Support) button at the bottom-right.
  - Clicking opens a modal-style overlay with a basic contact form (unwired to any backend).

### Pages and Sections

- **Home page**: `src/pages/Home.jsx`
  - Imports a hero background image, the custom `useInView` hook, `react-countup`, and several Home sections under `src/sections/home/`.
  - Defines a stats block (4 items) that animates into view and counts up numbers only when scrolled into view (using `useInView`).
  - Composes the rest of the page from section components:
    - `<AboutIntro />`
    - `<ServicesHero />`
    - `<NewsCarousel />`
    - `<PartnersCarousel />`

- **Home sections**: `src/sections/home/`
  - `index.js` re-exports section components for ergonomic imports.
  - `AboutIntro.jsx` — two-column layout: a collage of images and a text column describing the company, plus CTA-like buttons for "Tầm nhìn", "Sứ mệnh", and "Giá trị cốt lõi".
  - `ServicesHero.jsx` — multiple alternating image/text blocks presenting different service categories (Ô tô & Di động, Dịch vụ kỹ thuật, Trí tuệ nhân tạo), using large numeric labels (01, 02, 03) and precise grid layout.
  - `PartnersCarousel.jsx` — horizontally scrolling, **infinite-loop** partner logo carousel:
    - Uses `useMemo` to build an extended logo list with cloned head/tail items.
    - Calculates card widths and gaps responsively in a `useEffect` resize handler.
    - Manages drag-to-scroll behavior with `mousedown`/`mousemove`/touch events and a custom `smoothScrollTo` animation using `requestAnimationFrame`.
    - Implements logic to seamlessly "teleport" scroll positions when crossing the cloned boundaries to create an infinite scroll effect.
  - `LogoStrip.jsx` — static grid of partner cards in two rows (top and bottom arrays), each card overlaying text and a CTA on top of partner imagery.

- **Other pages**: `src/pages/Services.jsx`, `Clients.jsx`, `Careers.jsx`, `Contact.jsx`, `AboutUs.jsx`, `NotFound.jsx`
  - These provide dedicated pages per top-level route (content is straightforward and can be inspected per-file when needed).

### Styling and Layout System

- **Tailwind configuration**: `tailwind.config.js`
  - `content` includes `./index.html` and `./src/**/*.{js,jsx}` so Tailwind purges correctly for this React/JSX setup.
  - Uses mostly default theme; customizations are driven via utility classes in JSX.

- **Global styles**: `src/index.css`
  - Imports Tailwind base, components, and utilities.
  - Defines a small set of project-wide utility classes:
    - `.container-default` — `max-w-7xl mx-auto px-4` (used widely in layout and sections as the main content container).
    - `.section` — standard vertical padding for sections.

### Custom Hooks and Utilities

- **`useInView` hook**: `src/hooks/useInView.js`
  - Wraps `IntersectionObserver` to expose `{ ref, inView }`:
    - `ref` is attached to any element that should be observed.
    - `inView` toggles based on intersection state.
  - Accepts options (default `{ threshold: 0.2, once: true }`) and disconnects the observer once the element has intersected if `once` is true.
  - Used in `Home.jsx` to trigger stat animations only when scrolled into view.

## Notes for Future Changes

- Navigation, page composition, and global chrome are tightly coupled:
  - Route definitions live in `src/router.jsx`.
  - Shared layout (TopBar, Header, Footer, FloatingContact) lives in `src/layouts/MainLayout.jsx` and `src/components/`.
  - When adding or renaming top-level pages, update both the router and any corresponding navigation links in `Header.jsx` and `Footer.jsx`.
- The Home page UX relies on custom intersection and carousel logic (`useInView`, `PartnersCarousel`). Changes to these should be tested in the browser to ensure scroll/drag behavior and infinite looping remain smooth and glitch-free.
