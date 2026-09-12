# Holidaze

Holidaze is a modern venue booking platform built as the final Project Exam 2 submission for the Noroff Front-end Development program.

The goal of the project is to create a responsive and accessible booking experience where customers can browse and book venues, while venue managers can create and manage listings.

See the live website here: [Holidaze](https://tmh-holidaze.netlify.app/)

## Project Goal

The project focuses on building a maintainable and scalable front-end application while following the requirements from the Project Exam brief.

Particular focus areas include:

- Clean architecture
- Reusable React components
- Accessibility and semantic HTML
- Responsive design
- Strong TypeScript typing
- Maintainable code structure

[Holidaze website](tmh-holidaze.netlify.app)

---

## Tech Stack & Choices

### React

React was chosen to build a reusable and component-based interface.

Using components makes it easier to separate concerns, reuse UI patterns, and maintain the application as it grows.

### TypeScript

TypeScript is used to improve predictability and reduce bugs during development.

The goal is to create stronger contracts between components, API data, and application logic through typing.

### Vite

Vite was selected because it provides a fast development experience with quick hot reloading and a simple setup for modern React projects.

### Tailwind CSS

Tailwind CSS is used for styling to enable rapid UI development while keeping styles consistent and responsive.

The goal is to create reusable visual patterns without maintaining large CSS files.

### ESLint & Prettier

ESLint and Prettier help maintain consistent code quality and formatting across the project.

### Husky & lint-staged

Husky and lint-staged are used to automatically run checks before commits to help catch formatting or linting issues early.

---

## Features

### Customer Features

- Browse venues
- Search and filter venues
- View venue details
- Create bookings
- View upcoming bookings
- Update avatar

### Venue Manager Features

- Create venues
- Edit venues
- Delete venues
- View bookings connected to owned venues

---

## Getting Started

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## Project Structure

The project follows a feature-based folder structure to keep related logic, components, hooks, and types close together. This improves maintainability and scalability as the application grows.

```txt
src/
├── components/
├── features/
├── hooks/
├── layouts/
├── pages/
├── services/
├── types/
└── utils/
```

For example:

- `components/` contains reusable UI
- `services/` handles API logic
- `types/` contains shared TypeScript types
- `hooks/` contains reusable React hooks

---

## Accessibility

Accessibility is an important part of this project.

The application aims to use:

- Semantic HTML
- Accessible forms
- Keyboard-friendly interactions
- Proper heading hierarchy
- Responsive layouts

---

## Future Improvements

As the project evolves, this section may include:

- Additional testing
- Improved filtering and search
- UI/UX refinements
- Performance improvements

---

## Documentation

- [Contributing](./CONTRIBUTING.md)
- [Agent Instructions](./AGENT.md)
