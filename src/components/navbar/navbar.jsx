import Logo from "../../Logo.svg";
import "./Navbar.css";
import React, { useState } from "react";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Projects", link: "/" },
    { name: "Blogs", link: "/" },
    { name: "Contact", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="railway z-[100] shadow-md w-full fixed top-0 left-0 bg-custom-dark-blue">
      <div className="md:flex container mx-auto items-center justify-between bg-red py-4 md:px-10 px-7 bg-custom-dark-blue container mx-auto">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center  
      text-gray-800"
        >
          <div className="brand flex items-center justify-center gap-x-4">
            <img src={Logo} alt="My SVG" className="xl:w-7 lg:w-6 md:w-5" />
            <span className="brand_name font-medium">Aβ. Rai</span>
          </div>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`bg-custom-dark-blue md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="hover:text-sky-400 transition-transform duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// import Logo from "../../Logo.svg";
// import "./Navbar.css";
// import { useState } from "react";

// const Navbar = () => {
//   return (
//     <div className="shadow-md w-full fixed top-0 left-0">
//       <div className="md:flex bg-black py-4">
//         <div className="brand flex items-center justify-center gap-x-4">
//           <img src={Logo} alt="My SVG" className="xl:w-8 lg:w-6 md:w-5" />
//           <span className="brand_name font-medium">Aβ. Rai</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Navbar = () => {
//   const [showNav, setShowNav] = useState(false);

//   const toggleNavItems = () => {
//     setShowNav(!showNav);
//   };

//   return (
//     <nav className="bg-black railway flex items-center justify-between container mx-auto py-6 xl:text-2xl lg:px-8 lg:text-lg md:text-base">
//   <div className="brand flex items-center justify-center gap-x-4">
//     <img src={Logo} alt="My SVG" className="xl:w-8 lg:w-6 md:w-5" />
//     <span className="brand_name font-medium">Aβ. Rai</span>
//   </div>
//       <div className="nav-elements">
//         <ul className="flex items-center justify-center gap-x-10 font-normal">
//           <li>
//             <a href="#" className="hover:text-sky-500 hover:font-bold">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-sky-500 hover:font-bold">
//               About
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-sky-500 hover:font-bold">
//               Projects
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-sky-500 hover:font-bold">
//               Blogs
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-sky-500 hover:font-bold">
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

export default Navbar;
