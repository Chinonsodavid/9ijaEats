import React from "react";
// import data from './Food'

const Mealitem = ({ data }) => {
  console.log(data);
  return (
    <>
      {!data
        ? "not faound"
        : data.map((item) => {
            return (
              <>
                <div className="w-full bg-gray-200  p-3 rounded-xl relative">
                  {/* IMG OVERLAY */}
                  <img
                    className="object-cover rounded-xl"
                    src={item.strMealThumb}
                    alt="#"
                  />

                  <div className=" flex flex-col items-center  gap-1">
                    <h1 className="text-3xl font-semibold ">{item.strMeal}</h1>
                    <p className="text-2xl">
                      <a href={item.strYoutube}>How to Cook?</a>
                    </p>
                    <p className="tracking-wide leading-7 mt-2 text-center">
                      {item.strInstructions}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
    </>
  );
};

export default Mealitem;
