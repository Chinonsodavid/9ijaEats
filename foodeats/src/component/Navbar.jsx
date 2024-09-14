import React, { useState } from "react";
// import AiOutlineMenu from "react-icons/ai";

const Navbar = () => {
  const [nav, setnav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items p-4 ">
      {/* LEST SIDE */}
      <div className="flex items-center">
        <div
          onClick={() => {
            setnav(!nav);
          }}
          className="cursor-pointer"
        >
          <svg
            width="32"
            height="32"
            fill="none"
            stroke="#070606"
            stroke-linecap="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3.75 7.5h16.5"></path>
            <path d="M3.75 12h16.5"></path>
            <path d="M3.75 16.5h16.5"></path>
          </svg>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:4xl px-2">
          9ija <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      {/* SEARCH INPUT */}

      <div className=" bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-400px lg:w-[500px]">
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
          className="bg-transparent p-2 w-full  focus:outline-none "
          type="text"
          placeholder="search food"
        />
      </div>
      {/* CARTBUTTON */}
      <button className="bg-black text-white  items-center rounded-full md:flex hidden ">
        <svg
          className="m-{2px}"
          width="20"
          height="20"
          fill="#ffffff"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.25 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
          <path d="M18.75 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
          <path d="M21.413 5.662a1.121 1.121 0 0 0-.87-.412H6.276L5.99 3.62A.75.75 0 0 0 5.25 3h-3a.75.75 0 0 0 0 1.5h2.37l2.141 12.13a.75.75 0 0 0 .739.62h12a.75.75 0 1 0 0-1.5H8.13l-.265-1.5h11.328a1.128 1.128 0 0 0 1.104-.904l1.35-6.75a1.124 1.124 0 0 0-.234-.934Z"></path>
        </svg>
        Cart
      </button>
      {/*MOBILE MENU*/}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-30 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* overlay */}
      {/* side-drawer */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[200px] h-screen bg-white z-30 duration-300"
            : "fixed top-0 left-[-100%] w-[200px] h-screen bg-white z-30 duration-300"
        }
      >
        <svg
        onClick={()=> setnav(!nav)}
          className="absolute right-4 top-4 cursor-pointer"
          width="30"
          height="30"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.25 17.25 6.75 6.75"></path>
          <path d="m17.25 6.75-10.5 10.5"></path>
        </svg>
        <h2 className="text-2xl  p-4">
          Best <span className="font-bold">Eats</span>
        </h2>

        {/* RESPONSIVE NAV */}
        <nav>
          <ul className="flex flex-col p-4 text-gray-700">
            <li className="text-xl p-1 flex">
              <svg
                className="mr-4"
                width="25"
                height="25"
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 17h6V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a1 1 0 0 0 1 1h1"></path>
                <path d="M22 16v-4a4 4 0 0 0-4-4h-2v9h5a1 1 0 0 0 1-1z"></path>
                <path d="M15 17a3 3 0 1 0 6 0h-6z"></path>
                <path d="M22 14h-2"></path>
                <path d="M7 14a3 3 0 1 0 0 6 3 3 0 1 0 0-6z"></path>
              </svg>
              orders
            </li>
            <li className="text-xl p-1 flex">
              <svg
                className="mr-4"
                width="25"
                height="25"
                fill="#000000"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m12 21-.421-.281c-2.006-1.34-4.543-2.853-6.422-5.078-1.98-2.344-2.93-4.75-2.907-7.36C2.28 5.37 4.616 3 7.457 3c2.255 0 3.755 1.313 4.544 2.26.788-.947 2.287-2.26 4.543-2.26 2.841 0 5.177 2.37 5.206 5.28.027 2.61-.923 5.016-2.906 7.36-1.879 2.226-4.416 3.74-6.422 5.079l-.421.281Z"></path>
              </svg>
              Favorites
            </li>
            <li className="text-xl p-1 flex">
              <svg
                className="mr-4"
                width="25"
                height="25"
                fill="#000000"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.476 4.874h15c.175 0 .35.011.524.033a3.094 3.094 0 0 0-3.633-2.604L4.031 4.409h-.014a3.094 3.094 0 0 0-1.925 1.225 4.105 4.105 0 0 1 2.384-.76Z"></path>
                <path d="M19.477 6h-15a3.003 3.003 0 0 0-3 3v9a3.003 3.003 0 0 0 3 3h15a3.003 3.003 0 0 0 3-3V9a3.004 3.004 0 0 0-3-3Zm-2.227 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"></path>
                <path d="M1.5 12.164V7.5c0-1.016.563-2.719 2.515-3.088 1.657-.31 3.298-.31 3.298-.31s1.078.75.187.75C6.61 4.852 6.633 6 7.5 6s0 1.102 0 1.102l-3.492 3.96L1.5 12.165Z"></path>
              </svg>
              Wallet
            </li>
            <li className="text-xl p-1 flex">
              <svg
                className="mr-4"
                width="25"
                height="25"
                fill="#000000"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 3c-4.969 0-9 4.031-9 9s4.031 9 9 9 9-4.031 9-9-4.031-9-9-9Zm-.281 14.25a.938.938 0 1 1 0-1.875.938.938 0 0 1 0 1.875Zm1.567-4.781c-.76.51-.864.977-.864 1.406a.656.656 0 0 1-1.313 0c0-1.027.473-1.844 1.445-2.497.904-.606 1.415-.99 1.415-1.836 0-.574-.328-1.01-1.008-1.334-.16-.076-.515-.15-.953-.145-.55.007-.976.139-1.305.403-.62.499-.672 1.042-.672 1.05a.656.656 0 1 1-1.312-.064c.005-.114.084-1.14 1.16-2.006.56-.449 1.27-.682 2.11-.693.595-.007 1.155.094 1.534.273 1.135.537 1.758 1.432 1.758 2.516 0 1.586-1.06 2.298-1.995 2.927Z"></path>
              </svg>
              Help
            </li>
            <li className="text-xl p-1 flex">
              <svg
                className="mr-4"
                width="25"
                height="25"
                fill="#000000"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.5.75 0 14.25l8.25 8.25L21.75 9V.75H13.5Zm3.75 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"></path>
                <path d="M22.5 3v6.75L10.169 22.083l1.177 1.167L24 10.5V3h-1.5Z"></path>
              </svg>
              Promotions
            </li>
            <li className="text-xl p-1 flex">
              <svg
                className="mr-4"
                width="25"
                height="25"
                fill="#000000"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.469 22.5a.75.75 0 0 1-.44-.14L12 17.99l-6.029 4.37a.75.75 0 0 1-1.15-.847l2.35-6.965-6.093-4.178A.75.75 0 0 1 1.5 9h7.518l2.268-6.981a.75.75 0 0 1 1.427 0l2.27 6.984H22.5a.75.75 0 0 1 .424 1.369l-6.096 4.176 2.35 6.963a.75.75 0 0 1-.71.99Z"></path>
              </svg>
              Best One
            </li>
            <li className="text-xl p-1 flex">
              <svg
                className="mr-4"
                width="25"
                height="25"
                fill="#000000"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.75 12c-.964 0-1.896-.43-2.625-1.211a4.683 4.683 0 0 1-1.219-2.86c-.082-1.154.27-2.215.991-2.988.72-.774 1.728-1.191 2.853-1.191 1.117 0 2.127.425 2.845 1.196.725.78 1.078 1.839.997 2.983-.079 1.083-.511 2.098-1.219 2.86-.728.78-1.659 1.211-2.623 1.211Z"></path>
                <path d="M21.93 20.25H9.572a1.299 1.299 0 0 1-1.032-.5 1.416 1.416 0 0 1-.246-1.21c.395-1.584 1.372-2.898 2.827-3.8 1.292-.8 2.936-1.24 4.63-1.24 1.727 0 3.328.422 4.627 1.221 1.458.897 2.437 2.219 2.83 3.823a1.418 1.418 0 0 1-.25 1.208 1.298 1.298 0 0 1-1.028.498Z"></path>
                <path d="M6.89 12.188c-1.65 0-3.1-1.534-3.234-3.42-.067-.965.234-1.858.843-2.513.603-.648 1.453-1.005 2.39-1.005.938 0 1.782.36 2.388 1.011.614.66.914 1.551.844 2.509-.135 1.884-1.584 3.418-3.231 3.418Z"></path>
                <path d="M9.968 13.66c-.824-.404-1.894-.605-3.077-.605-1.38 0-2.722.36-3.777 1.013-1.195.742-2 1.823-2.325 3.127a1.284 1.284 0 0 0 .225 1.095 1.187 1.187 0 0 0 .942.458h5.203a.375.375 0 0 0 .369-.308.806.806 0 0 1 .019-.088c.397-1.597 1.329-2.946 2.705-3.93a.375.375 0 0 0-.03-.627 3.81 3.81 0 0 0-.254-.136Z"></path>
              </svg>
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
