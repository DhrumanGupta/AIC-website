import HeroImage from "@/../public/hero.png";
import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";

function Hero() {
  return (
    <div className="h-screen relative w-full">
      <div className="absolute w-full h-full bg-black"></div>
      <Image
        src={HeroImage}
        fill={true}
        alt="Ashoka University"
        className="object-cover opacity-35 z-10 blur-sm"
      />
      <div className="z-20 text-white w-full h-full px-8 absolute flex flex-col items-center md:items-start justify-center md:pl-32">
        <h1 className="font-extrabold text-6xl lg:text-7xl md:max-w-lg uppercase text-center md:text-left md:!leading-[1.1]">
          <span className="text-primary">Bodhi</span> Capital
        </h1>

        <h3 className="text-center mt-4 text-xl md:text-xl md:text-left lg:text-2xl lg:max-w-2xl font-medium">
          INDIA&apos;S FIRST UNDERGRADUATE INVESTMENT FUND
        </h3>
      </div>

      <a
        className="w-12 h-12 text-center text-white z-30 absolute left-1/2 -translate-x-1/2 bottom-0 mb-16"
        href="#start"
      >
        <IoMdArrowDropdown className="w-full h-full" />
      </a>
    </div>
  );
}

export default Hero;
