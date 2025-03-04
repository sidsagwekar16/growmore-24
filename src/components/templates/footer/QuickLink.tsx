import * as React from "react";
import { QuickLinkProps } from "./types";
import { Link } from "react-router-dom";

export const QuickLink: React.FC<QuickLinkProps> = ({ text, navLink }) => (
  <Link to={navLink} className="mt-3">{text}</Link>
);
