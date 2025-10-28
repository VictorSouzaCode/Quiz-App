
// Look Into Restructuring Quiz-App, Folder structure advide

// what i can do now?
// i am thinking in make a layout for the initial page
// inside this layout i will have the body and the header

// restructure the components folder and layout folder

// Here is the guide on how to structure it like a professional

// First a breave explanation about layouts and templates

// What’s the difference between Layout and Template?

// layout: Defines the structural skeleton of your app — where the header, footer, sidebar, and main content go.
// Header, Footer, Sidebar, <main> area

// Template: Defines a page composition pattern — how content is arranged inside the layout, often reused for multiple pages that look similar.
// Dashboard template, Auth template, Blog post template

// Visual Hierarchy example
/*
Layout (AppLayout)
 ├── Header
 ├── Sidebar
 └── Template (e.g. DashboardTemplate)
       ├── Page title
       ├── Actions toolbar
       └── Content (children)
*/

/* So:

Layout → the outer shell of the app (shared across pages)

Template → the inner reusable pattern for specific kinds of pages
*/

/*
Use Both if:

Your app has different page types that share different structures, e.g.:

Marketing pages vs Dashboard pages

Auth pages (no header) vs Main app pages (with header)

Admin template vs User template
*/

/*
Don’t use both (for now) if:

Your app is simple or only has one main layout pattern.

You only have one global layout (Header + Body).

Then layout alone is enough — adding templates would just add unnecessary complexity.
*/

/* So professionals don’t always start with both — they introduce templates later as the codebase grows.
*/

// So In Short i will structure my app like this

/*
src/
 ├── app/
 │    ├── layout/
 │    │    ├── AppLayout.tsx          # (Header + Body)
 │    │    ├── Header.tsx             # moved
 │    │    └── Body.tsx               # moved
 │    │
 │    ├── pages/
 │    │    ├── HomePage.tsx           # Renders layout and content
 │    │    └── AboutPage.tsx          # (example of another page)
 │    │
 │    └── routes/
 │         └── index.tsx              # React Router setup (if applicable)
 │
 ├── shared/
 │    ├── ui/                         # small reusable UI
 │    │    ├── Button.tsx
 │    │    ├── Container.tsx
 │    │    ├── Link.tsx
 │    │    └── index.ts               # Barrel
 │    │
 │    ├── hooks/                      # Custom hooks
 │    │    └── useWindowSize.ts
 │    │
 │    ├── utils/                      # Utility or helper functions
 │    │    └── formatDate.ts
 │    │
 │    └── types/                      # Global TypeScript types
 │         └── index.ts
 │
 ├── assets/                          # Static files (images, icons, etc.)
 │    └── logo.svg
 │
 ├── styles/                          # Global styles or Tailwind config overrides
 │    └── globals.css
 │
 └── main.tsx 
*/