import { cn } from "@/lib/cn";
import React from "react";

type TTypography = {
  className?: string;
  children?: React.ReactNode;
};

type THeader = TTypography;

export const Header: React.FC<THeader> = ({ className, children }) => {
  return (
    <h2
      className={cn(
        "font-semibold text-2xl md:text-3xl text-center my-2",
        className
      )}
    >
      {children}
    </h2>
  );
};
