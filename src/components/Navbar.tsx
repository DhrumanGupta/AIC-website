"use client";

import Logo from "@/../public/logo.png";
import { cn } from "@/lib/cn";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type TNavLink = {
  href: string;
  label: string;
};

const LINKS: TNavLink[] = [
  { href: "/members", label: "Members" },
  // { href: "/pitches", label: "Pitches" },
  { href: "/resources", label: "Resources" },
  // {
  //   href: "/newsletters",
  //   label: "Newsletter",
  // },
];

const NavLink = ({
  href,
  label,
  scrolled,
}: TNavLink & { scrolled: boolean }) => (
  <Link
    href={href}
    className={cn(
      "my-auto font-semibold md:text-lg'",
      scrolled ? "text-black" : "text-white"
    )}
  >
    {label}
  </Link>
);

function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [scrolledPast, setScrolledPast] = useState(pathname !== "/");

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

      <div className="flex ml-auto gap-x-4 md:gap-x-16">
        {LINKS.map((link) => (
          <NavLink scrolled={isScrolled} key={link.href} {...link} />
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
