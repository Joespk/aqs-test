"use client";

import { IPicture } from "@/app/types/Dto";

interface Ipirtureprop {
  image: IPicture;
}

const Card = ({ image }: Ipirtureprop) => {
  return (
    <div className="w-[615px] h-[400px] overflow-hidden relative">
      <img className="inset-1 w-full h-full object-cover" src={image.url} />
    </div>
  );
};

export default Card;
