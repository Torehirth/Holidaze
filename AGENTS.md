# AGENTS.md

## Project Overview

Holidaze is a venue booking application created for Noroff Project Exam 2.

The application is built with:

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router

The project uses the Noroff Holidaze API for venues, bookings, authentication and profile data.

## Development Priorities

When modifying this project:

1. Keep solutions readable and easy to understand
2. Prefer existing project patterns before introducing new ones
3. Avoid unnecessary abstractions and dependencies
4. Maintain TypeScript type safety
5. Preserve accessibility and responsive behaviour
6. Keep API logic separate from UI components
7. Reuse existing shared components where appropriate

This is a student project, so straightforward implementations are preferred over complex architectural patterns.

## Architecture

The application primarily follows a feature-based structure.

Feature-specific pages, components, services and types should stay close to the feature they belong to.

Reusable application code belongs under `shared`.

Typical structure:

```txt
src/
├── features/
│   └── ...
├── shared/
│   ├── components/
│   ├── constants/
│   ├── types/
│   └── utils/
├── layouts/
├── App.tsx
└── main.tsx
```

Do not move feature-specific code into `shared` unless it is genuinely reusable across features.

## React

Prefer:

- Functional components
- React hooks
- Small focused components
- Composition
- Local state for simple UI state
- Context only for state that needs to be available across multiple parts of the application

Avoid:

- Large components with several unrelated responsibilities
- Unnecessary effects
- Duplicated state
- Complex state-management libraries without a clear need

## TypeScript

- Avoid `any`
- Type component props
- Type API responses and request data
- Reuse existing types when appropriate
- Keep API types aligned with the Noroff API
- Do not use fallback values that change the intended type unless there is a clear reason

## API Services

API requests should normally be handled by service functions rather than directly inside UI components.

Services should:

- Use the existing API constants
- Return typed data
- Check `response.ok`
- Provide useful errors
- Include authentication and API-key headers only where required

Components are responsible for displaying loading, success and error states.

## Authentication and Permissions

Authentication state is handled through the existing authentication context.

Protected routes are used for:

- Registered-user functionality
- Venue-manager-only functionality

Do not expose venue-manager actions to users who do not have the required role.

## Styling

Use Tailwind CSS and follow the existing Holidaze design system.

Keep:

- Spacing consistent
- Layouts responsive
- Visual hierarchy clear
- Existing button and feedback components reusable

Avoid introducing separate styling approaches unless necessary.

## Accessibility

Maintain:

- Semantic HTML
- Correct heading hierarchy
- Keyboard accessibility
- Visible focus states
- Form labels
- Useful alternative text
- Accessible feedback messages
- Appropriate colour contrast

Do not add unnecessary ARIA attributes when native HTML or visible content already provides the required accessible information.

## Code Quality

Before considering a change complete, run:

```bash
npm run build
npm run lint
npm run format
```

Changes should not introduce TypeScript, ESLint or build errors.

## Decision Making

When several approaches are possible:

1. Prefer the simplest approach that correctly solves the problem
2. Follow patterns already used by the project
3. Prefer readability over cleverness
4. Avoid premature optimisation
5. Do not add dependencies for problems that can be solved clearly with existing tools
