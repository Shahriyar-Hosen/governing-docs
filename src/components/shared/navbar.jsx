import { useEffect, useState } from "react";
import { nevItems } from "../../lib/db";
import { Button, Container } from "../common";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    // Add or remove the 'no-scroll' class to the body to prevent background scrolling
    const bodyClass = document.body.classList;

    isMenuOpen ? bodyClass.add("no-scroll") : bodyClass.remove("no-scroll");

    // Cleanup when the component is unmounted or menu is closed
    return () => bodyClass.remove("no-scroll");
  }, [isMenuOpen]);

  return (
    <nav className="py-5 sm:py-8 xl:py-11 relative">
      <Container className="px-1.5 sm:px-5 xl:px-[26px]">
        <div className="flex justify-between items-center gap-2.5 px-2 pl-2.5 sm:px-5 xl:px-[30px] py-2 sm:py-3.5 xl:py-5 bg-white rounded-full">
          <Logo />

          {/* Navigation items for large screens */}
          <div className="hidden lg:flex justify-center items-center gap-3 xl:gap-4">
            {nevItems.map(({ href, label }, i) => (
              <a href={href} key={i}>
                <p className="text-accent text-sm xl:text-base hover:text-primary transition-colors duration-150">
                  {label}
                </p>
              </a>
            ))}
          </div>

          <div className="flex justify-center items-center gap-2.5">
            {/* Hamburger button for mobile */}
            <button
              className="lg:hidden block text-accent"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-black" />
                <span className="block w-6 h-0.5 bg-black" />
                <span className="block w-6 h-0.5 bg-black" />
              </div>
            </button>

            <Button>Get Started Today</Button>
          </div>
        </div>

        {/* Scrollable Mobile Menu */}
        {isMenuOpen && <MobileMenu toggleMenu={toggleMenu} />}
      </Container>
    </nav>
  );
};
