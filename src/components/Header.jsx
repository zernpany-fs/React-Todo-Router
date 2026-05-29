import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="bg-blue-300 flex justify-between px-4 py-2">
      <NavLink to="/" className="bg-blue-400">
        LOGO
      </NavLink>
      <nav className="bg-blue-400 flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "font-bold" : "text-gray-600"
          }
        >
          List
        </NavLink>
        <NavLink
          to="/create"
          className={({ isActive }) =>
            isActive ? "font-bold" : "text-gray-600"
          }
        >
          Create
        </NavLink>
      </nav>
    </header>
  );
}
