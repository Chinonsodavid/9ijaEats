import React, { useEffect, useState } from "react";
import Mealitem from "./Mealitem";

const Food = () => {
  const [url, setUrl] = useState(
    "https:www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  const [item, setItem] = useState();
  const [show, setShow] = useState(false);
  const [search, setSeach] = useState("");
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setItem(data.meals);
        setShow(true);
      });
  }, [url]);


  const searchbox=(evt) =>{
    if(evt.key='Enter')
  {
    setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
  }
  }
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl">Food recipes</h1>
        <div className=" bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-400px lg:w-[500px] mt-2">
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="#070606"
            stroke-linecap="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.364 3a7.364 7.364 0 1 0 0 14.727 7.364 7.364 0 0 0 0-14.727v0Z"></path>
            <path d="M15.857 15.86 21 21.001"></path>
          </svg>

          <input
            onChange={(e) => setSeach(e.target.value)}
            onKeyUp={searchbox}
            value={search}
            className="bg-transparent p-2 w-full  focus:outline-none "
            type="text"
            placeholder="search food"
          />
        </div>
      </div>

      <div className="max-w[1640px] h-full mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
        {show ? <Mealitem data={item} /> : "Not Found"}
      </div>
    </>
  );
};

export default Food;
