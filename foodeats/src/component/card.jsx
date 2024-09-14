import React from "react";

const Card = () => {
  return (
    <>
   <div className="text-3xl align-middle flex justify-center mt-[20px] ">Hot Searches</div>
  
    <div className="max-w[1640px] h-full mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">

      {/* CARDS */}
      <div className="rounded-xl relative ">
        {/* overlay */}
        <div className=" absolute bg-black/70 text-gray-200 h-full max-h-[200px] w-full rounded-xl px-3 py-4">
          <h1 className="text-2xl font-bold ">9ija Jollof Rice </h1>
          <p className="p-2"> Trough 8/26 </p>
          <button className="bg-white : text-black mt-5 items-center rounded-full md:my-2">
            How to Cook?
          </button>
        </div>
        <img
          className="rounded-xl w-full max-h-[160px] md:max-h[200]: object-cover "
          src="https://i.pinimg.com/736x/4d/cb/30/4dcb302abc4a5d65fffc9b8e777751ea.jpg"
          alt=""
        />
      </div>

      <div className="rounded-xl relative ">
        {/* overlay */}
        <div className=" absolute bg-black/70 text-gray-200 h-full max-h-[200px] w-full rounded-xl px-3 py-5">
          <h1 className="text-2xl font-bold "> Rich egusi soup</h1>
          <p className="p-2"> Added daily </p>
          <button className="bg-white : text-black mt-5  items-center rounded-full md:mt-3">
          How to Cook?
          </button>
        </div>
        <img
          className="rounded-xl w-full max-h-[160px] md:max-h[200]: object-cover "
          src="https://i.pinimg.com/736x/4d/cb/30/4dcb302abc4a5d65fffc9b8e777751ea.jpg"
          alt=""
        />
      </div>
      <div className="rounded-xl relative ">
        {/* overlay */}
        <div className=" absolute bg-black/70 text-gray-200 h-full max-h-[200px] w-full rounded-xl px-3 py-5">
          <h1 className="text-2xl font-bold "> Beans</h1>
          <p className="p-2">Tasty treats </p>
          <button className="bg-white : text-black mt-5 items-center rounded-full md:mt-3">
          How to Cook?
          </button>
        </div>
        <img
          className="rounded-xl w-full max-h-[160px] md:max-h[200]: object-cover "
          src="https://i.pinimg.com/736x/4d/cb/30/4dcb302abc4a5d65fffc9b8e777751ea.jpg"
          alt=""
        />
      </div>
    </div>
    </>
  );
};

export default Card;
