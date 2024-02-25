"use client";

import { IPicture } from "@/app/types/Dto";
import { useState } from "react";
import arrowright from "@/app/asset/rightup-arrow.svg";
import Image from "next/image";

interface Ipirtureprop {
  image: IPicture;
}

const Card = ({ image }: Ipirtureprop) => {
  const [isHovered, setisHovered] = useState<boolean>(false);

  return (
    <div
      className="w-[615px] h-[400px] overflow-hidden relative"
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
    >
      <img
        className={`inset-1 w-full h-full object-cover transition-opacity ${
          isHovered ? "blur-lg brightness-50" : "blur-none "
        }`}
        src={image.url}
      />
      {isHovered && (
        <div className="absolute inset-0 left-[90%] top-[5%] animated fadeInUp">
          <button className="bg-white p-3 rounded-full shadow-md ">
            <Image src={arrowright} alt="rightarrow" width={20} height={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
