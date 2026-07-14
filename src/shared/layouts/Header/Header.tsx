import { useState } from "react";
import { Link } from "react-router";
import { Menu, User, X } from "lucide-react";
import logo from "../../assets/logo/logo_small.svg";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="border-border-light relative h-20 border-b">
      <div className="flex h-full items-center justify-between px-8">
        <Link to="/" aria-label="Go to Holidaze homepage">
          <img src={logo} alt="" />
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-12 md:flex">
          <Link to="/">Home</Link>
          <Link to="/venues">Explore</Link>
          <Link to="/profile">Dashboard</Link>
          <Link to="/host">Host</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/profile"
            aria-label="Go to profile"
            className="inline-flex items-center justify-center">
            <User aria-hidden="true" className="text-foreground" />
          </Link>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex items-center justify-center md:hidden"
            onClick={() => {
              setIsMenuOpen((previousState) => !previousState);
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
        <Link to="/" onClick={closeMenu} className="px-4 py-2">
          Home
        </Link>
        <Link to="/venues" onClick={closeMenu} className="px-4 py-2">
          Venues
        </Link>
        <Link to="/dashboard" onClick={closeMenu} className="px-4 py-2">
          Dashboard
        </Link>
        <Link to="/host" onClick={closeMenu} className="px-4 py-2">
          Host
        </Link>
        <Link to="/login" onClick={closeMenu} className="px-4 py-2">
          Login
        </Link>
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
