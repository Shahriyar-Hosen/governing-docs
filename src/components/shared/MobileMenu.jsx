/* eslint-disable react/prop-types */
import { nevItems } from "../../lib/db";
import { Logo } from "./Logo";

export const MobileMenu = ({ toggleMenu }) => {
  return (
    <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 overflow-y-auto p-6">
      <div className="flex justify-between items-center pb-6">
        <Logo />

        {/* Close Button */}
        <button
          className="self-end text-black text-2xl"
          onClick={toggleMenu}
          aria-label="Close Menu"
        >
          &times;
        </button>
      </div>

      {/* Menu Items */}
      <div className="space-y-4">
        {nevItems.map(({ href, label }, i) => (
          <a
            href={href}
            key={i}
            className="block text-lg text-accent hover:text-primary transition-colors duration-150"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
};
