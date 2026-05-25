# AGENT.md

## Project Overview

Holidaze is a modern booking platform built as part of Noroff Project Exam 2.

Tech stack:

- React
- TypeScript
- Vite
- Tailwind CSS

The project prioritizes:

- Clean architecture
- Readable code
- Accessibility
- Reusable UI components
- Maintainability
- Beginner-friendly patterns

---

## Project Goals

When contributing to this project:

1. Prioritize readability over cleverness
2. Prefer simple, maintainable solutions
3. Keep components reusable and focused
4. Follow accessibility best practices
5. Maintain strong TypeScript typing

Avoid overengineering.

---

## Architecture Preferences

Prefer clear separation of concerns.

Example structure:

```txt
src/
├── components/
├── features/
├── hooks/
├── layouts/
├── pages/
├── services/
├── types/
├── utils/
```

Guidelines:

- `components/` → reusable UI
- `pages/` → route-level pages
- `services/` → API/data logic
- `hooks/` → reusable hooks
- `types/` → shared TypeScript types
- `utils/` → helper functions

---

## React Guidelines

Preferred:

- Functional components
- Hooks
- Composition
- Small reusable components

Avoid:

- Large components with many responsibilities
- Unnecessary abstractions
- Premature optimization

---

## TypeScript Guidelines

- Prefer explicit types
- Avoid `any`
- Type API responses
- Keep interfaces/types reusable

Example:

```ts
type Venue = {
  id: string;
  name: string;
  price: number;
};
```

---

## Styling

Use Tailwind CSS.

Guidelines:

- Keep spacing consistent
- Prefer reusable patterns
- Avoid unnecessary utility duplication
- Prioritize responsive layouts

---

## Accessibility

Prioritize:

- Semantic HTML
- Keyboard accessibility
- Correct heading hierarchy
- Accessible form labels
- Meaningful alt text

---

## Code Quality

Before changes are considered complete:

- Project builds successfully
- Linting passes
- Formatting is clean
- Types are correct

Commands:

```bash
npm run dev
npm run build
npm run lint
npm run format
```

---

## Decision Making

When multiple solutions exist:

1. Choose readability
2. Choose maintainability
3. Prefer beginner-friendly patterns
4. Avoid unnecessary complexity
