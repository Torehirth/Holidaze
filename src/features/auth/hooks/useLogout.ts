import { useNavigate } from "react-router";
import { useAuth } from "./useAuth";
import { clearStoredUser } from "../utils/authStorage";

export const useLogout = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useAuth();

  const handleLogout = () => {
    clearStoredUser();
    setCurrentUser(null);
    navigate("/login", { replace: true });
  };

  return handleLogout;
};
