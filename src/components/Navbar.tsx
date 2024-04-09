"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/../public/logo.png";
import Image from "next/image";

type TNavLink = {
  href: string;
  label: string;
};

const LINKS: TNavLink[] = [
  { href: "/members", label: "Members" },
  { href: "/pitches", label: "Pitches" },
  { href: "/resources", label: "Resources" },
];

const NavLink = ({
  href,
  label,
  scrolled,
}: TNavLink & { scrolled: boolean }) => (
  <Link
    href={href}
    className={cn(
      "my-auto font-semibold md:text-lg",
      scrolled ? "text-black" : "text-white"
    )}
  >
    {label}
  </Link>
);

function Navbar() {
  // const { mode, toggle } = useMode();
  const [isScrolled, setIsScrolled] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname || pathname !== "/") {
      return;
    }

    const handleScroll = () => {
      const scrolled = window.scrollY > window.innerHeight - 25; // 100vh
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <nav className="flex z-50 top-0 p-6 w-full sticky backdrop-blur-sm md:px-20 lg:px-32">
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
            "ml-4 my-auto opacity-0 font-extrabold uppercase text-xl lg:text-2xl pt-2 duration-100",
            isScrolled && "md:opacity-100"
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
