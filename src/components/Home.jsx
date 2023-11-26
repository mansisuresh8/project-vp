import React from "react";

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
      <section className="bg-black items-center box-content gap-x-36 gap-y-44">
        <div className="">
          <p className="text-2xl text-white text-center py-20">
            Convey your brand story through unforgettable visual design. <br />
            Captivate your audience and retain engagement with <br />
            sleek
            <span className="font-bold text-orange-700">UI/UX</span>.
          </p>
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
        <div className="flex justify-center items-center gap-20 my-5">
          <button className="text-black-700 rounded-full border-black-800 outline outline-offset-2 px-4 py-1">
            Branding
          </button>
          <button className="text-black-700 rounded-full border-black-800 outline outline-offset-2 px-4 py-1">
            Web Design
          </button>
          <button className="text-black-700 rounded-full border-black-800 outline outline-offset-2 px-4 py-1">
            App Design
          </button>
          <button className="text-black-700 rounded-full border-black-800 outline outline-offset-2 px-4 py-1">
            SASS Design
          </button>
        </div>
      </section>

      <section className="flex justify-between items-center px-40 py-20  box-content border">
        <div className="">
          <img
            src="./assets/home/photo-2.png"
            alt=""
            className="object-contain w-96"
          />
        </div>
        <div className="px-20 py-20">
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
            <div>
              <p className="border rounded-full flex justify-between items-center text-lg px-4 py-5">
                <img
                  src="./assets/home/icon-2.png"
                  alt=""
                  className="items-center"
                />
                Awesome visual Identities & logo(s)
              </p>
            </div>
            <div>
              <p className="border rounded-full flex justify-between items-center text-lg px-4 py-5">
                <img src="./assets/home/icon-2.png" alt="" />
                Brand guidelines & style guides
              </p>
            </div>
            <div>
              <p className="border rounded-full flex justify-between items-center text-lg px-4 py-5">
                <img src="./assets/home/icon-2.png" alt="" />
                Brand collateral + social media
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Projects */}
      <section className="my-16 flex justify-center items-center box-content">
        <div className="">
          <p className="text-5xl font-bold">Explore Projects </p>
          <p className="my-8 text-center">
            I create visual design that elevate your brand and <br /> attract
            more customers.
          </p>
          <div className="border rounded-full px-10 w-25 ">
            <button className="flex justify-between items-center text-lg">
              Check Now
              <img src="./assets/home/icon-2.png" alt="" />
            </button>
          </div>
        </div>
      </section>

      {/* Check out  */}
      <section className="py-20">
        <div>
          <p className="text-center text-3xl">
            Check out what <span className="font-semibold"> our clients</span>{" "}
            have to say about{" "}
            <span className="text-orange-600 font-semibold"> working</span> with{" "}
            <br /> <span className="font-semibold"> me and my team.</span>
          </p>
        </div>
      </section>
      <section className="flex justify-start items-center px-20 gap-x-10">
        <div className="w-25 flex justify-center items-center flex-col border ">
          <img src="./assets/home/icon-3.png" alt="" />
          <p className="">
            Exceptional web design that exceeded our expectations
          </p>
          <div>
            <p>
              Our website redesign surpassed our expectations. Aiko's attention
              to detail and creativity resulted in a visually stunning and
              user-friendly site.
            </p>
          </div>
        </div>

        <div className="w-25 flex justify-center items-center flex-col border ">
          <img src="./assets/home/icon-3.png" alt="" />
          <p className="">
            Exceptional web design that exceeded our expectations
          </p>
          <div>
            <p>
              Our website redesign surpassed our expectations. Aiko's attention
              to detail and creativity resulted in a visually stunning and
              user-friendly site.
            </p>
          </div>
        </div>

        <div className="w-25 flex justify-center items-center flex-col border ">
          <img src="./assets/home/icon-3.png" alt="" />
          <p className="">
            Exceptional web design that exceeded our expectations
          </p>
          <div>
            <p>
              Our website redesign surpassed our expectations. Aiko's attention
              to detail and creativity resulted in a visually stunning and
              user-friendly site.
            </p>
          </div>
        </div>
      </section>

      <section className="flex justify-start items-center px-20 py-20 gap-x-10 ">
        <div className="w-25 flex justify-center items-center flex-col border ">
          <img src="./assets/home/icon-3.png" alt="" />
          <p className="">
            Exceptional web design that exceeded our expectations
          </p>
          <div>
            <p>
              Our website redesign surpassed our expectations. Aiko's attention
              to detail and creativity resulted in a visually stunning and
              user-friendly site.
            </p>
          </div>
        </div>

        <div className="w-25 flex justify-center items-center flex-col border ">
          <img src="./assets/home/icon-3.png" alt="" />
          <p className="">
            Exceptional web design that exceeded our expectations
          </p>
          <div>
            <p>
              Our website redesign surpassed our expectations. Aiko's attention
              to detail and creativity resulted in a visually stunning and
              user-friendly site.
            </p>
          </div>
        </div>

        <div
          className="w-25 flex justify-center items-center flex-col border "
          dir="ltr"
        >
          <div dir="ltr">
            <img
              src="./assets/home/icon-3.png"
              alt=""
              className="relative top-1 start-1"
            />
          </div>

          <p className="">
            Exceptional web design that exceeded our expectations
          </p>
          <div>
            <p>
              Our website redesign surpassed our expectations. Aiko's attention
              to detail and creativity resulted in a visually stunning and
              user-friendly site.
            </p>
          </div>
        </div>
      </section>

      {/* Crafting */}

      <section>
        <div className="">
          <p className="text-center text-3xl ">
            Crafting <span className="font-bold"> Tomorrow's Experiences</span>:
            A Journey from Vision to <br /> Reality, One
            <span className="font-bold"> Design</span> at a{" "}
            <span className="text-orange-600 font-bold"> Time</span>.
          </p>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-start">
          <div className=" px-14 py-20">
            <img src="./assets/home/photo-3.png" alt="" />
          </div>
          <div className="px-14 py-20">
            <img src="./assets/home/photo-4.png" alt="" />
          </div>
          <div className="px-14 py-20">
            <img src="./assets/home/photo-5.png" alt="" />
          </div>
        </div>
      </section>

      <section>
        <div className=" py-14 flex justify-center items-center">
          <div className="rounded-full"></div>
          <img src="./assets/home/photo-6.png" alt="" />
        </div>
        <div className="">
          <p className="text-center" >Social Links</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
