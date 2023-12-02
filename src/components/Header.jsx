import React from "react";
import { IoMenu } from "react-icons/io5";

function Header() {
  return (
    <div className="flex justify-between items-center py-4 bg-black text-white w-full px-4 md:px-20">
      <section>
        <div className="w-14">
          <img
            src="./assets/home/logo-1.png"
            alt=""
            className="object-contain w-full"
          />
        </div>
      </section>
      <section className="flex justify-center items-center gap-4">
        <div className="md:hidden ">
          <IoMenu />
        </div>
        <div className="hidden md:flex justify-center items-center gap-4">
          <p>SERVICES</p>
          <p>WORK</p>
          <p>ABOUT</p>
          <p>CONTACT</p>
          <p className="text-red-700 border rounded border-red-500 px-4 py-1">
            Lest's Talk
          </p>
        </div>
      </section>
    </div>
  );
}

export default Header;
