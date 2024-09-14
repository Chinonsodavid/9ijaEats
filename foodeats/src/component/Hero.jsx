import React from "react";
import jolof from "../img/jollof.png";

const Hero = () => {
  return (
    <div className="max-w[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/* OVERLAY */}
        <div className="absolute bg-black/80 w-full h-full text-gray-100 max-h[500px] flex flex-col justify-center">
          <h1 className="p-4 text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold ">
            The <span className="text-orange-500" >Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl font-bold">
             <span className="text-orange-500"> Food</span> Nutrition
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover "
          src={jolof}
          alt="#"
        />
      </div>
    </div>
  );
};

export default Hero;
