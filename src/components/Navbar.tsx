"use client";

import Logo from "@/../public/logo.png";
import { cn } from "@/lib/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // Add this import for better icons

type TNavLink = {
  href: string;
  label: string;
};

const LINKS: TNavLink[] = [
  { href: "/members", label: "Members" },
  // { href: "/pitches", label: "Pitches" },
  { href: "/resources", label: "Resources" },
  {
    href: "/newsletters",
    label: "Newsletter",
  },
];

const NavLink = ({
  href,
  label,
  scrolled,
  onClick,
}: TNavLink & { scrolled: boolean; onClick?: () => void }) => (
  <Link
    href={href}
    className={cn(
      "my-auto font-semibold md:text-lg",
      scrolled ? "text-black" : "text-white"
    )}
    onClick={onClick}
  >
    {label}
  </Link>
);
function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [scrolledPast, setScrolledPast] = useState(pathname !== "/");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if (!pathname || pathname !== "/") {
      setScrolledPast(true);
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      const scrolled = window.scrollY > window.innerHeight - 30; // 100vh
      const scrolledPast = window.scrollY > window.innerHeight; // 100vh

      setScrolledPast(scrolledPast);

      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    setIsScrolled(false);
    setScrolledPast(false);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <>
      <nav
        className={cn(
          "flex z-50 top-0 w-full sticky md:px-16 px-4 lg:px-24 items-center transition-all duration-500",
          scrolledPast ? "h-[12vh] bg-white" : "h-[12vh] backdrop-blur-sm"
        )}
      >
        <Link href="/" className="flex justify-center">
          <div className=" w-10 h-10 md:w-12 md:h-12 relative">
            <Image
              src={Logo}
              alt="Bodhi Capital Logo"
              fill={true}
              className="object-contain"
            />
          </div>

          <h3
            className={cn(
              "ml-4 my-auto hidden opacity-0 font-extrabold uppercase text-xl lg:text-2xl duration-100 text-black",
              isScrolled && "md:opacity-100 md:block"
            )}
          >
            <span className="text-primary">Bodhi&nbsp;</span> Capital
          </h3>
        </Link>

        <div className="hidden md:flex ml-auto gap-x-4 md:gap-x-16 items-center">
          {LINKS.map((link) => (
            <NavLink scrolled={isScrolled} key={link.href} {...link} />
          ))}

          <Link
            href="https://forms.gle/vyjJkzL236AcJf3j6"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "px-4 py-2 rounded-md font-semibold text-white bg-primary hover:bg-primary-dark transition-colors",
              isScrolled ? "bg-primary" : "bg-white/20 hover:bg-white/30"
            )}
          >
            Join Now
          </Link>
        </div>

        <button
          className="md:hidden ml-auto text-2xl p-2 rounded-md transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <HiX className={isScrolled ? "text-black" : "text-white"} />
          ) : (
            <HiMenu className={isScrolled ? "text-black" : "text-white"} />
          )}
        </button>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[80px] left-0 w-full bg-white z-40 shadow-lg md:hidden"
          >
            <div className="flex flex-col items-center py-6 space-y-6">
              {LINKS.map((link) => (
                <NavLink
                  scrolled={true}
                  key={link.href}
                  {...link}
                  onClick={toggleMenu}
                />
              ))}
              <Link
                href="https://forms.gle/vyjJkzL236AcJf3j6"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-md font-semibold text-white bg-primary hover:bg-primary-dark transition-colors"
                onClick={toggleMenu}
              >
                Join Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
