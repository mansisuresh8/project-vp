import React from "react";
import { IoMenu } from "react-icons/io5";

function Header() {
  return (
    <div className="flex justify-between items-center py-4 bg-black text-white w-full px-4 md:px-20 cursor-pointer">
      <section>
        <div className="w-14 ">
          <img
            src="./assets/home/logo-1.png"
            alt=""
            className="object-contain w-full"
          />
        </div>
      </section>
      <section className="flex justify-center items-center gap-4 cursor-pointer">
        <div className="md:hidden">
          <IoMenu />
        </div>
        <div className="hidden md:flex justify-center items-center gap-4">
          <p className="hover:text-orange-600">SERVICES</p>
          <p className="hover:text-orange-600">WORK</p>
          <p className="hover:text-orange-600">ABOUT</p>
          <p className="hover:text-orange-600">CONTACT</p>
          <p className="text-red-700 border rounded border-red-500 px-4 py-1 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
            Lest's Talk
          </p>
        </div>
      </section>
    </div>
  );
}

export default Header;
