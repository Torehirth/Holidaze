import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faSquareLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo/logo_small.svg";

export const Footer = () => {
  const activeClass = "font-bold";

  const socialLinkClass =
    "rounded-sm p-1 hover:opacity-70 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

  return (
    <footer className="bg-secondary w-full px-4 pt-8 md:pt-4">
      <div className="flex flex-col items-start pb-8 md:flex-row md:items-center md:justify-between">
        <Link to="/">
          <img src={logo} alt="Holidaze logo" className="max-h-8" />
        </Link>
        <nav
          aria-label="Footer navigation"
          className="flex flex-col gap-2 pt-8 md:flex-row md:gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? activeClass : ""} focus-visible:outline-primary rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4`
            }
            end>
            Home
          </NavLink>
          <NavLink
            to="/venues"
            className={({ isActive }) =>
              `${isActive ? activeClass : ""} focus-visible:outline-primary rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4`
            }
            end>
            Explore venues
          </NavLink>
        </nav>
      </div>
      <div className="border-primary/20 flex flex-col items-center gap-4 border-t pt-8 pb-4 md:flex-row md:justify-between">
        <p className="text-xs">&copy; 2026 Holidaze. All rights reserved.</p>
        <nav aria-label="Social media">
          <ul className="flex gap-4">
            <li>
              <a
                href="https://github.com/Torehirth"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Holidaze on GitHub, opens in a new tab"
                className={socialLinkClass}>
                <FontAwesomeIcon icon={faGithub} size="lg" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/torehirth/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Holidaze on LinkedIn, opens in a new tab"
                className={socialLinkClass}>
                <FontAwesomeIcon icon={faSquareLinkedin} size="lg" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/torehirth/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Holidaze on Instagram, opens in a new tab"
                className={socialLinkClass}>
                <FontAwesomeIcon icon={faInstagram} size="lg" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Holidaze on Facebook, opens in a new tab"
                className={socialLinkClass}>
                <FontAwesomeIcon icon={faFacebook} size="lg" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
