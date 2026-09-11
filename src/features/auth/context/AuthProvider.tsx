import { useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import { getStoredUser } from "../utils/authStorage";
import type { AuthUser } from "../types/auth";

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(getStoredUser);

  const login = (user: AuthUser) => {
    localStorage.setItem("userName", user.userName);
    localStorage.setItem("email", user.email);
    localStorage.setItem("accessToken", user.accessToken);
    localStorage.setItem("venueManager", String(user.venueManager));
    localStorage.setItem("profileImageURL", String(user.profileImageURL));

    setCurrentUser(user);
  };

  const updateCurrentUser = (updates: Partial<AuthUser>) => {
    if (!currentUser) {
      return;
    }

    const updatedUser = {
      ...currentUser,
      ...updates,
    };

    localStorage.setItem("userName", updatedUser.userName);
    localStorage.setItem("email", updatedUser.email);
    localStorage.setItem("accessToken", updatedUser.accessToken);
    localStorage.setItem("venueManager", String(updatedUser.venueManager));
    localStorage.setItem("profileImageURL", updatedUser.profileImageURL ?? "");

    setCurrentUser(updatedUser);
  };

  return (
    <AuthContext value={{ currentUser, login, setCurrentUser, updateCurrentUser }}>
      {children}
    </AuthContext>
  );
};
