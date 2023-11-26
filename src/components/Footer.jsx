import React from "react";

function Footer() {
  return (
    <div className="">
      <section className="bg-black flex justify-between items-center py-32 px-20 relative">
        <div className="py-20">
          <div className="flex justify-start items-center">
            <p className="text-lg text-white">
              Ready to setup your Brand to Next Level?
            </p>
          </div>
        </div>
        <div className="">
          <button className="text-white border ">Book A Call</button>
        </div>
        <div>
          <button className="text-white border ">Contact Me</button>
        </div>
      </section>
      <section>
        <div>
          <p>Patelvishesh089@gmail.com</p>
        </div>
      </section>
    </div>
  );
}

export default Footer;
