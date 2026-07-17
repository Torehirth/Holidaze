import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faSquareLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/logo/logo_small.svg";
import { Link } from "react-router";
import { NavLink } from "react-router";

export const Footer = () => {
  const activeClass = `font-bold`;
  return (
    <>
      <footer className="bg-secondary w-full px-4 pt-12 md:p-8">
        <div className="flex flex-col items-start pb-8 md:flex-row md:items-center md:justify-between">
          <div>
            <img src={logo} alt="Holidaze logo" className="max-h-8" />
          </div>
          <div className="flex flex-col gap-2 pt-8 md:flex-row md:gap-8">
            <NavLink to="/" className={({ isActive }) => (isActive ? activeClass : "")}>
              Home
            </NavLink>
            <NavLink
              to="/venues"
              className={({ isActive }) => (isActive ? activeClass : "")}>
              Explore venues
            </NavLink>
          </div>
        </div>
        <div>
          <div className="border-primary/20 flex flex-col items-center gap-4 border-t pt-8 pb-4 md:flex-row md:justify-between">
            <p className="text-xs">&copy; 2026 Holidaze. All rights reserved</p>
            <div className="flex gap-4">
              <Link
                to="https://github.com/Torehirth"
                target="_blank"
                rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="lg"
                  className="hover:opacity-70 active:scale-95"
                />
              </Link>
              <Link
                to="https://www.linkedin.com/in/torehirth/"
                target="_blank"
                rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faSquareLinkedin}
                  size="lg"
                  className="hover:opacity-70 active:scale-95"
                />
              </Link>
              <Link
                to="https://www.instagram.com/torehirth/"
                target="_blank"
                rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="lg"
                  className="hover:opacity-70 active:scale-95"
                />
              </Link>
              <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="lg"
                  className="hover:opacity-70 active:scale-95"
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
