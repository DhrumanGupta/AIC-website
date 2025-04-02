"use client";

import Logo from "@/../public/logo.png";
import { cn } from "@/lib/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi"; // Add this import for better icons



type TNavLink = {
  href: string;
  label: string;
  children?: TNavLink[];
};

const LINKS: TNavLink[] = [
  { href: "/members", label: "Members" },
  // { href: "/pitches", label: "Pitches" },
  { href: "/resources", label: "Resources" },
  {
    href: "https://ashokainvestmentsclub.substack.com/archive",
    label: "Newsletter",
  },
  {
    href: "/alumni",
    label: "Alumni",
    children: [
      { href: "/alumni/", label: "Our Alumni" },
      { href: "/alumni/portfolio-managers", label: "Portfolio Managers" },
    ],
  },
];

const NavLink = ({
  href,
  label,
  children,
  scrolled,
  onClick,
}: TNavLink & { scrolled: boolean; onClick?: () => void }) => {
  const isExternal = href.startsWith("https://");
  return (
    <div className="relative group">
      {children && children.length > 0 ? (
        // If has children, render as a button/span instead of Link
        <span
          className={cn(
            "my-auto font-semibold md:text-lg flex items-center gap-1 cursor-pointer",
            scrolled ? "text-black" : "text-white"
          )}
        >
          {label}
          <HiChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
        </span>
      ) : (
        // If no children, render as a normal Link
        <Link
          href={href}
          className={cn(
            "my-auto font-semibold md:text-lg flex items-center gap-1",
            scrolled ? "text-black" : "text-white"
          )}
          onClick={onClick}
          {...(isExternal && {
            target: "_blank",
            rel: "noopener noreferrer",
          })}
        >
          {label}
        </Link>
      )}

      {children && children.length > 0 && (
        <div className="overflow-hidden absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 top-full left-0 bg-white shadow-lg rounded-lg min-w-[200px] transition-all duration-200 transform translate-y-2 group-hover:translate-y-[0.5rem] -translate-x-[25%]">
          {children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block p-4 text-black hover:bg-gray-100"
              onClick={onClick}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [scrolledPast, setScrolledPast] = useState(pathname !== "/");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    {}
  );
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
          "flex z-50 top-0 w-full sticky md:px-12 px-4 lg:px-24 items-center transition-all duration-500",
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

        <div className="hidden md:flex ml-auto gap-x-4 md:gap-x-8 items-center">
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
            className="fixed top-[12vh] left-0 w-full bg-white z-40 shadow-lg md:hidden"
          >
            <div className="flex flex-col items-center py-6 space-y-6">
              {LINKS.map((link) => (
                <div key={link.href} className="w-full text-center">
                  {link.children && link.children.length > 0 ? (
                    <>
                      <span
                        className="block py-2 text-black font-semibold flex items-center justify-center gap-1 cursor-pointer"
                        onClick={() =>
                          setOpenSections((prev) => ({
                            ...prev,
                            [link.href]: !prev[link.href],
                          }))
                        }
                      >
                        {link.label}
                        <HiChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform",
                            openSections[link.href] ? "rotate-180" : ""
                          )}
                        />
                      </span>
                      {openSections[link.href] && (
                        <div className="mt-2 bg-gray-50 py-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block py-2 text-black hover:bg-gray-100"
                              onClick={toggleMenu}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="block py-2 text-black font-semibold"
                      onClick={toggleMenu}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
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
