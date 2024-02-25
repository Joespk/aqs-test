"use client";

import Card from "./components/Home/Card";
import Placehoder from "./components/Home/Placehorder";
import { IPicture } from "./types/Dto";
import useImage from "./็hook/useImage";

export default function Home() {
  const { images } = useImage();

  return (
    <div className="container flex flex-col gap-10 max-w-[1400px] items-center">
      <Placehoder />
      <div className="grid grid-cols-2 gap-10">
        {images &&
          images.map((image: IPicture) => (
            <Card key={image.id} image={image} />
          ))}
      </div>
    </div>
  );
}
