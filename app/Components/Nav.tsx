import { useState } from "react";
import { NavLink } from "@remix-run/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About Me", to: "/About" },
    { name: "Projects", to: "/Projects" },
    { name: "Experience", to: "/Experience" },
  ];

  return (
    <nav className="mt-4">
      {/* desktop Nav bar */}
      <div className="hidden md:flex justify-center">
        <div className="bg-red-100 rounded-full p-4 shadow-md w-3/4">
          <div className="flex justify-around">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-800 hover:text-blue-600"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* phone Nav bar */}
      <div className="md:hidden">
        {/* hamburger menu button */}
        {!isOpen && (
          <div className="flex justify-between items-center px-4">
            <button
              onClick={() => setIsOpen(true)}
              type="button"
              className="text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        )}
        {/* phone Menu */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-red-100 flex flex-col items-center justify-center animate-slide-down z-50"
            style={{ animationDuration: "300ms" }}
          >
            <button
              onClick={() => setIsOpen(false)}
              type="button"
              className="absolute top-4 right-4 text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-semibold text-2xl"
                      : "text-gray-800 hover:text-blue-600 text-2xl"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
