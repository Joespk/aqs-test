"use client";

import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/types";

const Navbar = () => {
  const activeLink = useSelector(
    (state: RootState) => state.activeLink.activeLink
  ); // Use root state type
  const dispatch = useDispatch();

  const handleLinkClick = (path: string) => {
    dispatch({ type: "setActiveLink", payload: path });
  };

  return (
    <nav className="container justify-center mx-auto py-4">
      <div className="rounded-full bg-[#e8e5e480] flex justify-between mx-auto gap-2 max-w-[300px] p-1 ">
        <Link
          href="/"
          onClick={() => handleLinkClick("/")}
          className={`max-h-10 flex justify-center p-4 items-center ${
            activeLink === "/" && "bg-blue-500"
          } font-normal no-underline `}
        >
          Home
        </Link>
        <Link
          href="/profile"
          onClick={() => handleLinkClick("/profile")}
          className={`max-h-10 flex justify-center p-4 items-center ${
            activeLink === "/profile" && "bg-blue-500"
          } font-normal no-underline `}
        >
          Profile
        </Link>
        <Link
          href="/contact"
          onClick={() => handleLinkClick("/contact")}
          className={`max-h-10 flex justify-center p-4 items-center ${
            activeLink === "/contact" && "bg-blue-500"
          } font-normal no-underline `}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
