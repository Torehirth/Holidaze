import { Navigate, Outlet } from "react-router";
import { useAuth } from "../hooks/useAuth";

type ProtectedRouteProps = {
  forVenueManagers?: boolean;
};

export const ProtectedRoute = ({ forVenueManagers = false }: ProtectedRouteProps) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  if (forVenueManagers && currentUser?.venueManager === false) {
    return <Navigate to="/profile" replace />;
  }

  return <Outlet />;
};
