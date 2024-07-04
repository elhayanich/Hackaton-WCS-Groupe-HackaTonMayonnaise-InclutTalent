import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <p className="blue-gradient_text"></p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black-500"
          }
        >
          About
        </NavLink>

        <NavLink
          to="projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black-500"
          }
        >
          projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
