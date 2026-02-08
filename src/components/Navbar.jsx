import React from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../data";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <NavLink
          to="/"
          className="text-2xl font-display font-bold text-slate-900 tracking-tight"
        >
          BHAKAT <span className="text-amber-600">HARDWARE</span>
        </NavLink>
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `text-sm font-bold uppercase tracking-widest transition-colors ${isActive ? "text-amber-600" : "text-slate-500 hover:text-amber-600"}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
