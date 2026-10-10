
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <NavLink to="/" end className="brand" onClick={() => setOpen(false)}>
        Studio
      </NavLink>

      <button
        className="menu"
        aria-expanded={open}
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
      </button>

      <nav className={open ? "links open" : "links"}>
        {links.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) => (isActive ? "link active" : "link")}
            onClick={() => setOpen(false)}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}