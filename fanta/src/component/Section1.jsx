import React from "react";

const Section1 = () => {
  return (
    <div className="Section1">
      <section className="bg-orangered w-full">
        <nav className="px-8 py-8">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-between">
              <div className="logo py-7">
                <h2 className="text-4xl text-white font-bold">SOFTY</h2>
              </div>
              <div>
                <ul className="flex flex-wrap">
                  <li className="text-white text-xl px-3">Home</li>
                  <li className="text-white text-xl px-3">About</li>
                  <li className="text-white text-xl px-3">Products</li>
                  <li className="text-white text-xl px-3">Contact US</li>
                </ul>
              </div>
              <div className="bar">
                <button className="text-white text-xl px-3">Login</button>
              </div>
            </div>
          </div>
        </nav>
        <div className="fanta py-14 relative">
          <h1 className="uppercase text-white font-extrabold text-[200px] text-center tracking-widest">
            fanta
          </h1>
          <img
            src="public/leaf1.png"
            alt="leaf1"
            className="h-44 absolute right-[34%] top-6 z-10 -rotate-45"
          />
          <img
            src="public/leaf2.png"
            alt="leaf1"
            className="h-44 absolute left-40 top-14 z-10 -rotate-45"
          />
          <img
            src="public/orange.png"
            alt="orange-cut"
            className="h-64 absolute left-80 -top-8 z-10"
          />
          <img
            src="public/fanta.png"
            className="mx-auto h-96 z-20 absolute bottom-0 left-[40%]"
            alt="fanta"
          />
          <img
            src="public/orange2.png"
            alt="orange-cut"
            className="h-52 absolute right-80 -bottom-4 z-30"
          />
        </div>
      </section>
    </div>
  );
};

export default Section1;
