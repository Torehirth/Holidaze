import type { AuthUser } from "../context/AuthContext";

export const getStoredUser = (): AuthUser | null => {
  const userName = localStorage.getItem("userName");
  const email = localStorage.getItem("email");
  const accessToken = localStorage.getItem("accessToken");
  const isVenueManager = localStorage.getItem("venueManager");

  if (!userName || !email || !accessToken || !isVenueManager) {
    return null;
  }
  return {
    userName,
    accessToken,
    email,
    venueManager: isVenueManager === "true" ? true : false,
  };
};
