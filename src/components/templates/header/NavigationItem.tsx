import * as React from "react";
import { NavigationItemProps } from "./types";
import { Link } from "react-router-dom";

export const NavigationItem: React.FC<NavigationItemProps> = ({
  label,
  path,
}) => 
  (
  <div className="self-stretch py-6 my-auto mx-auto leading-loose text-neutral-500">
    <Link to={path} className="flex gap-1 font-manrope">
      {label}
    </Link>
  </div>
);

export default NavigationItem;