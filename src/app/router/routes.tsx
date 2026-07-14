import { LoginPage } from "../../features/auth/pages/LoginPage";
import { RegisterPage } from "../../features/auth/pages/RegisterPage";
import { BookingsDashboardPage } from "../../features/bookings/pages/BookingsDashboardPage";
import { HomePage } from "../../features/home/pages/HomePage";
import { NotFoundPage } from "../../features/not-found/pages/NotFoundPage";
import { ProfilePage } from "../../features/profile/pages/ProfilePage";
import { VenueManagerDashboardPage } from "../../features/venue-manager/pages/VenueManagerDashboardPage";
import { VenueDetailsPage } from "../../features/venues/pages/VenueDetailsPage";
import { VenuesPage } from "../../features/venues/pages/VenuesPage";
import { RootLayout } from "../../shared/layouts/RootLayout";
import type { RouteObject } from "react-router";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "venues",
        element: <VenuesPage />,
      },
      {
        path: "venues/:id",
        element: <VenueDetailsPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
      {
        path: "host",
        element: <VenueManagerDashboardPage />,
      },
      {
        path: "dashboard",
        element: <BookingsDashboardPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
];
