import { ProtectedRoute } from "../../features/auth/components/ProtectedRoute";
import { LoginPage } from "../../features/auth/pages/LoginPage";
import { RegisterPage } from "../../features/auth/pages/RegisterPage";
import { HomePage } from "../../features/home/pages/HomePage";
import { NotFoundPage } from "../../features/not-found/pages/NotFoundPage";
import { EditProfilePage } from "../../features/profile/pages/EditProfilePage";
import { ProfilePage } from "../../features/profile/pages/ProfilePage";
import { CreateVenuePage } from "../../features/venue-manager/pages/CreateVenuePage";
import { EditVenuePage } from "../../features/venue-manager/pages/EditVenuePage";
import { VenueManagerPage } from "../../features/venue-manager/pages/VenueManagerPage";
import { VenueBookingsPage } from "../../features/venue-manager/pages/VenueBookingsPage";
import { VenueDetailsPage } from "../../features/venues/pages/VenueDetailsPage";
import { VenuesPage } from "../../features/venues/pages/VenuesPage";
import { RootLayout } from "../../shared/layouts/RootLayout";
import type { RouteObject } from "react-router";
import { RouteErrorBoundary } from "../../shared/components/ui/feedback/RouteErrorBoundary";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <RouteErrorBoundary />,
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
        element: <ProtectedRoute />,
        children: [
          {
            path: "profile",
            element: <ProfilePage />,
          },
          {
            path: "profile/edit",
            element: <EditProfilePage />,
          },
        ],
      },
      {
        element: <ProtectedRoute forVenueManagers />,
        children: [
          {
            path: "host",
            element: <VenueManagerPage />,
          },
          {
            path: "host/venues/create",
            element: <CreateVenuePage />,
          },
          {
            path: "host/venues/:id/edit",
            element: <EditVenuePage />,
          },
          {
            path: "host/venues/:id/bookings",
            element: <VenueBookingsPage />,
          },
        ],
      },
    ],
  },
];
