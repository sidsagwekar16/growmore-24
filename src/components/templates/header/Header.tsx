import * as React from "react";
import { SocialIcon } from "./SocialIcon.tsx";
import { ContactItem } from "./ContactItem.tsx";
import { NavigationItem } from "./NavigationItem.tsx";
import { Link } from "react-router-dom";

const socialIcons = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/0014938fb5fd4152961b843a94ff3203/e154722f993a050886bf3bfd7ac643d76ab0de78e6cd08a47831ba2c34d7c747?apiKey=0014938fb5fd4152961b843a94ff3203&",
    alt: "Social media icon 1",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/0014938fb5fd4152961b843a94ff3203/8788253a7494627ed4b6d34520d8ca3749dcfe61702d0e12bdfe433f5ae008bd?apiKey=0014938fb5fd4152961b843a94ff3203&",
    alt: "Social media icon 2",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/0014938fb5fd4152961b843a94ff3203/464f0f66782b9cc8e83d9061cdd128862f27f5b4c531d51253ec8303febfb2bd?apiKey=0014938fb5fd4152961b843a94ff3203&",
    alt: "Social media icon 3",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/0014938fb5fd4152961b843a94ff3203/54feb20dee86f974bda45498092a704443151d61f8d4693df146e8cf855bdad3?apiKey=0014938fb5fd4152961b843a94ff3203&",
    alt: "Social media icon 4",
  },
];

const contactItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/0014938fb5fd4152961b843a94ff3203/9019a0cfa555231c0f17362e913d128d38f715af23d726803440e0f29b4b511f?apiKey=0014938fb5fd4152961b843a94ff3203&",
    label: "Call anytime",
    value: "+91 556663737",
    href: "tel:+91556663737",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/0014938fb5fd4152961b843a94ff3203/f67ae43fdf13e59c10735e3351f31a2a7ee328e69c00a2d6a57473b9a7dc23c2?apiKey=0014938fb5fd4152961b843a94ff3203&",
    label: "Send email",
    value: "info@growmoreweb.com",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/0014938fb5fd4152961b843a94ff3203/cbf940412daea3efce3306a73d7b653f42b90b2db9f4d28064232bf96ded020f?apiKey=0014938fb5fd4152961b843a94ff3203&",
    label: "Dolor sit ame",
    value: "Lorem ipsum",
  },
];

const navigationItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/categories" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" }
];

export const Header: React.FC = () => {

  const [isOpen,setIsOpen] = React.useState(false)

  return (
    <header className="flex flex-col bg-white shadow-md w-screen overflow-x-hidden">
      <div className="w-screen flex h-[2px]">
        <div className="bg-blue-600 h-full w-[33%]"></div>
        <div className="bg-red-600 h-full w-[33%]"></div>
        <div className="bg-blue-600 h-full w-[33%]"></div>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-center items-center px-8 border-b w-full">
        <Link to='/'>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/0014938fb5fd4152961b843a94ff3203/998889ad56e68a6903a436c4461117a3a74997d246d8344238c85542850ca191?apiKey=0014938fb5fd4152961b843a94ff3203&"
          alt="Company logo"
          className="object-contain w-44 max-w-full mx-auto my-4 sm:mx-16"
        /></Link>

        <div className="hidden lg:flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-2">
          <div className=" flex">
            {socialIcons.map((icon, index) => (
              <SocialIcon key={index} {...icon} />
            ))}
          </div>
          <div className=" flex flex-wrap sm:overflow-hidden">
            {contactItems.map((item, index) => (
              <ContactItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>

      <div className=" flex  bg-white text-blue-950 border-sky-900 border-t-4 w-[97%] mx-auto sm:border-none">
        <button className=" sm:hidden tracking-wide text-center font-bold mx-auto text-md py-3" onClick={e=>setIsOpen(!isOpen)}>
          -- Menu --
        </button>
      </div>

      <nav
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col sm:flex sm:flex-row justify-center items-center w-full space-y-4 sm:space-y-0`}
      >
        <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 text-lg font-medium" onClick={e=>setIsOpen(false)}>
            {navigationItems.map((item, index) => (
              <NavigationItem key={index} {...item} />
            ))}
          </ul>
        
        <form className=" hidden relative mx-4 sm:flex-row items-center border rounded-full px-2 w-full sm:w-auto">
            <input
              type="search"
              placeholder="Search here"
              className="px-4 py-2 w-full sm:w-64 focus:outline-none border-none rounded-full"
            />
            <button type="submit" aria-label="Search" className="ml-2">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/0014938fb5fd4152961b843a94ff3203/938cf5b1181cf7a4abcb9c139ba77f3fc6f4d9cbbffc5a4d9fdeea523bb4c468?apiKey=0014938fb5fd4152961b843a94ff3203&"
                alt=""
                className="w-5 aspect-square"
              />
            </button>
          </form>
      </nav>

    </header>
  );
};

export default Header;
