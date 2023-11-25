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
              To Upscale Ideas into Unshakable <span className="font-bold">Businesses</span>
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
          <p className="text-white">
            My Services
          </p>
        </div>
      </section>

      {/* Worked with 12+ Global Enterprises */}
      <section className="my-8">
        <div className="text-center ">
          <p>Worked with 12+ Global Enterprises</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
