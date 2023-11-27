import React from "react";
import { IoMail } from "react-icons/io5";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-black flex justify-center items-center ">
      <section className="flex justify-center items-center py-20 flex-col w-full px-20">
        <section className=" bg-white flex justify-between items-center w-full border shadow-xl rounded-xl px-10">
          <div className="py-20">
            <div className="">
              <p className="text-4xl ">
                Ready to setup your <br /> Brand to
                <span className="font-bold"> Next Level?</span>
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-10">
            <div className="flex justify-start items-center bg-black rounded-md border-2 border-black px-4 py-1">
              <div className="flex justify-center items-center">
                <div className="w-6 ms-4">
                  <img src="./assets/home/icon-5.png" alt="" />
                </div>
                <button className="flex justify-center items-center text-white px-4 py-2 text-lg">
                  Book A Call
                </button>
              </div>
            </div>
            <div className="">
              <button className="text-black-700  rounded-md border-2 border-black px-8 py-3">
                Contact Me
              </button>
            </div>
          </div>
        </section>

        <section className="w-full my-8 flex justify-between items-center">
          <div className="flex justify-start items-center w-28">
            <img
              src="./assets/home/logo-2.png"
              alt=""
              className="object-contain w-full"
            />
            <div className="">
              <p className="text-white">
                Upscal
                <span className="">
                  {" "}
                  <img src="./assets/home/icon-7.png" alt="" className="w-4" />
                </span>{" "}
                ng <span className="text-orange-500"> ideas</span>{" "}
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="text-orange-600 me-2">
              <IoMail />
            </div>
            <div>
              <p className="text-orange-600">Patelvishesh089@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-2 text-2xl text-white">
            <div className="">
              <FaFacebookSquare />
            </div>
            <div className="">
              <FaInstagram />
            </div>
            <div className="">
              <FaTwitter />
            </div>
            <div className="">
              <FaLinkedin />
            </div>
          </div>
        </section>
        <section className="border-t-2 border-white w-full">
          <div className="flex justify-center items-center py-10">
            <p className="text-white">Developed with 🧡 by Aman Kashyap</p>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Footer;
