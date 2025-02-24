import React from "react";
import { Link } from "react-router-dom";

interface FooterLinkProps {
  text: string;
}

export const FooterLink: React.FC<FooterLinkProps> = ({ text }) => (
  <Link 
    to="/"
    className="text-right text-gray-600 hover:text-gray-900 transition-colors"
  >
    {text}
  </Link>
);
