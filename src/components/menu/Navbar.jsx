// import { useRef, useState } from "react";
// import IconMenuOpen from "../icons/IconMenuOpen";
// import Navlink from "./Navlink";
// import IconMenuClose from "../icons/IconMenuClose";
// import logo from "../../assets/logo.svg";

// const Navbar = () => {
//   const [activeMenu, setActiveMenu] = useState(false);
//   const refNavbar = useRef(null);

//   const openMenuClass =
//     "absolute top-10 px-7 lg:px-14 py-1 flex items-center w-full lg:text-white";
//   const closeMenuClass =
//     "absolute lg:top-8 px-8 py-12 lg:py-0 bg-white text-black flex items-center w-full py-4 justify-between lg:justify-start lg:bg-transparent";

//   const handleClickMenu = () => {
//     setActiveMenu(!activeMenu);
//     refNavbar.current.querySelector('#navLinks').classList.toggle('hidden');
//     refNavbar.current.querySelector('#navLinks').classList.add('flex', 'gap-8');
//     refNavbar.current.querySelector('#navBrand').classList.toggle('hidden');
//   };

//   return (
//     <nav
//       ref={refNavbar}
//       className={activeMenu ? closeMenuClass : openMenuClass}
//     >
//       <button className="lg:hidden" onClick={handleClickMenu}>
//         {activeMenu ? <IconMenuClose /> : <IconMenuOpen />}
//       </button>
//       <a id="navBrand" className="flex items-center mx-auto pr-[20px] text-4xl text-white lg:mx-0 lg:pr-16 lg:block" href="#">
//         <img src={logo} alt="logo"/>
//       </a>
//       <div className="hidden lg:flex lg:items-center lg:gap-8 lg:text-white" id="navLinks">
//         <Navlink text="home" />
//         <Navlink text="shop" />
//         <Navlink text="about" />
//         <Navlink text="contact" />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useRef, useState } from "react";
import IconMenuOpen from "../icons/IconMenuOpen";
import Navlink from "./Navlink";
import IconMenuClose from "../icons/IconMenuClose";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const refNavbar = useRef(null);
  const [showOverlay, setShowOverlay] = useState(false);

  const openMenuClass =
    "absolute top-10 px-7 lg:px-14 py-1 flex items-center w-full lg:text-white";
  const closeMenuClass =
    "absolute lg:top-8 px-8 py-12 lg:py-0 bg-white text-black flex items-center w-full py-4 justify-between lg:justify-start lg:bg-transparent";

  const handleClickMenu = () => {
    setActiveMenu(!activeMenu);
    setShowOverlay(!showOverlay);
    refNavbar.current.querySelector("#navLinks").classList.toggle("hidden");
    refNavbar.current.querySelector("#navLinks").classList.add("flex", "gap-8");
    refNavbar.current.querySelector("#navBrand").classList.toggle("hidden");
  };

  return (
    <>
      <nav
        ref={refNavbar}
        className={`z-10 ${activeMenu ? closeMenuClass : openMenuClass} ${
          showOverlay ? "relative" : "static"
        }`}
      >
        <button className="lg:hidden" onClick={handleClickMenu}>
          {activeMenu ? <IconMenuClose /> : <IconMenuOpen />}
        </button>
        <a
          id="navBrand"
          className="flex items-center mx-auto pr-[20px] text-4xl text-white lg:mx-0 lg:pr-16 lg:block"
          href="#"
        >
          <img src={logo} alt="logo" />
        </a>
        <div
          className="hidden lg:flex lg:items-center lg:gap-8 lg:text-white"
          id="navLinks"
        >
          <Navlink text="home" />
          <Navlink text="shop" />
          <Navlink text="about" />
          <Navlink text="contact" />
        </div>
      </nav>
      {showOverlay && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50"
          onClick={handleClickMenu}
        ></div>
      )}
    </>
  );
};

export default Navbar;
