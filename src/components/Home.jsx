import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <div className="">
      {/* hero section */}
      <section className="bg-black flex justify-between items-center py-4 px-20 relative">
        <div className="py-16">
          <div className="flex justify-start items-center">
            <p className="text-lg text-red-700 border rounded border-red-500 px-4 py-1">
              Hey, I’m Vishesh ヅ
            </p>
          </div>
          <div className="my-8">
            <p className="text-white text-5xl">
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

        <div className="w-539.795px h-559px flex justify-between items-end">
          <img
            src="./assets/home/photo-1.png"
            alt=""
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-10 end-10">
          <p className="text-white">My Services</p>
        </div>
      </section>

      {/* Worked with 12+ Global Enterprises */}
      <section className="my-14">
        <div className="text-center text-xl">
          <p>
            Worked with
            <span className="font-bold"> 12+</span> Global{" "}
            <span className="font-bold"> Enterprises</span>
          </p>
        </div>
        <div className="flex justify-center items-center gap-20 my-5">
          <p>Frikly</p>
          <p>Decibel</p>
          <p>Writingo</p>
          <p>CRTD Technologies</p>
          <p>Hashcase</p>
          <p>Icon 1</p>
        </div>
      </section>

      {/* Vedio Section */}
      <section className="bg-black flex justify-center items-center rounded mx-20">
        <div className="">
          <p className="text-4xl text-white text-center py-20">
            Convey your brand story through unforgettable visual design. <br />
            Captivate your audience and retain engagement with <br />
            sleek
            <span className="font-bold text-orange-700"> UI/UX</span>.
          </p>
          <div className="flex justify-center items-center w-full">
            <video src="./assets/home/video-1.mp4"autoPlay loop muted className="w-full px-60 py-28"></video>
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
        <div className="flex justify-center items-center my-5">
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

      <section className="flex justify-center items-center mx-40 border shadow-xl rounded-xl">
        <div className="w-full">
          <img
            src="./assets/home/photo-2.png"
            alt=""
            className="object-contain w-full"
          />
        </div>
        <div className="mx-8">
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
            <div className="border rounded-full flex justify-start items-center m text-lg px-4 py-2">
              <div className="w-10 me-4">
                <img src="./assets/home/icon-2.png" alt="" className="w-full" />
              </div>
              <p>Brand collateral + social media</p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Projects */}
      <section className="my-16 bg-[url('./assets/home/bg-explore.png')] bg-cover h-[90dvh] bg-no-repeat	bg-center	">
        <div className="bg-black w-full h-full opacity-70 flex justify-center items-center py-8">
          <div className="text-white">
            <p className="text-5xl font-bold">Explore Projects </p>
            <p className="my-8 text-center">
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

      <section className="flex flex-col justify-center items-center px-20 gap-x-10 my-8">
        <div className="my-8">
          <p className="text-center text-3xl">
            Check out what <span className="font-semibold"> our clients</span>{" "}
            have to say about{" "}
            <span className="text-orange-600 font-semibold"> working</span> with{" "}
            <br /> <span className="font-semibold"> me and my team.</span>
          </p>
        </div>
        <section className="grid grid-cols-3 gap-8">
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
          <p className="text-center text-3xl py-20 ">
            Crafting <span className="font-bold"> Tomorrow's Experiences</span>:
            A Journey from Vision to <br /> Reality, One
            <span className="font-bold"> Design</span> at a
            <span className="text-orange-600 font-bold"> Time</span>.
          </p>
        </div>
        <div className="flex justify-between items-start">
          <div className=" px-24 py-20 w-full">
            <img src="./assets/home/photo-3.png" alt="" />
          </div>
          <div className="px-14 py-20 w-full">
            <img src="./assets/home/photo-4.png" alt="" />
          </div>
          <div className="px-14 py-20 w-full">
            <img src="./assets/home/photo-5.png" alt="" />
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-center items-center">
          <img src="./assets/home/photo-6.png" alt="" className="w-25" />
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
      <section className="bg-black flex justify-center items-center rounded-xl mx-20 my-8">
        <div className="w-539.795px h-559px flex justify-between items-start">
          <img
            src="./assets/home/photo-1.png"
            alt=""
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-0 start-0">
          <p className="text-white">Vishesh Patel</p>
        </div>
        <div className="py-16">
          <div className="flex justify-start items-center px-4 py-1">
            <p className="text-lg text-white">About</p>
          </div>
          <div className="my-8">
            <p className="text-white text-5xl">
              A website that leaves a lasting <br />{" "}
              <span className="text-orange-600">impression!</span>
            </p>
          </div>
          <div>
            <p className="text-white text-lg">
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
