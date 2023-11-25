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
              <span className="font-bold">Businesses</span>
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
            <span className="font-bold">12+</span> Global{" "}
            <span className="font-bold">Enterprises</span>
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
      <section className="bg-black flex justify-center items-center px-14 py-16">
        <div className=" w-28">
          <p className="text-2xl text-white text-start">
            Convey your brand story through unforgettable visual design.
            Captivate your audience and retain engagement with sleek
            <span className="font-bold text-orange-700">UI/UX</span>.
          </p>
        </div>
      </section>

      {/* Designs that tell your story. */}
      <section className="my-10">
        <div>
          <p className="text-3xl text-center">
            <span className="font-bold">Designs</span> that tell your
            <span className="text-orange-600">story</span>.
          </p>
          <p className="text-xl text-center my-4">
            Let our designs weave the magic of storytelling, bringing your
            <br />
            brand to life in vibrant colors and captivating visuals.
          </p>
        </div>
        <div className="flex justify-center items-center gap-20 my-5">
          <p className="text-black-700 border rounded-full border-black-800 outline outline-offset-2 px-4 py-1">
            Branding
          </p>
          <p className="text-black-700 border rounded-full border-black-800 outline outline-offset-2 px-4 py-1">
            Web Design
          </p>
          <p className="text-black-700 border rounded-full border-black-800 outline outline-offset-2 px-4 py-1">
            App Design
          </p>
          <p className="text-black-700 border rounded-full border-black-800 outline outline-offset-2 px-4 py-1">
            SASS Design
          </p>
        </div>
      </section>

      <section className="flex justify-between items-center px-40 py-20">
        <div className="">
          <img
            src="./assets/home/photo-2.png"
            alt=""
            className="object-contain w-96"
          />
        </div>
        <div className="px-20 py-20">
          <p className="text-2xl font-bold">Branding & Guidelines</p>
          <p className="py-3 text-xl">Welcome to the world of <span className="text-orange-700">seamless branding!</span> </p>
          <p className="text-xl">
            Compelling brand identities and cohesive design systems for your
            digital products. Branding is included with all packages!{" "}
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
