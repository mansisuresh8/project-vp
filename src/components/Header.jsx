import React from "react";

function Header() {
  return (
    <div className="flex justify-between items-center py-4 bg-black text-white w-full px-20">
      <section>
        <p>Logo</p>
      </section>
      <section className="flex justify-center items-center gap-4">
        <p>Services</p>
        <p>Services</p>
        <p>Services</p>
        <p>Services</p>
        <p className="text-red-700">Lest's Talk</p>
      </section>
    </div>
  );
}

export default Header;
