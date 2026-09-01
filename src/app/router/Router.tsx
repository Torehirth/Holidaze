import { createBrowserRouter, RouterProvider } from "react-router";
import { routes } from "./routes";
import { AuthProvider } from "../../features/auth/context/AuthProvider";

const router = createBrowserRouter(routes);

export const Router = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};
