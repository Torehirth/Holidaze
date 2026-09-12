# Contributing to Holidaze

Thanks for your interest in contributing to Holidaze.

Holidaze is a venue booking platform built with React, TypeScript, Vite and Tailwind CSS as part of Noroff Project Exam 2.

Contributions should follow the existing project structure and favour readable, accessible and maintainable solutions.

## Getting Started

Clone the repository and install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

Run ESLint:

```bash
npm run lint
```

Format the project:

```bash
npm run format
```

## Environment Variables

The project uses a Noroff API key for protected API requests.

Create a `.env` file in the project root:

```env
VITE_API_KEY=your_api_key
```

Do not commit `.env` files or API keys to the repository.

## Code Guidelines

Please:

- Write readable and maintainable code
- Use TypeScript types instead of `any`
- Follow the existing feature-based structure
- Keep components focused
- Keep API requests in service functions
- Reuse existing shared components where appropriate
- Follow semantic HTML and accessibility best practices
- Keep styling consistent with the existing Tailwind design system

Prefer:

- Functional React components
- Hooks
- Clear naming
- Simple solutions
- Existing project patterns

Avoid:

- Unnecessary dependencies
- Premature abstractions
- Large components with unrelated responsibilities
- Duplicate implementations of existing shared functionality

## Branches and Commits

Use descriptive branch names, for example:

```txt
feature/venue-booking
fix/mobile-navigation
refactor/venue-service
```

Use clear commit messages:

```txt
feat: add venue search
fix: handle booking refresh errors
docs: update README
```

## Before Opening a Pull Request

Please make sure:

- [ ] The project builds successfully
- [ ] ESLint passes
- [ ] Code is formatted
- [ ] TypeScript errors have been resolved
- [ ] Changes have been tested in the browser
- [ ] Responsive behaviour has been checked
- [ ] Relevant accessibility has been checked

Run:

```bash
npm run build
npm run lint
npm run format
```
