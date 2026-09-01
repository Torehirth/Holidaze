import { useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import { getStoredUser } from "../utils/authStorage";
import type { AuthUser } from "../types/auth";

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const login = (user: AuthUser) => {
    localStorage.setItem("userName", user.userName);
    localStorage.setItem("email", user.email);
    localStorage.setItem("accessToken", user.accessToken);
    localStorage.setItem("venueManager", String(user.venueManager));
    localStorage.setItem("profileImageURL", String(user.profileImageURL));

    setCurrentUser(user);
  };

  const [currentUser, setCurrentUser] = useState<AuthUser | null>(getStoredUser);

  return (
    <AuthContext value={{ currentUser, login, setCurrentUser }}>{children}</AuthContext>
  );
};
