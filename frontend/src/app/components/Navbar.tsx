import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="container justify-center mx-auto py-4">
      <div className="rounded-full bg-[#e8e5e480] flex justify-between mx-auto gap-2 max-w-[300px] p-1 ">
        <Link
          href="/"
          className="max-h-10 flex justify-center p-4 items-center font-normal no-underline "
        >
          Home
        </Link>
        <Link
          href="/"
          className="max-h-10 flex justify-center p-4 items-center no-underline"
        >
          Profile
        </Link>
        <Link
          href="/"
          className="max-h-10 flex justify-center p-4 items-center no-underline "
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
