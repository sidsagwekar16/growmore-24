import * as React from "react";
import { NavigationItemProps } from "./types";
import { Link } from "react-router-dom";

export const NavigationItem: React.FC<NavigationItemProps> = ({
  label,
  path,
  hasDropdown,
}) => (
  <div className="self-stretch py-6 my-auto mx-auto font-semibold leading-loose text-neutral-500">
    <Link to={path} className="flex gap-1">
      {label}
      {hasDropdown && (
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/0014938fb5fd4152961b843a94ff3203/fc3c43ce018e44c78a4e0e8b3568680387f2323de36f3c77690c6a9828d5356a?apiKey=0014938fb5fd4152961b843a94ff3203&"
          alt=""
          className="object-contain shrink-0 self-start aspect-[0.19] w-[7px]"
        />
      )}
    </Link>
  </div>
);

export default NavigationItem;