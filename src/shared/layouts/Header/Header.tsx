import { useState } from "react";
import { NavLink } from "react-router";
import { Menu, User, X } from "lucide-react";
import logo from "../../assets/logo/logo_small.svg";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const initialClass = `px-2 hover:opacity-70 active:scale-90`;
  const activeClass = `border-primary border-b ${initialClass}`;
  const initialClassMobile = `px-2 hover:opacity-70 active:scale-90`;
  const activeClassMobile = `border-background border-b border- ${initialClass}`;

  return (
    <header className="border-border-light relative h-20 border-b">
      <div className="flex h-full items-center justify-between px-4 md:px-8">
        <NavLink
          to="/"
          className="hover:opacity-80 active:scale-95"
          aria-label="Go to Holidaze homepage">
          <img src={logo} alt="" />
        </NavLink>

        {/* Desktop navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-12 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeClass : initialClass)}>
            Home
          </NavLink>
          <NavLink
            to="/venues"
            className={({ isActive }) => (isActive ? activeClass : initialClass)}>
            Explore
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? activeClass : initialClass)}>
            Dashboard
          </NavLink>
          <NavLink
            to="/host"
            className={({ isActive }) => (isActive ? activeClass : initialClass)}>
            Host
          </NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <NavLink
            to="/profile"
            aria-label="Go to profile"
            className="inline-flex items-center justify-center hover:opacity-70 active:scale-90">
            <User aria-hidden="true" className="text-foreground" />
          </NavLink>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex items-center justify-center hover:opacity-70 active:scale-90 md:hidden"
            onClick={() => {
              setIsMenuOpen((prevState) => !prevState);
            }}>
            {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
        className={`bg-foreground text-background fixed top-20 right-0 bottom-0 z-500 flex w-full max-w-sm flex-col items-center gap-4 px-8 pt-16 pb-8 text-center transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-[200%]"} `}>
        <NavLink
          to="/"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? activeClassMobile : initialClassMobile
          }>
          Home
        </NavLink>
        <NavLink
          to="/venues"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? activeClassMobile : initialClassMobile
          }>
          Venues
        </NavLink>
        <NavLink
          to="/dashboard"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? activeClassMobile : initialClassMobile
          }>
          Dashboard
        </NavLink>
        <NavLink
          to="/host"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? activeClassMobile : initialClassMobile
          }>
          Host
        </NavLink>
        <NavLink
          to="/login"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? activeClassMobile : initialClassMobile
          }>
          Login
        </NavLink>
      </nav>

      {/* Backdrop to close menu on click outside */}
      {isMenuOpen && (
        <div
          className="bg-foreground/70 fixed inset-0 top-20 z-100 md:hidden"
          onClick={closeMenu}></div>
      )}
    </header>
  );
};
