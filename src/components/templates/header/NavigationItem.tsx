import * as React from "react";
import { NavigationItemProps } from "./types";
import { Link, useLocation } from "react-router-dom";

export const NavigationItem: React.FC<NavigationItemProps> = ({
  label,
  path,
}) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <div className="self-stretch py-6 my-auto mx-auto leading-loose">
      <Link
        to={path}
        className={`flex gap-1 font-manrope transition-transform duration-200 hover:scale-105 ${
          isActive ? "font-bold text-black" : "text-neutral-500"
        }`}
      >
        {label}
      </Link>
    </div>
  );
};

export default NavigationItem;
