"use client";

import Link from "next/link";

const Contactplace = () => {
  return (
    <div className="p-2 max-h-[40vh] flex flex-col gap-8 pl items-center my-[30vh]  relative  place-content-center w-full justify-around animated fadeInUp">
      <div className="flex flex-col justify-start shrink-0 mt-24 ">
        <h1 className="text-5xl text-center max-w-[600px] font-medium ">
          Let's work together.
        </h1>
        <Link
          href="/"
          className="text-5xl text-center max-w-[600px] font-medium text-[#7f7f7f] hover:text-gray-400"
        >
          Get in touch.
        </Link>
      </div>
    </div>
  );
};

export default Contactplace;
