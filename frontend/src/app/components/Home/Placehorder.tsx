"use client";

const Placehoder = () => {
  return (
    <div className="p-2 max-h-[50vh] flex flex-col gap-8 pl items-center mt-20  mb-20 mt- relative  place-content-center w-full justify-around animated fadeInUp">
      <div className="flex flex-col justify-start shrink-0 mt-24 ">
        <h1 className={`text-5xl text-center max-w-[600px] font-medium `}>
          A brand and product designer working with clients globally
        </h1>
      </div>
      <div className="flex flex-row items-center gap-2.5 text-sm font-light my-">
        <p>Expertise</p>
        <div className="rounded-full bg-[#e8e5e480]  p-2 z-10 ">
          <p className="text-black">Branding</p>
        </div>
        <div className="rounded-full bg-[#e8e5e480]  p-2 z-10">
          <p className="text-black">Product</p>
        </div>
        <div className="rounded-full bg-[#e8e5e480]   p-2 z-10">
          <p className="text-black">Design Systems</p>
        </div>
      </div>
    </div>
  );
};

export default Placehoder;
