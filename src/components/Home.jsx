import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

function Home() {
  return (
    <div className="">
      {/* hero section */}

      <section className=" bg-black flex justify-between items-center py-4 px-4 md:px-20 relative flex-col md:flex-row">
        <div className="md:py-16 py-2">
          <div className=" w-full px-4 py-6 flex flex-col justify-center items-start">
            <div className="flex justify-between items-center text-lg text-red-700 border rounded border-red-500 px-4 py-1 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
              <div>
                <GoDotFill />
              </div>
              <p className="">Hey, I&apos;m Vishesh ヅ</p>
            </div>
          </div>
          <div className="my-8">
            <p className="text-white md:text-5xl text-3xl">
              I Create Superior Visual Design for Web, App, Sass & Social Media
            </p>
          </div>
          <div>
            <p className="text-orange-700 text-xl">
              To Upscale Ideas into Unshakable
              <span className="font-bold"> Businesses</span>
            </p>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <img
            src="./assets/home/photo-1.png"
            alt=""
            className="object-contain"
          />
        </div>
        <div className="cursor-pointer flex justify-between items-start">
          <div className="absolute bottom-10 end-10 text-red-500">
            <div className="absolute mr-28 py-1 w-full">
              <img
                src="./assets/home/icon-8.png"
                alt=""
                className="object-contain animate-bounce"
              />
            </div>
            <p className="text-white mx-10 "> MY SERVICES</p>
          </div>
        </div>
      </section>

      {/* Worked with 12+ Global Enterprises */}

      <section className="my-14  md:flex-row">
        <div className="text-center text-xl">
          <p>
            Worked with
            <span className="font-bold"> 12+</span> Global{" "}
            <span className="font-bold"> Enterprises</span>
          </p>
        </div>
        <div className="flex justify-center items-center gap-8 md:gap-20 my-8 hidden-scrollbar overflow-x-auto whitespace-nowrap ">
          <p>Frikly</p>
          <p>Decibel</p>
          <p>Writingo</p>
          <p>CRTD Technologies</p>
          <p>Hashcase</p>
          <p>Icon 1</p>
        </div>
      </section>

      {/* Vedio Section */}

      <section className="bg-black flex justify-center items-center rounded md:mx-20 ">
        <div className="">
          <p className="md:text-4xl text-1xl text-white text-center md:py-20 py-2">
            Convey your brand story through unforgettable visual design. <br />
            Captivate your audience and retain engagement with <br />
            sleek
            <span className="font-bold text-orange-700"> UI/UX</span>.
          </p>
          <div className="flex justify-center items-center w-full ">
            <video
              src="./assets/home/video-1.mp4"
              autoPlay
              loop
              muted
              className="w-full md:px-52 md:py-20 px-70 py-28"
            ></video>
          </div>
        </div>
      </section>

      {/* Designs that tell your story. */}

      <section className="my-10">
        <div>
          <p className="text-3xl text-center">
            <span className="font-bold">Designs</span> that tell your
            <span className="text-orange-600"> story</span>.
          </p>
          <p className="text-xl text-center my-4">
            Let our designs weave the magic of storytelling, bringing your
            <br />
            brand to life in vibrant colors and captivating visuals.
          </p>
        </div>
        <div className="flex justify-center items-center my-5 flex-col md:flex-row gap-4 md:gap-0">
          <button className="text-black-700 rounded-full border-2 border-black px-4 py-1">
            Branding
          </button>
          <div className="h-[2px] bg-black w-20 "></div>
          <button className="text-black-700 rounded-full  border-2 border-black  px-4 py-1">
            Web Design
          </button>
          <div className="h-[2px] bg-black w-20 "></div>
          <button className="text-black-700 rounded-full  border-2 border-black  px-4 py-1">
            App Design
          </button>
          <div className="h-[2px] bg-black w-20 "></div>
          <button className="text-black-700 rounded-full  border-2 border-black  px-4 py-1">
            SASS Design
          </button>
        </div>
      </section>

      <section className="flex justify-center items-center md:mx-40 px-4  border shadow-xl rounded-xl flex-col md:flex-row ">
        <div className="w-full">
          <img
            src="./assets/home/photo-2.png"
            alt=""
            className="object-contain w-full"
          />
        </div>
        <div className="mx-8 my-4">
          <p className="text-2xl font-bold ">Branding & Guidelines</p>
          <p className="py-3 text-xl">
            Welcome to the world of{" "}
            <span className="text-orange-600 font-bold">
              seamless branding!
            </span>{" "}
          </p>
          <p className="text-xl">
            Compelling brand identities and cohesive design systems for your
            digital products. Branding is included with all packages!
          </p>
          <div className="grid grid-rows-3 gap-4 py-6">
            <div className="border rounded-full flex justify-start items-center m text-lg px-4 py-2">
              <div className="w-10 me-4">
                <img src="./assets/home/icon-2.png" alt="" className="w-full" />
              </div>
              <p>Awesome visual Identities & logo(s)</p>
            </div>
            <div className="border rounded-full flex justify-start items-center m text-lg px-4 py-2">
              <div className="w-10 me-4">
                <img src="./assets/home/icon-2.png" alt="" className="w-full" />
              </div>
              <p>Brand guidelines & style guides</p>
            </div>
            <div className="border rounded-full flex justify-start items-center m text-lg px-4 py-2  md:justify-items-start">
              <div className="w-10 me-4">
                <img src="./assets/home/icon-2.png" alt="" className="w-full" />
              </div>
              <p>Brand collateral + social media</p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Projects */}

      <section className="my-16 bg-[url('./project-vp/assets/home/bg-explore.png')] bg-cover h-[90dvh] bg-no-repeat	bg-center	">
        <div className="bg-black w-full h-full opacity-70 flex justify-center items-center py-8">
          <div className="text-white">
            <p className="text-5xl font-bold text-center">Explore Projects </p>
            <p className="my-8 md:text-center text-center">
              I create visual design that elevate your brand and <br /> attract
              more customers.
            </p>
            <div className="flex justify-center items-center">
              <button className="flex justify-center items-center bg-white text-black rounded-full px-8 py-2 text-lg">
                Check Now
                <div className="w-10 ms-4">
                  <img src="./assets/home/icon-2.png" alt="" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Check out  */}

      <section className="flex flex-col justify-center items-center md:px-20 px-8 py-4 gap-x-10 ">
        <div className="md:my-8 my-4">
          <p className="text-center md:text-3xl text-lg">
            Check out what <span className="font-semibold"> our clients</span>{" "}
            have to say about{" "}
            <span className="text-orange-600 font-semibold"> working</span> with{" "}
            <br /> <span className="font-semibold"> me and my team.</span>
          </p>
        </div>
        <section className="grid md:grid-cols-3 gap-8 sm:grid-cols-2 grid-cols-1 ">
          <div className="flex justify-start items-start flex-col border shadow-md rounded-md p-4">
            <img src="./assets/home/icon-3.png" alt="" />
            <p className="font-semibold">
              Exceptional web design that exceeded our expectations
            </p>
            <div>
              <p className="py-2">
                Our website redesign surpassed our expectations. Aiko's
                attention to detail and creativity resulted in a visually
                stunning and user-friendly site.
              </p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className=" line-clamp-3">
                <img src="./assets/home/icon-4.png" alt="" />
              </div>
              <div className="">
                <p className="font-bold">John Smith</p>
                <p>ABC Company</p>
              </div>
            </div>
          </div>

          <div className="flex justify-start items-start flex-col border shadow-md rounded-md p-4">
            <img src="./assets/home/icon-3.png" alt="" />
            <p className="font-semibold">
              Exceptional web design that exceeded our expectations
            </p>
            <div>
              <p className="py-2">
                Our website redesign surpassed our expectations. Aiko's
                attention to detail and creativity resulted in a visually
                stunning and user-friendly site.
              </p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className=" line-clamp-3">
                <img src="./assets/home/icon-4.png" alt="" />
              </div>
              <div className="">
                <p className="font-bold">John Smith</p>
                <p>ABC Company</p>
              </div>
            </div>
          </div>

          <div className="flex justify-start items-start flex-col border shadow-md rounded-md p-4">
            <img src="./assets/home/icon-3.png" alt="" />
            <p className="font-semibold">
              Exceptional web design that exceeded our expectations
            </p>
            <div>
              <p className="py-2">
                Our website redesign surpassed our expectations. Aiko's
                attention to detail and creativity resulted in a visually
                stunning and user-friendly site.
              </p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className=" line-clamp-3">
                <img src="./assets/home/icon-4.png" alt="" />
              </div>
              <div className="">
                <p className="font-bold">John Smith</p>
                <p>ABC Company</p>
              </div>
            </div>
          </div>

          <div className="flex justify-start items-start flex-col border shadow-md rounded-md p-4">
            <img src="./assets/home/icon-3.png" alt="" />
            <p className="font-semibold">
              Exceptional web design that exceeded our expectations
            </p>
            <div>
              <p className="py-2">
                Our website redesign surpassed our expectations. Aiko's
                attention to detail and creativity resulted in a visually
                stunning and user-friendly site.
              </p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className=" line-clamp-3">
                <img src="./assets/home/icon-4.png" alt="" />
              </div>
              <div className="">
                <p className="font-bold">John Smith</p>
                <p>ABC Company</p>
              </div>
            </div>
          </div>

          <div className="flex justify-start items-start flex-col border shadow-md rounded-md p-4">
            <img src="./assets/home/icon-3.png" alt="" />
            <p className="font-semibold">
              Exceptional web design that exceeded our expectations
            </p>
            <div>
              <p className="py-2">
                Our website redesign surpassed our expectations. Aiko's
                attention to detail and creativity resulted in a visually
                stunning and user-friendly site.
              </p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className=" line-clamp-3">
                <img src="./assets/home/icon-4.png" alt="" />
              </div>
              <div className="">
                <p className="font-bold">John Smith</p>
                <p>ABC Company</p>
              </div>
            </div>
          </div>

          <div className="flex justify-start items-start flex-col border shadow-md rounded-md p-4">
            <img src="./assets/home/icon-3.png" alt="" />
            <p className="font-semibold">
              Exceptional web design that exceeded our expectations
            </p>
            <div>
              <p className="py-2">
                Our website redesign surpassed our expectations. Aiko's
                attention to detail and creativity resulted in a visually
                stunning and user-friendly site.
              </p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className=" line-clamp-3">
                <img src="./assets/home/icon-4.png" alt="" />
              </div>
              <div className="">
                <p className="font-bold">John Smith</p>
                <p>ABC Company</p>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Crafting */}

      <section>
        <div className="">
          <p className="text-center md:text-3xl text-2xl py-20 ">
            Crafting <span className="font-bold"> Tomorrow's Experiences</span>:
            A Journey from Vision to <br /> Reality, One
            <span className="font-bold"> Design</span> at a
            <span className="text-orange-600 font-bold"> Time</span>.
          </p>
        </div>
        <div className="flex md:justify-center items-star flex-col md:items-center justify-between md:flex-row">
          <div className="w-1/2 md:order-none order-2 float-none">
            <img
              src="./assets/home/photo-3.png"
              alt=""
              className="object-contain w-full"
            />
          </div>
          <div className="w-full md:order-none">
            <img
              src="./assets/home/photo-4.png"
              alt=""
              className="md:object-contain w-full"
            />
          </div>
          <div className="w-1/2 md:order-none order-2 float-right ">
            <img
              src="./assets/home/photo-5.png"
              alt=""
              className="object-contain w-full"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-center items-center">
          <img
            src="./assets/home/photo-6.png"
            alt=""
            className="md:w-32 w-28"
          />
        </div>
        <div className="text-center text-2xl">
          <p className="">
            <span className="font-bold">Social</span> Links
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-2 text-2xl">
          <div className="">
            <FaBehanceSquare />
          </div>
          <div className="">
            <FaXTwitter />
          </div>
          <div className="">
            <FaInstagram />
          </div>
          <div className="">
            <FaLinkedin />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-black flex justify-center items-center rounded-xl md:mx-20 md:my-8 mx-4 my-4 relative flex-col-reverse md:flex-row">
        <div className="flex justify-start tems-center">
          <img
            src="./assets/home/photo-1.png"
            alt=""
            className="object-contain "
          />
          <div className="absolute bottom-4 start-4">
            <div className="flex justify-start items- border rounded border-grey-200 px-4 py-2 w-full">
              <p className="text-white"> Vishesh Patel</p>
            </div>
          </div>
        </div>

        <div className="md:py-16 py-4">
          <div className="flex md:justify-start justify-center items-center px-4 py-1">
            <p className="md:text-4xl text-2xl text-white">About</p>
          </div>
          <div className="md:my-8 my-4 mx-4">
            <p className="text-white md:text-5xl text-3xl">
              A website that leaves a lasting <br />{" "}
              <span className="text-orange-600">impression!</span>
            </p>
          </div>
          <div>
            <p className="text-white md:text-lg text-sm mx-4">
              Your website is your digital storefront, and it should create an
              unforgettable impression. Let me design and develop a website that
              reflects your brand's personality and creates a lasting impression
              on your audience. With my expertise in web design , I can help you
              build a website that stands out and leaves a lasting impact. If
              you're looking for a UI/UX designer who can help you create
              exceptional digital experiences that enhance your brand and drive
              business results, let's connect.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
