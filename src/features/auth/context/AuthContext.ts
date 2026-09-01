import { createContext } from "react";
import type { AuthUser } from "../types/auth";

type AuthContextValue = {
  currentUser: AuthUser | null;
  login: (user: AuthUser) => void;
  setCurrentUser: (user: AuthUser | null) => void;
};

export const AuthContext = createContext<AuthContextValue | null>(null);
