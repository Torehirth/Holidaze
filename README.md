<p align="center"><img width="900" height="510" alt="Holidaze previes" src="https://github.com/user-attachments/assets/c1832683-c0b2-4717-9359-6944b4970531" /></p>


# Holidaze

Holidaze is a venue booking platform built as my Project Exam 2 submission for the Noroff Front-end Development programme.

The application allows users to discover and book venues, while registered venue managers can create and manage their own listings and view bookings made at their venues.

**Live website:** [Holidaze](https://tmh-holidaze.netlify.app/)

## About the Project

The goal of Holidaze was to build a complete front-end booking application using the Noroff Holidaze API.

I wanted the application to be easy to navigate and maintain while keeping the implementation understandable and avoiding unnecessary complexity.

The project uses a feature-based structure, reusable UI components and typed API services to keep different parts of the application separated.

Accessibility, responsive design and clear feedback to the user have also been important throughout the project.

## Features

### Visitors

- Browse venues
- Search for venues
- View venue details
- View venue facilities and location information
- View unavailable booking dates
- Register an account

### Registered Users

- Log in and log out
- Create venue bookings
- Select booking dates from an availability calendar
- Choose number of guests
- View upcoming bookings
- View their profile
- Update profile avatar, banner and bio

### Venue Managers

In addition to the registered user features, venue managers can:

- Create venues
- Edit owned venues
- Delete owned venues
- View bookings connected to their venues

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide React
- React DayPicker
- Noroff Holidaze API

### Development Tools

- ESLint
- Prettier
- Husky
- lint-staged

## Technical Choices

### React and TypeScript

React is used to build the application from reusable components, while TypeScript provides clear contracts between components, form data and API responses.

This has been particularly useful for venue, booking, profile and authentication data where the application depends on the structure returned by the API.

### Feature-Based Structure

The application is organised primarily by feature rather than keeping every component, service and type in global folders.

For example, venue-related pages, components and API services are kept together under the venue feature, while reusable components and utilities are placed under `shared`.

This makes it easier to see which code belongs together and keeps feature-specific logic separated from reusable application code.

### API Services

API requests are separated from page components into service functions.

This keeps components focused on user interface and state while the service layer handles communication with the Noroff API.

### Authentication

Authentication information is stored locally after login and exposed to the application through an authentication context.

Protected routes prevent unauthenticated users from accessing account functionality and prevent regular users from accessing venue-manager-only pages.

### Booking Availability

Venue booking data is used to disable unavailable dates in the booking calendar.

After a booking is successfully created, the venue data is fetched again so the calendar reflects the newly booked dates.

### Accessibility

The application uses semantic HTML and accessible form controls throughout the interface.

Particular attention has been given to:

- Form labels
- Keyboard navigation
- Heading hierarchy
- Meaningful image alternative text
- Visible focus states
- Accessible feedback and error messages
- Sufficient colour contrast

## Project Structure

The project uses a feature-based structure with shared resources for reusable functionality.

```txt
src/
├── features/
│   └── ...
├── shared/
│   ├── components/
│   ├── constants/
│   ├── layouts/
│   ├── types/
│   └── utils/
├── App.tsx
└── main.tsx
```

Feature folders contain functionality related to a particular area of the application, such as pages, components, services and feature-specific types.

`shared/` contains code intended to be reused across multiple features.

## Getting Started

### Clone the repository

```bash
git clone https://github.com/Torehirth/Holidaze.git
cd Holidaze
```

### Install dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root and add your Noroff API key:

```env
VITE_API_KEY=your_api_key
```

The API key is used by requests that require access to protected Noroff API functionality.

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Run ESLint

```bash
npm run lint
```

### Format the project

```bash
npm run format
```

## Deployment

The application is deployed with Netlify.

The production build is created with:

```bash
npm run build
```

and the generated `dist` directory is published.

A Netlify SPA redirect is included so React Router routes can be accessed directly or refreshed without returning a server 404.

## Design

The Holidaze interface follows a clean, minimal visual style with neutral colours, generous spacing and responsive layouts.

The design system includes reusable patterns for:

- Buttons
- Form controls
- Venue cards
- Feedback messages
- Typography
- Spacing
- Colours
- Responsive breakpoints

## Future Improvements

Possible improvements beyond the exam scope include:

- More advanced venue filtering
- Improved preservation of venue-list state when navigating back from a venue
- Additional automated testing
- Further performance optimisation
- Image carousel for venues with multiple images

## Documentation

- [Contributing](./CONTRIBUTING.md)
- [Agent Instructions](./AGENTS.md)
